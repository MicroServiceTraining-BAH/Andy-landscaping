import Image from 'next/image';
import Link from 'next/link';

const galleryImages = [
  {
    src: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800&q=80',
    alt: 'Well-maintained green lawn after professional lawn mowing service in Herndon, VA',
    label: 'Lawn Maintenance',
    span: 'lg:col-span-2 lg:row-span-2',
  },
  {
    src: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=600&q=80',
    alt: 'Beautiful flower garden bed with mulch installation',
    label: 'Mulch & Planting',
    span: '',
  },
  {
    src: 'https://images.unsplash.com/photo-1585320806297-9794b3e4aaae?auto=format&fit=crop&w=600&q=80',
    alt: 'Freshly mowed and edged lawn with clean borders',
    label: 'Lawn Care',
    span: '',
  },
  {
    src: 'https://images.unsplash.com/photo-1599685315640-4a9a5f2d3738?auto=format&fit=crop&w=600&q=80',
    alt: 'Stone pathway and garden border installation',
    label: 'Stone Work',
    span: '',
  },
  {
    src: 'https://images.unsplash.com/photo-1591857177580-dc82b9ac4e1e?auto=format&fit=crop&w=600&q=80',
    alt: 'Tree trimming and cutting service for a residential property',
    label: 'Tree Cutting',
    span: '',
  },
  {
    src: 'https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&w=600&q=80',
    alt: 'Backyard landscaping transformation with clean garden beds',
    label: 'General Landscaping',
    span: '',
  },
];

export default function GallerySection() {
  return (
    <section className="section-padding bg-brand-bg" id="gallery" aria-label="Project gallery">
      <div className="container-wide">
        <div className="text-center mb-14">
          <span className="badge bg-brand-green/10 text-brand-green mb-3">Our Work</span>
          <h2 className="heading-display text-3xl sm:text-4xl text-gray-900">
            Clean Results. Every Time.
          </h2>
          <p className="mt-4 text-gray-500 max-w-xl mx-auto text-base">
            We take pride in every property we service — leaving yards cleaner, greener, and more
            beautiful than we found them.
          </p>
        </div>

        {/* Gallery grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-[240px]">
          {galleryImages.map((img) => (
            <div
              key={img.alt}
              className={`relative rounded-2xl overflow-hidden group cursor-pointer ${img.span}`}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-green-950/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                <span className="inline-flex items-center gap-1.5 bg-white/95 text-brand-green text-xs font-bold px-3 py-1.5 rounded-full">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-green-light" />
                  {img.label}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/gallery" className="btn-primary">
            View Full Gallery
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
          <Link href="/contact" className="btn-outline">
            Get a Free Estimate
          </Link>
        </div>
      </div>
    </section>
  );
}
