import Link from 'next/link';

import { BUSINESS, services } from '@/lib/services';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/contact', label: 'Contact' },
];

export default function Footer() {
  return (
    <footer className="bg-green-950 text-white" aria-label="Site footer">
      {/* CTA Banner */}
      <div className="bg-brand-green">
        <div className="container-wide py-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="font-display font-bold text-white text-2xl lg:text-3xl mb-1">
              Ready for a cleaner yard?
            </h2>
            <p className="text-green-200 text-sm">
              Free estimates available. Serving Herndon, Reston, Sterling, and more.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
            <a
              href={BUSINESS.phoneHref}
              className="inline-flex items-center justify-center gap-2 bg-white text-brand-green font-bold px-6 py-3 rounded-xl text-sm hover:bg-green-50 transition-colors"
            >
              <svg
                width="15"
                height="15"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                aria-hidden="true"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2.18h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.18 6.18l1.91-1.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              {BUSINESS.phone}
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center border-2 border-white/50 hover:border-white text-white font-semibold px-6 py-3 rounded-xl text-sm transition-all hover:bg-white/10"
            >
              Get Free Estimate
            </Link>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="container-wide py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-xl bg-brand-green flex items-center justify-center">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M12 22V12" />
                  <path d="M12 12C10 8 6 7 3 9c3 1 7 2 9 3z" />
                  <path d="M12 12C14 8 18 7 21 9c-3 1-7 2-9 3z" />
                </svg>
              </div>
              <div>
                <p className="font-display font-bold text-white text-base">Andy Landscaping</p>
                <p className="text-green-400 text-xs">Services, LLC</p>
              </div>
            </div>
            <p className="text-green-300 text-sm leading-relaxed mb-5">
              Locally owned and operated landscaping company serving Herndon, VA and surrounding
              Northern Virginia communities.
            </p>
            <div className="space-y-2 text-sm text-green-400">
              <div className="flex items-center gap-2">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  aria-hidden="true"
                >
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <span>{BUSINESS.address}</span>
              </div>
              <div className="flex items-center gap-2">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  aria-hidden="true"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2.18h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.18 6.18l1.91-1.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                <a href={BUSINESS.phoneHref} className="hover:text-white transition-colors">
                  {BUSINESS.phone}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  aria-hidden="true"
                >
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
                <span>{BUSINESS.hours}</span>
              </div>
            </div>
          </div>

          {/* Pages */}
          <div>
            <h3 className="font-semibold text-white text-sm uppercase tracking-wider mb-4">
              Pages
            </h3>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-green-300 hover:text-white text-sm transition-colors hover:translate-x-0.5 inline-flex items-center gap-1.5 group"
                  >
                    <span className="w-0 group-hover:w-3 overflow-hidden transition-all duration-200">
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        aria-hidden="true"
                      >
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    </span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-white text-sm uppercase tracking-wider mb-4">
              Services
            </h3>
            <ul className="space-y-2.5">
              {services.slice(0, 8).map((service) => (
                <li key={service.id}>
                  <Link
                    href={`/services#${service.slug}`}
                    className="text-green-300 hover:text-white text-sm transition-colors"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Areas + Map */}
          <div>
            <h3 className="font-semibold text-white text-sm uppercase tracking-wider mb-4">
              Service Areas
            </h3>
            <ul className="space-y-2.5 mb-6">
              {BUSINESS.serviceAreas.map((area) => (
                <li key={area} className="flex items-center gap-2 text-green-300 text-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-green-light flex-shrink-0" />
                  {area}, VA
                </li>
              ))}
            </ul>

            {/* Embedded Map */}
            <div className="rounded-xl overflow-hidden border border-green-800 h-32">
              <iframe
                title="Andy Landscaping Services location — 657 Pemberton Ct, Herndon, VA 20170"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3107.5!2d-77.3865!3d38.9697!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b64b5a0a5a5a5a%3A0x5a5a5a5a5a5a5a5a!2s657+Pemberton+Ct%2C+Herndon%2C+VA+20170!5e0!3m2!1sen!2sus!4v1"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-green-900">
        <div className="container-wide py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-green-500">
          <p>
            &copy; {new Date().getFullYear()} Andy Landscaping Services, LLC. All rights reserved.
            Herndon, VA.
          </p>
          <p>
            Made by{' '}
            <a
              href="https://lvluplocal.co"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-green-light hover:text-white transition-colors font-semibold"
            >
              Level Up Local
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
