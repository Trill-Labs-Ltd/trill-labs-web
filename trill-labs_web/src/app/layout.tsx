import type { Metadata } from 'next';
import './global.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';

export const metadata: Metadata = {
  title: {
    template: '%s | Trill Labs Ltd',
    default: 'Trill Labs Ltd',
  },
  description: 'Trill Labs Ltd is a UK-based software studio building AI-powered applications and scalable software products.',
  openGraph: {
    title: 'Trill Labs Ltd',
    description: 'Trill Labs Ltd is a UK-based software studio building AI-powered applications and scalable software products.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap" rel="stylesheet" />
      </head>
      <body>
        <ScrollToTop />
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
