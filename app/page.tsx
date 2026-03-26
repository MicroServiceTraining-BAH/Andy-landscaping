import type { Metadata } from 'next';

import AboutSection from '@/components/AboutSection';
import ContactSection from '@/components/ContactSection';
import GallerySection from '@/components/GallerySection';
import Hero from '@/components/Hero';
import ServicesGrid from '@/components/ServicesGrid';
import TrustBar from '@/components/TrustBar';

export const metadata: Metadata = {
  title: 'Andy Landscaping Services | Lawn Care & Yard Maintenance Herndon, VA',
  description:
    'Andy Landscaping Services, LLC — Professional lawn care, landscaping, mulch installation, tree cutting, and more in Herndon, VA. Locally owned. Free estimates. Call (703) 609-4875.',
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustBar />
      <ServicesGrid preview />
      <AboutSection />
      <GallerySection />
      <ContactSection />
    </>
  );
}
