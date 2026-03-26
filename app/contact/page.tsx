import type { Metadata } from 'next';

import ContactSection from '@/components/ContactSection';
import { BUSINESS } from '@/lib/services';

export const metadata: Metadata = {
  title: 'Contact Us — Free Landscaping Estimate in Herndon, VA',
  description:
    'Contact Andy Landscaping Services, LLC for a free estimate. Serving Herndon, Reston, Sterling, and Northern Virginia. Call (703) 609-4875 or fill out our form.',
};

export default function ContactPage() {
  return (
    <>
      {/* Page Hero */}
      <section
        className="relative bg-brand-green pt-36 pb-24 overflow-hidden"
        aria-label="Contact page hero"
      >
        <div className="absolute inset-0 opacity-10" aria-hidden="true">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                'radial-gradient(circle at 40% 50%, #4ade80 0%, transparent 55%), radial-gradient(circle at 85% 30%, #ca8a04 0%, transparent 40%)',
            }}
          />
        </div>
        <div className="container-wide relative z-10 text-center">
          <span className="badge bg-white/20 text-white mb-4">Get In Touch</span>
          <h1 className="heading-display text-white text-4xl sm:text-5xl lg:text-6xl mb-5 text-balance">
            Let&apos;s Get Your Yard
            <span className="block text-brand-green-light">Looking Its Best</span>
          </h1>
          <p className="text-green-200 text-lg max-w-xl mx-auto leading-relaxed mb-8">
            Free estimates, no obligation. We&apos;ll get back to you quickly — or give us a call
            right now.
          </p>
          <a
            href={BUSINESS.phoneHref}
            className="inline-flex items-center gap-2.5 bg-brand-green-light hover:bg-green-300 text-green-950 font-bold px-8 py-4 rounded-xl text-base transition-all hover:shadow-xl"
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
        </div>
        <div className="absolute bottom-0 left-0 right-0 overflow-hidden leading-none">
          <svg
            viewBox="0 0 1440 60"
            preserveAspectRatio="none"
            className="w-full h-10 lg:h-16 fill-white"
            aria-hidden="true"
          >
            <path d="M0,60 L1440,0 L1440,60 Z" />
          </svg>
        </div>
      </section>

      {/* Map Section */}
      <section className="bg-white pt-12 pb-0" aria-label="Location map">
        <div className="container-wide">
          <div className="rounded-2xl overflow-hidden shadow-lg border border-green-100 h-64 lg:h-80">
            <iframe
              title="Andy Landscaping Services — 657 Pemberton Ct, Herndon, VA 20170"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3107.5!2d-77.3865!3d38.9697!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b64b5a0a5a5a5a%3A0x5a5a5a5a5a5a5a5a!2s657+Pemberton+Ct%2C+Herndon%2C+VA+20170!5e0!3m2!1sen!2sus!4v1"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      <ContactSection />
    </>
  );
}
