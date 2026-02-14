import type { Metadata } from 'next';
import About from '@/views/About';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about Trill Labs Ltd, a UK-based software studio, and our values.',
};

export default function AboutPage() {
  return <About />;
}
