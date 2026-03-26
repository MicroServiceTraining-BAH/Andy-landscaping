'use client';

import { useState } from 'react';

import { BUSINESS } from '@/lib/services';

type FormData = {
  name: string;
  phone: string;
  email: string;
  service: string;
  message: string;
};

type FormState = 'idle' | 'loading' | 'success' | 'error';

const serviceOptions = [
  'General Landscaping',
  'Lawn Maintenance',
  'Gutter Cleaning',
  'Weed Control',
  'Junk Removal',
  'Leaf Removal',
  'Tree Cutting',
  'Fertilizing',
  'Planting',
  'Mulch Installation',
  'Stone Work',
  'Foundation Repair',
  'Other / Not Sure',
];

const INITIAL_FORM: FormData = {
  name: '',
  phone: '',
  email: '',
  service: '',
  message: '',
};

export default function ContactSection() {
  const [form, setForm] = useState<FormData>(INITIAL_FORM);
  const [state, setState] = useState<FormState>('idle');
  const [errors, setErrors] = useState<Partial<FormData>>({});

  const validate = (): boolean => {
    const newErrors: Partial<FormData> = {};
    if (!form.name.trim()) newErrors.name = 'Your name is required.';
    if (!form.phone.trim()) newErrors.phone = 'A phone number is required.';
    if (form.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = 'Enter a valid email address.';
    }
    if (!form.message.trim()) newErrors.message = 'Please describe what you need.';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setState('loading');
    // Simulated submission — replace with real API endpoint
    await new Promise((resolve) => setTimeout(resolve, 1200));
    setState('success');
  };

  const handleReset = () => {
    setForm(INITIAL_FORM);
    setErrors({});
    setState('idle');
  };

  return (
    <section className="section-padding bg-white" id="contact" aria-label="Contact us">
      <div className="container-wide">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
          {/* Left — contact info */}
          <div className="lg:col-span-2">
            <span className="badge bg-brand-green/10 text-brand-green mb-4">Contact Us</span>
            <h2 className="heading-display text-3xl sm:text-4xl text-gray-900 mb-5">
              Let&apos;s Get Your
              <span className="text-brand-green block">Yard Looking Great</span>
            </h2>
            <p className="text-gray-500 leading-relaxed mb-8">
              Fill out the form for a free estimate, or give us a call directly. We&apos;re open
              daily starting at 7 AM and respond quickly.
            </p>

            <div className="space-y-5">
              <a
                href={BUSINESS.phoneHref}
                className="flex items-start gap-4 p-4 rounded-2xl bg-brand-bg border border-green-100 hover:border-brand-green/40 hover:shadow-sm transition-all group"
              >
                <div className="w-11 h-11 rounded-xl bg-brand-green flex items-center justify-center flex-shrink-0">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="white"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    aria-hidden="true"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2.18h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.18 6.18l1.91-1.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-0.5">
                    Phone
                  </p>
                  <p className="font-semibold text-gray-900 group-hover:text-brand-green transition-colors">
                    {BUSINESS.phone}
                  </p>
                  <p className="text-xs text-gray-400">{BUSINESS.hours}</p>
                </div>
              </a>

              <div className="flex items-start gap-4 p-4 rounded-2xl bg-brand-bg border border-green-100">
                <div className="w-11 h-11 rounded-xl bg-brand-gold flex items-center justify-center flex-shrink-0">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="white"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    aria-hidden="true"
                  >
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-0.5">
                    Address
                  </p>
                  <p className="font-semibold text-gray-900 text-sm">{BUSINESS.address}</p>
                  <p className="text-xs text-gray-400 mt-0.5">
                    Serving Herndon, Reston, Sterling & more
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-2xl bg-brand-bg border border-green-100">
                <div className="w-11 h-11 rounded-xl bg-green-200 flex items-center justify-center flex-shrink-0">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#166534"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    aria-hidden="true"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-0.5">
                    Hours
                  </p>
                  <p className="font-semibold text-gray-900 text-sm">Open Daily at 7 AM</p>
                  <p className="text-xs text-gray-400 mt-0.5">Available 7 days a week</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right — form */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-3xl border border-green-100 shadow-xl p-7 lg:p-10">
              {state === 'success' ? (
                <div className="text-center py-10">
                  <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-5">
                    <svg
                      width="30"
                      height="30"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#166534"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      aria-hidden="true"
                    >
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                      <polyline points="22 4 12 14.01 9 11.01" />
                    </svg>
                  </div>
                  <h3 className="font-display font-bold text-gray-900 text-2xl mb-2">
                    Message Sent!
                  </h3>
                  <p className="text-gray-500 mb-6">
                    Thanks for reaching out. We&apos;ll get back to you with your free estimate
                    shortly.
                  </p>
                  <p className="text-sm text-gray-400 mb-6">
                    Need a faster response? Call us at{' '}
                    <a
                      href={BUSINESS.phoneHref}
                      className="text-brand-green font-semibold hover:underline"
                    >
                      {BUSINESS.phone}
                    </a>
                  </p>
                  <button onClick={handleReset} className="btn-outline text-sm" type="button">
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate>
                  <h3 className="font-display font-bold text-gray-900 text-xl mb-1">
                    Request a Free Estimate
                  </h3>
                  <p className="text-gray-400 text-sm mb-7">
                    No obligation. We&apos;ll contact you within 24 hours.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
                    {/* Name */}
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-gray-700 mb-1.5"
                      >
                        Full Name{' '}
                        <span className="text-red-500" aria-hidden="true">
                          *
                        </span>
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        autoComplete="name"
                        value={form.name}
                        onChange={handleChange}
                        onBlur={() => {
                          if (!form.name.trim())
                            setErrors((p) => ({ ...p, name: 'Your name is required.' }));
                        }}
                        placeholder="John Smith"
                        className={`w-full px-4 py-3 rounded-xl border text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-brand-green/30 ${
                          errors.name
                            ? 'border-red-400 bg-red-50 focus:border-red-400'
                            : 'border-gray-200 bg-gray-50 focus:border-brand-green focus:bg-white'
                        }`}
                        aria-describedby={errors.name ? 'name-error' : undefined}
                        aria-required="true"
                        aria-invalid={!!errors.name}
                      />
                      {errors.name && (
                        <p id="name-error" className="mt-1.5 text-xs text-red-500" role="alert">
                          {errors.name}
                        </p>
                      )}
                    </div>

                    {/* Phone */}
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-medium text-gray-700 mb-1.5"
                      >
                        Phone Number{' '}
                        <span className="text-red-500" aria-hidden="true">
                          *
                        </span>
                      </label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        autoComplete="tel"
                        value={form.phone}
                        onChange={handleChange}
                        onBlur={() => {
                          if (!form.phone.trim())
                            setErrors((p) => ({ ...p, phone: 'A phone number is required.' }));
                        }}
                        placeholder="(703) 555-0100"
                        className={`w-full px-4 py-3 rounded-xl border text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-brand-green/30 ${
                          errors.phone
                            ? 'border-red-400 bg-red-50 focus:border-red-400'
                            : 'border-gray-200 bg-gray-50 focus:border-brand-green focus:bg-white'
                        }`}
                        aria-describedby={errors.phone ? 'phone-error' : undefined}
                        aria-required="true"
                        aria-invalid={!!errors.phone}
                      />
                      {errors.phone && (
                        <p id="phone-error" className="mt-1.5 text-xs text-red-500" role="alert">
                          {errors.phone}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Email */}
                  <div className="mb-5">
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 mb-1.5"
                    >
                      Email Address <span className="text-gray-400 font-normal">(optional)</span>
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      className={`w-full px-4 py-3 rounded-xl border text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-brand-green/30 ${
                        errors.email
                          ? 'border-red-400 bg-red-50 focus:border-red-400'
                          : 'border-gray-200 bg-gray-50 focus:border-brand-green focus:bg-white'
                      }`}
                      aria-describedby={errors.email ? 'email-error' : undefined}
                      aria-invalid={!!errors.email}
                    />
                    {errors.email && (
                      <p id="email-error" className="mt-1.5 text-xs text-red-500" role="alert">
                        {errors.email}
                      </p>
                    )}
                  </div>

                  {/* Service */}
                  <div className="mb-5">
                    <label
                      htmlFor="service"
                      className="block text-sm font-medium text-gray-700 mb-1.5"
                    >
                      Service Needed
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={form.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-brand-green/30 focus:border-brand-green focus:bg-white transition-colors"
                    >
                      <option value="">Select a service...</option>
                      {serviceOptions.map((s) => (
                        <option key={s} value={s}>
                          {s}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Message */}
                  <div className="mb-7">
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-700 mb-1.5"
                    >
                      Tell Us About Your Yard{' '}
                      <span className="text-red-500" aria-hidden="true">
                        *
                      </span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={form.message}
                      onChange={handleChange}
                      onBlur={() => {
                        if (!form.message.trim())
                          setErrors((p) => ({ ...p, message: 'Please describe what you need.' }));
                      }}
                      placeholder="Describe what needs to be done — size of yard, any specific issues, timing, etc."
                      className={`w-full px-4 py-3 rounded-xl border text-sm resize-none transition-colors focus:outline-none focus:ring-2 focus:ring-brand-green/30 ${
                        errors.message
                          ? 'border-red-400 bg-red-50 focus:border-red-400'
                          : 'border-gray-200 bg-gray-50 focus:border-brand-green focus:bg-white'
                      }`}
                      aria-describedby={errors.message ? 'message-error' : undefined}
                      aria-required="true"
                      aria-invalid={!!errors.message}
                    />
                    {errors.message && (
                      <p id="message-error" className="mt-1.5 text-xs text-red-500" role="alert">
                        {errors.message}
                      </p>
                    )}
                  </div>

                  <button
                    type="submit"
                    disabled={state === 'loading'}
                    className="w-full flex items-center justify-center gap-2.5 bg-brand-green hover:bg-brand-green-dark disabled:opacity-60 disabled:cursor-not-allowed text-white font-bold py-4 rounded-xl text-base transition-all duration-200 hover:shadow-lg"
                    aria-live="polite"
                  >
                    {state === 'loading' ? (
                      <>
                        <svg
                          className="animate-spin"
                          width="18"
                          height="18"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.5"
                          aria-hidden="true"
                        >
                          <path d="M21 12a9 9 0 1 1-6.219-8.56" />
                        </svg>
                        Sending your request...
                      </>
                    ) : (
                      <>
                        Send My Free Estimate Request
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
                          <line x1="22" y1="2" x2="11" y2="13" />
                          <polygon points="22 2 15 22 11 13 2 9 22 2" />
                        </svg>
                      </>
                    )}
                  </button>

                  <p className="text-center text-xs text-gray-400 mt-4">
                    Or call us directly at{' '}
                    <a
                      href={BUSINESS.phoneHref}
                      className="text-brand-green font-semibold hover:underline"
                    >
                      {BUSINESS.phone}
                    </a>{' '}
                    for a faster response.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
