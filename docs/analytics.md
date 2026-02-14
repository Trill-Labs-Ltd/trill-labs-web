# Limba Analytics Specification

> **Owner:** Product / Analytics  
> **Last updated:** 2026-02-07  
> **Platform:** Mixpanel  
> **Sources:** Mobile app (React Native) · Backend (Spring Boot)

---

## 1. Identity & Privacy

| Concept | Detail |
|---------|--------|
| **Authenticated ID** | Supabase `auth.user_id` (UUID), set as `distinct_id` after login |
| **Anonymous ID** | Stable `device_id` (UUID, persisted in AsyncStorage), used before login |
| **Aliasing** | On first login, `device_id` is aliased to `user_id` to merge pre- and post-auth event streams |
| **Logout** | Mixpanel is reset and re-identified with `device_id` |
| **Consent** | All tracking is gated behind explicit user consent. No events fire until consent is granted |
| **PII** | No PII (email, name, phone, etc.) is sent to Mixpanel |

---

## 2. Super Properties (Auto-Attached)

### Client (Mobile)

| Property | Type | Example | Notes |
|----------|------|---------|-------|
| `env` | string | `prod` | `dev` / `staging` / `prod` |
| `app_version` | string | `1.4.2` | Semantic version from app config |
| `platform` | string | `ios` | `ios` / `android` |
| `build` | string | `preview` | EAS build profile / channel |
| `build_profile` | string | `preview` | Same as `build` |
| `timezone` | string | `Europe/London` | Device timezone |
| `locale` | string | `en-GB` | Device locale |
| `device_id` | string | UUID | Stable anonymous device identifier |

### Server (Backend)

| Property | Type | Example | Notes |
|----------|------|---------|-------|
| `env` | string | `prod` | From `ENVIRONMENT` env var, default `dev` |
| `service` | string | `backend` | Always `"backend"` |
| `insert_id` | string | `{key}:event_name` | Idempotency key (when applicable) |

---

## 3. Event Taxonomy

### 3.1 App Lifecycle

| Event | Properties | Fired When |
|-------|-----------|------------|
| `App Opened` | `entry_point`: `icon` \| `push` \| `deep_link`, `push_campaign?`: string | App comes to foreground |
| `App Backgrounded` | *(none)* | App moves to background |
| `Screen Viewed` | `screen_name`: string | Navigation route changes |

### 3.2 Onboarding

| Event | Properties | Fired When |
|-------|-----------|------------|
| `Onboarding Started` | `onboarding_version`: string | User enters first onboarding screen |
| `Onboarding Step Viewed` | `step_id`: string, `step_name`: string | Each onboarding step is displayed |
| `Onboarding Step Completed` | `step_id`: string, `step_name`: string, `time_on_step_ms`: number | User advances past a step |
| `Onboarding Completed` | `onboarding_version`: string, `onboarding_duration_ms?`: number | User finishes full onboarding flow |
| `Discomfort Check Submitted` | `baseline_or_followup`: `baseline` \| `followup`, `discomfort_rating_before?`: number, `target_areas`: string[] | User submits discomfort assessment |

### 3.3 Authentication

| Event | Properties | Fired When |
|-------|-----------|------------|
| `Account Created` | `method`: `email` \| `google` \| `apple` | New account registered |

### 3.4 Routine

| Event | Source | Properties | Fired When |
|-------|--------|-----------|------------|
| `Routine Viewed` | Client | `routine_date`: string, `ai_generated`: boolean, `total_duration_sec`: number | User opens routine detail screen |
| `Routine Started` | Client | `routine_date`: string, `ai_generated`: boolean, `total_duration_sec`: number | User begins first stretch in player |
| `Routine Abandoned` | Client | `routine_date`: string, `ai_generated`: boolean, `total_duration_sec`: number, `seconds_spent_in_routine`: number, `reason`: `exit` \| `background` | User exits before completion |
| `Routine Completed` | Server | `routine_date`: string, `ai_generated`: boolean, `total_duration_sec`: number, `normalised`: boolean, `completion_source`: string, `reminder_id?`: string | Backend marks routine complete |

**Idempotency:** `Routine Completed` uses `insert_id` = `{idempotencyKey}:routine_completed` to prevent duplicate events.

### 3.5 Stretch

| Event | Properties | Fired When |
|-------|-----------|------------|
| `Stretch Played` | `stretch_id`: string, `stretch_name`: string, `target_area`: string | Timer starts on a stretch |
| `Stretch Completed` | `stretch_id`: string, `target_area`: string, `context`: `in_routine` \| `library`, `duration_sec`: number | Stretch timer finishes (both sides if bilateral) |

**Context values:**
- `in_routine` — stretch completed as part of the daily routine player
- `library` — stretch completed standalone from the wellness library

### 3.6 Paywall & Purchases

| Event | Properties | Fired When |
|-------|-----------|------------|
| `Paywall Viewed` | `placement?`: string | Paywall screen displayed |
| `Paywall CTA Clicked` | `placement?`: string, `cta`: string, `plan_id?`: string | User taps a purchase/CTA button |
| `purchase_started` | `plan_id`: string, `plan_type`: string | Purchase flow initiated |
| `purchase_success` | `plan_id`: string, `plan_type`: string | Purchase completed successfully |
| `purchase_failed` | `plan_id`: string, `error`: string | Purchase errored |
| `purchase_cancelled` | `plan_id`: string | User cancelled purchase flow |
| `restore_started` | *(none)* | User taps restore purchases |
| `restore_success` | `has_subscription`: boolean | Restore completed |
| `restore_failed` | `error`: string | Restore errored |
| `Subscription Status Changed` | `event_type`: string, `status`: `active` \| `expired` \| `cancelled` \| `trial` \| `grace_period`, `platform`: string, `plan`: string, `product_id`: string, `expires_at?`: string | Server — RevenueCat webhook fires |

### 3.7 Notifications

| Event | Properties | Fired When |
|-------|-----------|------------|
| `Notification Permission Prompted` | `source`: string | OS permission dialog shown |
| `Notification Opt In Changed` | `opted_in`: boolean, `source`: string | User grants/revokes notification permission |
| `Reminder Tapped` | `reminder_id`: string, `reminder_type`: string, `scheduled_for?`: string | User opens app from a push notification |

### 3.8 Gamification (Server)

| Event | Properties | Fired When |
|-------|-----------|------------|
| `Streak Updated` | `current_streak`: number, `longest_streak`: number, `last_completed_date`: string | Streak changes on routine completion |
| `Avatar State Changed` | `avatar_state`: string, `current_streak`: number | Avatar evolves based on streak |
| `Milestone Unlocked` | `milestone_id`: string (UUID), `milestone_code`: string, `milestone_title`: string, `metric_type`: string, `metric_target`: number | User reaches a milestone threshold |

**Idempotency:** `Streak Updated`, `Avatar State Changed`, and `Milestone Unlocked` all use `insert_id` keys to prevent duplicates.

### 3.9 Debug

| Event | Properties | Fired When |
|-------|-----------|------------|
| `Test Event` | `source`: `staging_debug` | Manual trigger from profile settings (staging only) |

---

## 4. Key Funnels & Metrics

### Funnels

| Funnel | Steps | Purpose |
|--------|-------|---------|
| **Onboarding → Signup** | `Onboarding Started` → `Onboarding Completed` → `Account Created` | Measure onboarding drop-off and signup conversion |
| **Time to Value** | `Account Created` → `Routine Completed` | How quickly new users complete their first routine |
| **Paywall Conversion** | `Paywall Viewed` → `Paywall CTA Clicked` → `purchase_success` | Paywall effectiveness and purchase conversion |
| **Subscription Conversion** | `Paywall Viewed` → `Subscription Status Changed` (status=`active`) | End-to-end subscription conversion |
| **Routine Completion** | `Routine Started` → `Routine Completed` | What percentage of started routines are finished |
| **Purchase Flow** | `purchase_started` → `purchase_success` \| `purchase_failed` \| `purchase_cancelled` | Purchase flow drop-off analysis |
| **Push → Completion** | `Reminder Tapped` → `Routine Completed` (where `completion_source=push`) | Push notification effectiveness |

### Ratio Metrics

| Metric | Formula | Purpose |
|--------|---------|---------|
| **Routine abandon rate** | `count(Routine Abandoned)` / `count(Routine Started)` | Fraction of routines not completed |
| **Notification opt-in rate** | `count(Notification Opt In Changed, opted_in=true)` / `count(Notification Permission Prompted)` | Push permission acceptance |
| **Restore rate** | `count(restore_success, has_subscription=true)` / `count(restore_started)` | Restore success rate |

### Trend Metrics

| Metric | Event / Property | Chart Type |
|--------|-----------------|------------|
| **Streak distribution** | `Streak Updated` → `current_streak` | Histogram / line |
| **Milestone progression** | `Milestone Unlocked` → group by `metric_type` | Bar / stacked area |
| **Discomfort improvement** | `Discomfort Check Submitted` → compare `baseline` vs `followup` ratings after 14 days | Custom cohort |
| **Churn** | `Subscription Status Changed` where `status` = `expired` \| `cancelled` | Retention curve |

---

## 5. Recommended Mixpanel Reports

| # | Report | Type | Events |
|---|--------|------|--------|
| 1 | Onboarding Funnel | Funnel | `Onboarding Started` → `Onboarding Completed` → `Account Created` |
| 2 | Paywall Funnel | Funnel | `Paywall Viewed` → `Paywall CTA Clicked` → `purchase_success` |
| 3 | Routine Completion | Funnel | `Routine Started` → `Routine Completed` |
| 4 | Streak Trend | Insights (line) | `Streak Updated` — avg `current_streak` over time |
| 5 | Push Effectiveness | Funnel | `Reminder Tapped` → `Routine Completed` (filter `completion_source=push`) |
| 6 | Purchase Flow | Funnel | `purchase_started` → `purchase_success` / `purchase_failed` / `purchase_cancelled` |
| 7 | Subscription Status | Insights (bar) | `Subscription Status Changed` — breakdown by `status` |
| 8 | Onboarding Step Drop-off | Funnel | Sequence of `Onboarding Step Completed` by `step_id` |

---

## 6. QA Checklist

- [ ] Consent modal blocks all tracking until user opts in
- [ ] `distinct_id` = Supabase `user_id` after login; resets to `device_id` on logout
- [ ] Pre-login events merge with post-login via alias
- [ ] `Screen Viewed` fires on every navigation change
- [ ] `App Opened` includes correct `entry_point` and `push_campaign` when opened from a push
- [ ] `Routine Completed` fires exactly once per completion (verify `insert_id` deduplication)
- [ ] `Stretch Completed` has correct `context` value (`in_routine` vs `library`)
- [ ] Purchase events fire in correct sequence: `purchase_started` → success/failed/cancelled
- [ ] `Subscription Status Changed` fires on RevenueCat webhooks (check all status transitions)
- [ ] `Discomfort Check Submitted` distinguishes `baseline` vs `followup`
- [ ] `Test Event` only appears in staging environment
- [ ] All events include super properties (`env`, `platform`, `app_version`, etc.)
- [ ] No PII in any event payload

---

## 7. Architecture Notes

| Component | Detail |
|-----------|--------|
| **Mobile SDK** | `mixpanel-react-native` ^3.2.1 |
| **Mobile init** | On consent grant, in root `_layout.tsx` |
| **Mobile token** | `EXPO_PUBLIC_MIXPANEL_TOKEN` env var |
| **Backend client** | Custom HTTP client via `MixpanelAnalyticsService.java` (calls Mixpanel `/track` API directly) |
| **Backend token** | `MIXPANEL_TOKEN` env var |
| **Backend env** | `ENVIRONMENT` env var (default: `dev`) |
| **Idempotency** | Backend events use `insert_id` to prevent duplicates on retries |
