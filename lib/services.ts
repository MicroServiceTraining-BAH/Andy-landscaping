export type Service = {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  icon: string;
  benefits: string[];
};

export const services: Service[] = [
  {
    id: '1',
    slug: 'general-landscaping',
    title: 'General Landscaping',
    shortDescription:
      'Complete landscape design and maintenance to transform your outdoor space into something beautiful.',
    fullDescription:
      'From garden design to ongoing upkeep, our general landscaping services cover everything your yard needs. We assess your property, create a tailored plan, and execute it with precision — giving you curb appeal that lasts.',
    icon: 'M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z M9 22V12h6v10',
    benefits: [
      'Custom landscape plans tailored to your property',
      'Seasonal planting and bed design',
      'Ongoing maintenance packages available',
    ],
  },
  {
    id: '2',
    slug: 'lawn-maintenance',
    title: 'Lawn Maintenance',
    shortDescription:
      'Regular mowing, edging, and trimming to keep your lawn looking its best all season.',
    fullDescription:
      'A healthy, green lawn is the foundation of any great yard. Our lawn maintenance service includes mowing, edging along driveways and walkways, weed trimming, and debris blowing — leaving your lawn sharp and clean every visit.',
    icon: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9V8h2v8zm4 0h-2V8h2v8z',
    benefits: [
      'Weekly and bi-weekly scheduling available',
      'Clean edging along all borders',
      'Debris removal after every visit',
    ],
  },
  {
    id: '3',
    slug: 'gutter-cleaning',
    title: 'Gutter Cleaning',
    shortDescription:
      'Keep gutters clear of debris to protect your home from water damage and overflow.',
    fullDescription:
      'Clogged gutters can cause serious water damage to your roof, siding, and foundation. Our gutter cleaning service removes all leaves, twigs, and buildup — ensuring proper drainage and protecting your home investment.',
    icon: 'M3 17l9-14 9 14H3zM12 3v14',
    benefits: [
      'Full removal of leaves and debris',
      'Downspout flushing and inspection',
      'Prevents costly water damage',
    ],
  },
  {
    id: '4',
    slug: 'weed-control',
    title: 'Weed Control',
    shortDescription:
      'Eliminate unwanted weeds from beds, lawns, and hardscape to keep your yard clean.',
    fullDescription:
      'Weeds compete with your plants for nutrients and ruin the look of your property. We apply targeted weed control treatments and manual removal to eliminate weeds from lawn areas, garden beds, and hardscape cracks — keeping your yard pristine.',
    icon: 'M12 22V12M12 12C12 12 8 8 4 8M12 12C12 12 16 8 20 8M12 12C12 12 8 16 4 16M12 12C12 12 16 16 20 16',
    benefits: [
      'Targeted treatment for lawn and bed areas',
      'Manual removal from hardscape and borders',
      'Preventive solutions to reduce regrowth',
    ],
  },
  {
    id: '5',
    slug: 'junk-removal',
    title: 'Junk Removal',
    shortDescription:
      'Clear out yard waste, debris, and unwanted materials so your property stays clean.',
    fullDescription:
      "Whether it's old equipment, brush piles, storm debris, or leftover construction material — we haul it away quickly and responsibly. Our junk removal service leaves your yard clean and your stress level low.",
    icon: 'M3 6h18M8 6V4h8v2M19 6l-1 14H6L5 6',
    benefits: [
      'Same-week service available',
      'Responsible disposal and recycling',
      'No job too big or too small',
    ],
  },
  {
    id: '6',
    slug: 'leaf-removal',
    title: 'Leaf Removal',
    shortDescription:
      'Complete leaf cleanup in fall and year-round to keep your lawn healthy and clear.',
    fullDescription:
      'Leaves left on your lawn block sunlight and trap moisture — damaging the grass beneath. Our leaf removal team clears every corner of your property efficiently, leaving your yard clean and ready for the next season.',
    icon: 'M17 8C8 10 5.9 16.17 3.82 22 7.83 20 13 17 17 8zM12 12C12 12 9 15 6 21',
    benefits: [
      'Full-yard clearing and hauling',
      'Spring and fall scheduling',
      'Protects lawn health through seasons',
    ],
  },
  {
    id: '7',
    slug: 'tree-cutting',
    title: 'Tree Cutting',
    shortDescription:
      'Safe removal and trimming of trees and large branches for a cleaner, safer yard.',
    fullDescription:
      'Overgrown or damaged trees can be a hazard to your home and family. We safely cut, trim, and remove trees and large branches — cleaning up all debris so your yard is left looking open and polished.',
    icon: 'M12 2v20M4 8l8-6 8 6M5 22h14',
    benefits: [
      'Safe removal of hazardous branches',
      'Full stump and debris cleanup',
      'Improves yard light and aesthetics',
    ],
  },
  {
    id: '8',
    slug: 'fertilizing',
    title: 'Fertilizing',
    shortDescription:
      'Feed your lawn and garden with the right nutrients for lush, vibrant growth.',
    fullDescription:
      'A fed lawn is a healthy lawn. We apply seasonal fertilizers and soil treatments calibrated for the Virginia climate — promoting deep root growth, dense grass coverage, and vivid plant color throughout the season.',
    icon: 'M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-14v4m0 4h.01',
    benefits: [
      'Seasonal treatment schedules',
      'Safe for families and pets',
      'Promotes deep root health',
    ],
  },
  {
    id: '9',
    slug: 'planting',
    title: 'Planting',
    shortDescription:
      'Expert planting of trees, shrubs, flowers, and ground cover to beautify your yard.',
    fullDescription:
      'We help you choose and install the right plants for your soil, climate, and vision. From seasonal flowers to native shrubs and ornamental trees — our planting service brings life and color to any outdoor space.',
    icon: 'M12 22V12M5 12a7 7 0 0 1 14 0M5 12H3m2 0h14m0 0h2',
    benefits: [
      'Plant selection guidance for Virginia climate',
      'Professional installation with proper spacing',
      'Native and low-maintenance options available',
    ],
  },
  {
    id: '10',
    slug: 'mulch-installation',
    title: 'Mulch Installation',
    shortDescription:
      'Fresh mulch applied to beds to retain moisture, suppress weeds, and improve appearance.',
    fullDescription:
      'Mulch is one of the most impactful and affordable improvements for your landscaping. We install fresh mulch in all garden beds — protecting plant roots, locking in moisture, blocking weeds, and giving your yard a clean, finished look.',
    icon: 'M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1zM4 22v-7',
    benefits: [
      'Multiple mulch varieties available',
      'Keeps beds weed-free longer',
      'Dramatically improves curb appeal',
    ],
  },
  {
    id: '11',
    slug: 'stone-work',
    title: 'Stone Work',
    shortDescription:
      'Decorative stone borders, pathways, and edging for a polished, durable yard design.',
    fullDescription:
      'Stone adds structure and beauty to any landscape. We design and install stone borders, garden edging, decorative rock beds, and walkways — creating clean, defined lines that last for years with minimal upkeep.',
    icon: 'M2 20h20M4 20V10l8-8 8 8v10M10 20v-6h4v6',
    benefits: [
      'Custom border and pathway design',
      'Durable materials that weather beautifully',
      'Low-maintenance alternative to mulch beds',
    ],
  },
  {
    id: '12',
    slug: 'foundation-repair',
    title: 'Foundation Repair',
    shortDescription:
      "Address grading and drainage issues around your home's foundation to prevent water damage.",
    fullDescription:
      'Poor drainage near your foundation can lead to serious structural damage over time. We assess grading, reposition soil, and install drainage solutions to direct water away from your home — protecting your most valuable asset.',
    icon: 'M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2zM9 22V12h6v10',
    benefits: [
      'Grading and resloping assessment',
      'French drain and runoff solutions',
      'Prevents basement moisture and erosion',
    ],
  },
];

export const BUSINESS = {
  name: 'Andy Landscaping Services, LLC',
  contactName: 'Paulino',
  phone: '(703) 609-4875',
  phoneHref: 'tel:+17036094875',
  address: '657 Pemberton Ct, Herndon, VA 20170',
  city: 'Herndon, VA',
  hours: 'Open daily at 7 AM',
  email: 'info@andylandscaping.com',
  serviceAreas: ['Herndon', 'Reston', 'Sterling', 'Ashburn', 'Chantilly', 'Fairfax'],
} as const;
