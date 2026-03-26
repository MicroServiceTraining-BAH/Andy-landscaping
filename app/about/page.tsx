import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

import ContactSection from '@/components/ContactSection';
import { BUSINESS } from '@/lib/services';

export const metadata: Metadata = {
  title: 'About Us — Locally Owned Landscaping in Herndon, VA',
  description:
    'Learn about Andy Landscaping Services, LLC — a locally owned and operated landscaping company serving Herndon, Reston, Sterling, and Northern Virginia. Led by Paulino.',
};

const values = [
  {
    icon: (
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
    title: 'Locally Rooted',
    description:
      'We live and work in this community. Herndon is our home, and we treat every yard here like our own.',
  },
  {
    icon: (
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <polyline points="9 11 12 14 22 4" />
        <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
      </svg>
    ),
    title: 'Quality First',
    description:
      "We don't rush through jobs. Every property gets the attention it deserves — clean edges, finished beds, and details that matter.",
  },
  {
    icon: (
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
    title: 'Reliable & On Time',
    description:
      'We show up when we say we will. No ghosting, no last-minute cancellations — just dependable service every time.',
  },
  {
    icon: (
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <line x1="12" y1="1" x2="12" y2="23" />
        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </svg>
    ),
    title: 'Fair Pricing',
    description:
      "Honest estimates, no hidden charges. We believe great yard work shouldn't cost a fortune.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Page Hero */}
      <section
        className="relative bg-brand-green pt-36 pb-24 overflow-hidden"
        aria-label="About page hero"
      >
        <div className="absolute inset-0 opacity-10" aria-hidden="true">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                'radial-gradient(circle at 30% 50%, #4ade80 0%, transparent 60%), radial-gradient(circle at 80% 20%, #ca8a04 0%, transparent 50%)',
            }}
          />
        </div>
        <div className="container-wide relative z-10 text-center">
          <span className="badge bg-white/20 text-white mb-4">About Us</span>
          <h1 className="heading-display text-white text-4xl sm:text-5xl lg:text-6xl mb-5 text-balance">
            A Local Team That Cares
            <span className="block text-brand-green-light">About Your Yard</span>
          </h1>
          <p className="text-green-200 text-lg max-w-2xl mx-auto leading-relaxed">
            Andy Landscaping Services, LLC is a hands-on, locally owned company serving Herndon, VA
            and surrounding communities with reliable, affordable outdoor services.
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

      {/* Story Section */}
      <section className="section-padding bg-brand-bg" aria-label="Our story">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="relative">
              <div className="rounded-3xl overflow-hidden shadow-xl aspect-[3/4] max-w-sm mx-auto lg:max-w-none">
                <Image
                  src="https://images.unsplash.com/photo-1592417817098-8fd3d9eb14a5?auto=format&fit=crop&w=800&q=80"
                  alt="Paulino, owner of Andy Landscaping Services, working on a residential yard in Herndon, VA"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 lg:-right-8 bg-brand-green rounded-2xl shadow-xl p-5 text-white max-w-[200px]">
                <p className="font-display font-bold text-2xl">12+</p>
                <p className="text-green-200 text-sm">Services for every yard need</p>
              </div>
            </div>

            <div>
              <span className="badge bg-brand-gold/10 text-brand-gold mb-4">Our Story</span>
              <h2 className="heading-display text-3xl sm:text-4xl text-gray-900 mb-6">
                Meet <span className="text-brand-green">{BUSINESS.contactName}</span> — The Man
                Behind the Mower
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Andy Landscaping Services, LLC was founded with a simple mission: give homeowners
                  in Northern Virginia access to dependable, hands-on yard care they can actually
                  trust. Led by <strong className="text-gray-900">{BUSINESS.contactName}</strong>,
                  the company was built from the ground up on hard work, honest pricing, and a
                  genuine love for the craft.
                </p>
                <p>
                  When you call Andy Landscaping, you&apos;re not dealing with a call center or a
                  faceless franchise. You get a direct line to a local team that knows your
                  neighborhood, understands the Virginia climate, and takes pride in every job they
                  finish.
                </p>
                <p>
                  From weekly lawn maintenance to one-time mulch installations, full landscaping
                  overhauls, and everything in between — our team brings the same level of
                  dedication to every property, big or small.
                </p>
              </div>
              <div className="mt-8 flex flex-col sm:flex-row gap-3">
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
                  Call {BUSINESS.phone}
                </a>
                <Link href="/services" className="btn-outline">
                  See Our Services
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-white" aria-label="Our values">
        <div className="container-wide">
          <div className="text-center mb-14">
            <span className="badge bg-brand-green/10 text-brand-green mb-3">What We Stand For</span>
            <h2 className="heading-display text-3xl sm:text-4xl text-gray-900">
              Built on Values You Can See
            </h2>
            <p className="mt-3 text-gray-500 max-w-xl mx-auto">
              Every decision we make — from how we price jobs to how we clean up after — reflects
              these core commitments.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {values.map((value) => (
              <div
                key={value.title}
                className="flex gap-5 p-7 rounded-2xl bg-brand-bg border border-green-100 hover:border-brand-green/30 hover:shadow-md transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-brand-green/10 text-brand-green flex items-center justify-center flex-shrink-0 mt-0.5">
                  {value.icon}
                </div>
                <div>
                  <h3 className="font-display font-bold text-gray-900 text-lg mb-2">
                    {value.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service areas */}
      <section className="section-padding bg-brand-bg" aria-label="Service areas">
        <div className="container-wide">
          <div className="bg-brand-green rounded-3xl p-10 lg:p-14 text-center">
            <span className="badge bg-white/20 text-white mb-4">Where We Work</span>
            <h2 className="heading-display text-white text-3xl sm:text-4xl mb-5">
              Proudly Serving Northern Virginia
            </h2>
            <p className="text-green-200 max-w-xl mx-auto mb-8 leading-relaxed">
              Based in Herndon, VA, we serve homeowners and property owners throughout the Northern
              Virginia region.
            </p>
            <div className="flex flex-wrap justify-center gap-3 mb-10">
              {BUSINESS.serviceAreas.map((area) => (
                <span
                  key={area}
                  className="bg-white/15 text-white text-sm font-semibold px-4 py-2 rounded-xl border border-white/20"
                >
                  {area}, VA
                </span>
              ))}
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={BUSINESS.phoneHref}
                className="inline-flex items-center gap-2 bg-brand-green-light hover:bg-green-300 text-green-950 font-bold px-8 py-3.5 rounded-xl transition-all hover:shadow-lg"
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
                Call Now — Free Estimate
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 border-2 border-white/50 hover:border-white text-white font-semibold px-8 py-3.5 rounded-xl transition-all hover:bg-white/10"
              >
                Send a Message
              </Link>
            </div>
          </div>
        </div>
      </section>

      <ContactSection />
    </>
  );
}
