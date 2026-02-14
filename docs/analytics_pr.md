# Mixpanel Analytics PR Notes

## New Environment Variables
- `MIXPANEL_TOKEN` (mobile + backend)
- `MIXPANEL_API_BASE` (backend, optional; default `https://api.mixpanel.com`)
- `ENVIRONMENT` (backend, for `env` property)
- `APP_ENV` (mobile, for `env` property)
- `BUILD_PROFILE` (mobile, for `build_profile`)

## Verification Steps
1. Launch the app in staging and confirm the analytics consent modal appears.
2. Accept consent and verify `Screen Viewed` and `App Opened` events in Mixpanel Live View.
3. Complete onboarding: check `Onboarding Started/Step Viewed/Step Completed/Completed`.
4. Trigger paywall: confirm `Paywall Viewed` and `Paywall CTA Clicked`.
5. Complete a routine: verify backend events `Routine Completed`, `Streak Updated`, `Milestone Unlocked` (if applicable), `Avatar State Changed`.
6. Trigger RevenueCat webhook (staging): confirm `Subscription Status Changed`.

## Notes
- All events are consent-gated on the client.
- Server events use Mixpanel HTTP API with `service="backend"` and `env` properties.
- Routine completion events include idempotency-based `insert_id` to prevent duplicates.
- Supabase migration adds `analytics` to `user_consent_events.consent_type`.
