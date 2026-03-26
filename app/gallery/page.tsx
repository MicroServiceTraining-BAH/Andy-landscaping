import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

import { BUSINESS } from '@/lib/services';

export const metadata: Metadata = {
  title: 'Gallery — Landscaping Projects in Herndon, VA',
  description:
    'Browse Andy Landscaping Services project gallery. See our lawn maintenance, mulch installation, stone work, and landscaping results in Herndon and Northern Virginia.',
};

const galleryItems = [
  {
    src: '/images/lawn-maintenance.jpg',
    alt: 'Pristine green lawn after professional mowing and edging service in Herndon, VA',
    category: 'Lawn Maintenance',
    description: 'Clean cut, sharp edges — every single visit.',
  },
  {
    src: '/images/lawn-care.jpg',
    alt: 'Well-maintained residential lawn with clean borders in Herndon, VA',
    category: 'Lawn Care',
    description: 'Well-maintained lawn with crisp lines throughout.',
  },
  {
    src: '/images/yard-maintenance.jpg',
    alt: 'Professional yard maintenance with wheelbarrow and garden bed in Herndon, VA',
    category: 'Yard Maintenance',
    description: 'Hands-on care with attention to every detail.',
  },
  {
    src: '/images/stone-work-planting.jpg',
    alt: 'Stone edging and fresh planting in a residential garden in Herndon, VA',
    category: 'Stone Work & Planting',
    description: 'Stone edging paired with seasonal plantings.',
  },
  {
    src: '/images/tree-cutting.jpg',
    alt: 'Tree trimming and cutting service on a residential property in Herndon, VA',
    category: 'Tree Cutting',
    description: 'Safe, clean tree trimming and branch removal.',
  },
  {
    src: '/images/general-landscaping.jpg',
    alt: 'Full backyard landscaping transformation in Herndon, VA',
    category: 'General Landscaping',
    description: 'Full backyard transformation — turf, beds, and trees.',
  },
];

export default function GalleryPage() {
  return (
    <>
      {/* Page Hero */}
      <section
        className="relative bg-brand-green pt-36 pb-24 overflow-hidden"
        aria-label="Gallery page hero"
      >
        <div className="absolute inset-0 opacity-10" aria-hidden="true">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                'radial-gradient(circle at 60% 40%, #4ade80 0%, transparent 55%), radial-gradient(circle at 15% 70%, #ca8a04 0%, transparent 45%)',
            }}
          />
        </div>
        <div className="container-wide relative z-10 text-center">
          <span className="badge bg-white/20 text-white mb-4">Our Work</span>
          <h1 className="heading-display text-white text-4xl sm:text-5xl lg:text-6xl mb-5 text-balance">
            Results You Can
            <span className="block text-brand-green-light">See from the Street</span>
          </h1>
          <p className="text-green-200 text-lg max-w-2xl mx-auto leading-relaxed">
            Every project is a reflection of our commitment to clean, professional results. Browse
            our work across Herndon and Northern Virginia.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 overflow-hidden leading-none">
          <svg
            viewBox="0 0 1440 60"
            preserveAspectRatio="none"
            className="w-full h-10 lg:h-16 fill-brand-bg"
            aria-hidden="true"
          >
            <path d="M0,60 L1440,0 L1440,60 Z" />
          </svg>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="section-padding bg-brand-bg" aria-label="Project photos">
        <div className="container-wide">
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-5 space-y-5">
            {galleryItems.map((item, index) => (
              <div
                key={`${item.category}-${index}`}
                className="break-inside-avoid rounded-2xl overflow-hidden group relative bg-white shadow-sm border border-green-100"
              >
                <div className="relative overflow-hidden">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    width={900}
                    height={index % 3 === 0 ? 600 : 400}
                    className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-green-950/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="p-4">
                  <span className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-green uppercase tracking-wide mb-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-green-light" />
                    {item.category}
                  </span>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-16 text-center">
            <p className="text-gray-500 text-base mb-6">
              Like what you see? Let&apos;s transform your yard next.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href={BUSINESS.phoneHref} className="btn-primary">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  aria-hidden="true"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2.18h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.18 6.18l1.91-1.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                Call for a Free Estimate
              </a>
              <Link href="/contact" className="btn-outline">
                Send a Message
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
