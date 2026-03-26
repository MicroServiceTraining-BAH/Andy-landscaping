import Link from 'next/link';

import { services } from '@/lib/services';

const serviceIcons: Record<string, React.ReactNode> = {
  'general-landscaping': (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  ),
  'lawn-maintenance': (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M3 17l9-14 9 14" />
      <path d="M3 17h18" />
      <path d="M7 17v3" />
      <path d="M17 17v3" />
    </svg>
  ),
  'gutter-cleaning': (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M3 9h18v3a6 6 0 0 1-6 6H9a6 6 0 0 1-6-6z" />
      <path d="M9 18v3" />
      <path d="M15 18v3" />
      <path d="M3 9V6l9-3 9 3v3" />
    </svg>
  ),
  'weed-control': (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M12 22V12" />
      <path d="M12 12C10 8 6 7 3 9c3 1 7 2 9 3z" />
      <path d="M12 12C14 8 18 7 21 9c-3 1-7 2-9 3z" />
      <path d="M12 12C10 15 8 18 6 21" />
    </svg>
  ),
  'junk-removal': (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <polyline points="3 6 5 6 21 6" />
      <path d="M19 6l-1 14H6L5 6" />
      <path d="M10 11v6" />
      <path d="M14 11v6" />
      <path d="M9 6V4h6v2" />
    </svg>
  ),
  'leaf-removal': (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10z" />
      <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
    </svg>
  ),
  'tree-cutting': (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M12 22v-9" />
      <path d="M6 9l6-7 6 7H6z" />
      <path d="M3 14l9-5 9 5H3z" />
    </svg>
  ),
  fertilizing: (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M12 2a10 10 0 1 0 10 10" />
      <path d="M12 8v4l3 3" />
      <path d="M22 2l-5 5" />
      <path d="M17 2h5v5" />
    </svg>
  ),
  planting: (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M7 20h10" />
      <path d="M12 20v-9" />
      <path d="M5 9c0-3.5 3-6 7-6s7 2.5 7 6" />
      <path d="M5 9h14" />
    </svg>
  ),
  'mulch-installation': (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" />
      <path d="M4 22v-7" />
    </svg>
  ),
  'stone-work': (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="3" y="12" width="6" height="8" rx="1" />
      <rect x="9" y="8" width="6" height="12" rx="1" />
      <rect x="15" y="14" width="6" height="6" rx="1" />
      <line x1="2" y1="20" x2="22" y2="20" />
    </svg>
  ),
  'foundation-repair': (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M2 22h20" />
      <path d="M3 22V10l9-8 9 8v12" />
      <path d="M9 22v-4h6v4" />
      <path d="M9 14h6" />
    </svg>
  ),
};

type ServicesGridProps = {
  preview?: boolean;
};

export default function ServicesGrid({ preview = false }: ServicesGridProps) {
  const displayServices = preview ? services.slice(0, 8) : services;

  return (
    <section className="section-padding bg-brand-bg" aria-label="Our services" id="services">
      <div className="container-wide">
        <div className="text-center mb-14">
          <span className="badge bg-brand-green/10 text-brand-green mb-3">What We Do</span>
          <h2 className="heading-display text-3xl sm:text-4xl text-gray-900">
            Full-Service Yard Care,
            <span className="text-brand-green block sm:inline"> One Team</span>
          </h2>
          <p className="mt-4 text-gray-500 max-w-2xl mx-auto text-base leading-relaxed">
            From weekly lawn mowing to mulch installation, stone work, and beyond — Andy Landscaping
            handles every outdoor need for homeowners across Northern Virginia.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {displayServices.map((service) => (
            <Link
              key={service.id}
              href={`/services#${service.slug}`}
              className="service-card group block"
              aria-label={service.title}
            >
              <div className="w-12 h-12 rounded-xl bg-brand-green/10 flex items-center justify-center text-brand-green mb-4 group-hover:bg-brand-green group-hover:text-white transition-all duration-300">
                {serviceIcons[service.slug]}
              </div>
              <h3 className="font-display font-bold text-gray-900 text-base mb-2">
                {service.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed line-clamp-3">
                {service.shortDescription}
              </p>
              <div className="mt-4 flex items-center gap-1 text-brand-green text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Learn more
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  aria-hidden="true"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </div>
            </Link>
          ))}
        </div>

        {preview && (
          <div className="text-center mt-10">
            <Link href="/services" className="btn-primary inline-flex">
              View All 12 Services
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
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        )}

        {/* CTA strip */}
        <div className="mt-16 bg-brand-green rounded-2xl p-8 lg:p-10 flex flex-col lg:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="font-display font-bold text-white text-2xl mb-1">
              Not sure what you need?
            </h3>
            <p className="text-green-200 text-sm">
              Call us and we&apos;ll walk through your yard and give you a free, honest assessment.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
            <a
              href="tel:+17036094875"
              className="inline-flex items-center justify-center gap-2 bg-brand-green-light hover:bg-green-300 text-green-950 font-bold px-6 py-3 rounded-xl text-sm transition-all hover:shadow-lg"
            >
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
              (703) 609-4875
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 border-2 border-white/50 hover:border-white text-white font-semibold px-6 py-3 rounded-xl text-sm transition-all hover:bg-white/10"
            >
              Free Estimate
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
