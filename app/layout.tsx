import type { Metadata } from 'next';
import { DM_Sans, Playfair_Display } from 'next/font/google';

import Footer from '@/components/Footer';
import MobileCtaBar from '@/components/MobileCtaBar';
import Navbar from '@/components/Navbar';

import './globals.css';

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
  display: 'swap',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'Andy Landscaping Services | Herndon, VA',
    template: '%s | Andy Landscaping Services',
  },
  description:
    'Professional landscaping, lawn maintenance, and yard services in Herndon, VA. Locally owned and operated. Free estimates available. Call (703) 609-4875.',
  keywords: [
    'landscaping Herndon VA',
    'lawn maintenance Herndon',
    'yard maintenance near me',
    'lawn care Herndon VA',
    'landscaping services Northern Virginia',
    'mulch installation Herndon',
    'tree cutting Herndon VA',
    'gutter cleaning Herndon',
    'weed control Herndon VA',
    'leaf removal Herndon VA',
  ],
  authors: [{ name: 'Andy Landscaping Services, LLC' }],
  creator: 'Andy Landscaping Services, LLC',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://andylandscaping.com',
    siteName: 'Andy Landscaping Services',
    title: 'Andy Landscaping Services | Herndon, VA',
    description:
      'Reliable, affordable landscaping and yard services for homeowners in Herndon, Reston, Sterling, and surrounding areas.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Andy Landscaping Services | Herndon, VA',
    description:
      'Reliable, affordable landscaping and yard services for homeowners in Herndon, VA.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

type RootLayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" className={`${dmSans.variable} ${playfair.variable}`}>
      <body className="font-sans bg-brand-bg text-gray-900 antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <MobileCtaBar />
      </body>
    </html>
  );
}
