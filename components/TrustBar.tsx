const trustItems = [
  {
    icon: (
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
    title: 'Locally Owned',
    description: 'Proudly serving Herndon and Northern Virginia since day one.',
  },
  {
    icon: (
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
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
    title: 'Fast Turnaround',
    description: 'Quick response times and efficient service you can count on.',
  },
  {
    icon: (
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
        <line x1="12" y1="1" x2="12" y2="23" />
        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </svg>
    ),
    title: 'Affordable Pricing',
    description: 'Competitive rates with no hidden fees. Great work at honest prices.',
  },
  {
    icon: (
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
        <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3H14z" />
        <path d="M7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3" />
      </svg>
    ),
    title: 'Free Estimates',
    description: 'No obligation estimates so you know the cost before we start.',
  },
];

export default function TrustBar() {
  return (
    <section className="section-padding bg-white" aria-label="Why choose us">
      <div className="container-wide">
        <div className="text-center mb-14">
          <span className="badge bg-green-100 text-brand-green mb-3">Why Andy Landscaping</span>
          <h2 className="heading-display text-3xl sm:text-4xl text-gray-900">
            Your Yard, Our Priority
          </h2>
          <p className="mt-3 text-gray-500 max-w-xl mx-auto text-base">
            We treat every property like our own — with care, precision, and the pride that comes
            from local ownership.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {trustItems.map((item) => (
            <div
              key={item.title}
              className="flex flex-col items-center text-center p-7 rounded-2xl bg-brand-bg border border-green-100 hover:border-brand-green/30 hover:shadow-md transition-all duration-300 group"
            >
              <div className="w-14 h-14 rounded-2xl bg-brand-green/10 flex items-center justify-center text-brand-green mb-5 group-hover:bg-brand-green group-hover:text-white transition-all duration-300">
                {item.icon}
              </div>
              <h3 className="font-display font-bold text-gray-900 text-lg mb-2">{item.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
