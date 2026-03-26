import type { Metadata } from 'next';
import Link from 'next/link';

import ContactSection from '@/components/ContactSection';
import { BUSINESS, services } from '@/lib/services';

export const metadata: Metadata = {
  title: 'Landscaping Services in Herndon, VA — Lawn Care, Mulch, Tree Cutting & More',
  description:
    'Full-service landscaping in Herndon, VA. Lawn maintenance, mulch installation, weed control, tree cutting, gutter cleaning, stone work, and more. Free estimates.',
};

const serviceIcons: Record<string, React.ReactNode> = {
  'general-landscaping': (
    <svg
      width="28"
      height="28"
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
      width="28"
      height="28"
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
      width="28"
      height="28"
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
      width="28"
      height="28"
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
      width="28"
      height="28"
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
      width="28"
      height="28"
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
      width="28"
      height="28"
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
      width="28"
      height="28"
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
      width="28"
      height="28"
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
      width="28"
      height="28"
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
      width="28"
      height="28"
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
      width="28"
      height="28"
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

export default function ServicesPage() {
  return (
    <>
      {/* Page Hero */}
      <section
        className="relative bg-brand-green pt-36 pb-24 overflow-hidden"
        aria-label="Services page hero"
      >
        <div className="absolute inset-0 opacity-10" aria-hidden="true">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                'radial-gradient(circle at 20% 60%, #4ade80 0%, transparent 50%), radial-gradient(circle at 75% 25%, #ca8a04 0%, transparent 45%)',
            }}
          />
        </div>
        <div className="container-wide relative z-10 text-center">
          <span className="badge bg-white/20 text-white mb-4">What We Offer</span>
          <h1 className="heading-display text-white text-4xl sm:text-5xl lg:text-6xl mb-5 text-balance">
            Every Service Your
            <span className="block text-brand-green-light">Yard Could Need</span>
          </h1>
          <p className="text-green-200 text-lg max-w-2xl mx-auto leading-relaxed mb-8">
            From weekly lawn mowing to full landscape overhauls — Andy Landscaping handles it all.
            One local team, one call, complete yard care.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={BUSINESS.phoneHref}
              className="inline-flex items-center gap-2 bg-brand-green-light hover:bg-green-300 text-green-950 font-bold px-7 py-3.5 rounded-xl transition-all hover:shadow-lg text-sm"
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
              Call for a Free Estimate
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 border-2 border-white/50 hover:border-white text-white font-semibold px-7 py-3.5 rounded-xl transition-all hover:bg-white/10 text-sm"
            >
              Send a Message
            </Link>
          </div>
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

      {/* All Services */}
      <section className="section-padding bg-brand-bg" aria-label="All services">
        <div className="container-wide">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service) => (
              <article
                key={service.id}
                id={service.slug}
                className="bg-white rounded-2xl p-8 shadow-sm border border-green-100 hover:shadow-lg hover:border-brand-green/20 transition-all duration-300 group scroll-mt-24"
              >
                <div className="flex items-start gap-5">
                  <div className="w-14 h-14 rounded-2xl bg-brand-green/10 text-brand-green flex items-center justify-center flex-shrink-0 group-hover:bg-brand-green group-hover:text-white transition-all duration-300">
                    {serviceIcons[service.slug]}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h2 className="font-display font-bold text-gray-900 text-xl mb-2">
                      {service.title}
                    </h2>
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">
                      {service.fullDescription}
                    </p>
                    <ul className="space-y-1.5" aria-label={`Benefits of ${service.title}`}>
                      {service.benefits.map((benefit) => (
                        <li key={benefit} className="flex items-start gap-2 text-sm text-gray-600">
                          <svg
                            width="14"
                            height="14"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="#166534"
                            strokeWidth="2.5"
                            strokeLinecap="round"
                            className="mt-0.5 flex-shrink-0"
                            aria-hidden="true"
                          >
                            <polyline points="20 6 9 17 4 12" />
                          </svg>
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="mt-6 pt-5 border-t border-gray-100 flex items-center justify-between">
                  <span className="text-xs text-brand-green font-semibold bg-green-50 px-3 py-1 rounded-full">
                    Free Estimate Available
                  </span>
                  <a
                    href={BUSINESS.phoneHref}
                    className="text-sm font-semibold text-brand-green hover:text-brand-green-dark flex items-center gap-1.5 transition-colors"
                  >
                    Call to Book
                    <svg
                      width="13"
                      height="13"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      aria-hidden="true"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <ContactSection />
    </>
  );
}
