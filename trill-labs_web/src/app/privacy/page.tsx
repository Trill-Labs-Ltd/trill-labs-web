import type { Metadata } from 'next';
import Privacy from '@/views/Privacy';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Privacy Policy for Trill Labs Ltd. How we collect, use, and protect your information.',
};

export default function PrivacyPage() {
  return <Privacy />;
}
