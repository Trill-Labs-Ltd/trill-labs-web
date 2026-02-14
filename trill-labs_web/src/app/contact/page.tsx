import type { Metadata } from 'next';
import Contact from '@/views/Contact';

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Get in touch with Trill Labs Ltd.',
};

export default function ContactPage() {
  return <Contact />;
}
