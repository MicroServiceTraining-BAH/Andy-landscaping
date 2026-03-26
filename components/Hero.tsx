import Image from 'next/image';
import Link from 'next/link';

import { BUSINESS } from '@/lib/services';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden" aria-label="Hero">
      {/* Background Image */}
      <Image
        src="/images/general-landscaping.jpg"
        alt="Lush green landscaped lawn in Herndon, VA"
        fill
        priority
        className="object-cover object-center"
        sizes="100vw"
      />

      {/* Gradient overlay — deep green left, transparent right */}
      <div className="absolute inset-0 bg-gradient-to-r from-green-950/95 via-green-900/80 to-green-800/40" />
      <div className="absolute inset-0 bg-gradient-to-t from-green-950/60 via-transparent to-transparent" />

      {/* Content */}
      <div className="relative z-10 container-wide pt-24 pb-20 lg:pt-32 lg:pb-28">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-brand-gold/20 border border-brand-gold/40 text-brand-gold-light px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest mb-6 animate-fade-in">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-gold-light animate-pulse" />
            Serving Herndon & Northern Virginia
          </div>

          {/* Heading */}
          <h1 className="heading-display text-white text-4xl sm:text-5xl lg:text-6xl xl:text-7xl mb-6 animate-fade-up opacity-0 text-balance">
            Professional
            <span className="block text-brand-green-light">Landscaping</span>
            Services in Herndon, VA
          </h1>

          {/* Subheadline */}
          <p className="text-white/80 text-lg sm:text-xl leading-relaxed mb-10 max-w-xl animate-fade-up opacity-0 animate-stagger-1">
            Reliable, affordable, and fast yard services for your home — from lawn maintenance and
            mulch to tree cutting and stone work. One call handles it all.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 mb-12 animate-fade-up opacity-0 animate-stagger-2">
            <a
              href={BUSINESS.phoneHref}
              className="inline-flex items-center justify-center gap-2.5 bg-brand-green-light hover:bg-green-300 text-green-950 font-bold px-8 py-4 rounded-xl text-base transition-all duration-200 hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                aria-hidden="true"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2.18h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.18 6.18l1.91-1.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              Call Now — {BUSINESS.phone}
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 border-2 border-white/50 hover:border-white text-white hover:bg-white/10 font-semibold px-8 py-4 rounded-xl text-base transition-all duration-200 backdrop-blur-sm"
            >
              Get Free Estimate
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

          {/* Trust signals */}
          <div className="flex flex-wrap gap-x-6 gap-y-3 animate-fade-up opacity-0 animate-stagger-3">
            {[
              { icon: '✓', text: 'Locally Owned & Operated' },
              { icon: '✓', text: 'Free Estimates' },
              { icon: '✓', text: 'Open Daily at 7 AM' },
              { icon: '✓', text: 'Affordable Pricing' },
            ].map((item) => (
              <div key={item.text} className="flex items-center gap-2 text-white/85 text-sm">
                <span className="text-brand-green-light font-bold">{item.icon}</span>
                <span>{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Diagonal bottom divider */}
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden leading-none">
        <svg
          viewBox="0 0 1440 80"
          preserveAspectRatio="none"
          className="w-full h-12 lg:h-20 fill-brand-bg"
          aria-hidden="true"
        >
          <path d="M0,80 L1440,0 L1440,80 Z" />
        </svg>
      </div>
    </section>
  );
}
