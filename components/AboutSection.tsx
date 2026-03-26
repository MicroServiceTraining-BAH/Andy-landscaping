import Image from 'next/image';
import Link from 'next/link';

import { BUSINESS } from '@/lib/services';

const stats = [
  { value: '12+', label: 'Services Offered' },
  { value: '7 AM', label: 'Opens Daily' },
  { value: '100%', label: 'Free Estimates' },
  { value: 'Local', label: 'Herndon, VA' },
];

export default function AboutSection() {
  return (
    <section className="section-padding bg-white overflow-hidden" id="about" aria-label="About us">
      <div className="container-wide">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/5] max-w-sm mx-auto lg:max-w-none">
              <Image
                src="https://images.unsplash.com/photo-1592417817098-8fd3d9eb14a5?auto=format&fit=crop&w=800&q=80"
                alt="Paulino, owner of Andy Landscaping Services, LLC, working on a property in Herndon, VA"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-green-950/50 via-transparent to-transparent" />
            </div>

            {/* Floating badge */}
            <div className="absolute -bottom-5 -right-4 lg:-right-8 bg-white rounded-2xl shadow-xl p-5 flex items-center gap-3 max-w-xs border border-green-100">
              <div className="w-12 h-12 rounded-xl bg-brand-green flex items-center justify-center flex-shrink-0">
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                  <polyline points="22 4 12 14.01 9 11.01" />
                </svg>
              </div>
              <div>
                <p className="font-display font-bold text-gray-900 text-sm">Locally Owned</p>
                <p className="text-gray-500 text-xs">Herndon, VA — Serving Northern Virginia</p>
              </div>
            </div>

            {/* Green accent blob */}
            <div
              className="absolute -top-6 -left-6 w-28 h-28 rounded-full bg-brand-bg border-4 border-white z-[-1]"
              aria-hidden="true"
            />
          </div>

          {/* Content */}
          <div>
            <span className="badge bg-brand-gold/10 text-brand-gold mb-4">About Us</span>
            <h2 className="heading-display text-3xl sm:text-4xl text-gray-900 mb-6">
              Hands-On Service from a
              <span className="text-brand-green block">Local Team You Can Trust</span>
            </h2>
            <p className="text-gray-600 leading-relaxed mb-5">
              Andy Landscaping Services, LLC was built on the belief that every homeowner deserves a
              clean, well-maintained yard without the stress of chasing down a reliable crew. Led by{' '}
              <strong className="text-gray-900">{BUSINESS.contactName}</strong>, our team brings
              hands-on care and professional results to every property we touch.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8">
              We&apos;re not a national franchise — we&apos;re your neighbors. Based right here in{' '}
              <strong className="text-gray-900">Herndon, VA</strong>, we serve homeowners across
              Reston, Sterling, Ashburn, and the surrounding areas. When you call us, you get a real
              person, a fair price, and work done right.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="bg-brand-bg rounded-xl p-4 border border-green-100"
                >
                  <div className="font-display font-bold text-2xl text-brand-green">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-500">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Service areas */}
            <div className="mb-8">
              <p className="text-sm font-semibold text-gray-700 mb-3">Service Areas:</p>
              <div className="flex flex-wrap gap-2">
                {BUSINESS.serviceAreas.map((area) => (
                  <span
                    key={area}
                    className="bg-green-50 text-brand-green text-xs font-medium px-3 py-1.5 rounded-full border border-green-200"
                  >
                    {area}, VA
                  </span>
                ))}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
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
                Call Us Today
              </a>
              <Link href="/about" className="btn-outline">
                Our Story
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
