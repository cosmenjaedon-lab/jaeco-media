export const siteConfig = {
  name: 'Jaeco Real Estate Media',
  tagline: 'Every listing. Perfectly framed.',
  email: 'Cosmenjaedon@gmail.com',
  phone: '(424) 768-0219',
  instagram: '',
  facebook: '',
}

// ⏸ Add the cities and regions you serve here
// Example: 'Nashville, TN'
export const serviceAreas: string[] = [
  'Wilmington, DE',
  'Newark, DE',
  'Dover, DE',
  'Middletown, DE',
  'Philadelphia, PA',
  'West Chester, PA',
  'Lancaster, PA',
  'Baltimore, MD',
  'Annapolis, MD',
  'Bel Air, MD',
  'Camden, NJ',
  'Cherry Hill, NJ',
  'Atlantic City, NJ',
]

// ─── Pricing ────────────────────────────────────────────────────────────────

export const includedFeatures = [
  'Professional HDR editing',
  'MLS-ready files',
  'Online delivery gallery',
  'Free basic floor plan',
  '24–48 hour turnaround',
]

export interface PricingTier {
  name: string
  sqft: string
  photos: string
  price: string
  highlight?: boolean
  custom?: boolean
}

export const pricingTiers: PricingTier[] = [
  { name: 'Essentials', sqft: 'Up to 1,500 sq ft',  photos: '~25 HDR photos',  price: '$175' },
  { name: 'Standard',   sqft: '1,500–2,500 sq ft',   photos: '~35 HDR photos',  price: '$225' },
  { name: 'Premium',    sqft: '2,500–3,500 sq ft',   photos: '~45 HDR photos',  price: '$300', highlight: true },
  { name: 'Estate',     sqft: '3,500–5,000 sq ft',   photos: '55+ HDR photos',  price: '$399' },
  { name: 'Luxury',     sqft: '5,000+ sq ft',         photos: 'Custom',          price: 'Custom quote', custom: true },
]

export interface PricingAddOn {
  name: string
  note?: string
  bundled: string
  standalone?: string
}

export const pricingAddOns: PricingAddOn[] = [
  { name: 'Drone Aerial Photos',        note: 'FAA Part 107 certified',  bundled: '+$100',          standalone: '$150'  },
  { name: 'Twilight Photos (real)',                                        bundled: '+$125',          standalone: '$175'  },
  { name: 'Virtual / AI Twilight',                                         bundled: '+$15–25 / photo'                     },
  { name: 'Video Walkthrough',          note: 'social reel',              bundled: '+$250',          standalone: '$300'  },
  { name: 'Cinematic Video Tour',                                          bundled: '+$400',          standalone: '$500'  },
  { name: '3D Matterport Tour',                                            bundled: '+$200–350'                           },
  { name: 'Virtual Staging',                                               bundled: '$45 / photo'                         },
  { name: 'Rush / Same-Day Delivery',                                      bundled: '+$75'                                },
]

// Legacy — kept so existing imports don't break
export interface PricingPackage {
  name: string
  price: string
  description: string
  features: string[]
  highlight?: boolean
}
export const pricingPackages: PricingPackage[] = []

export interface PortfolioImage {
  src: string
  alt: string
}

// Portfolio — Interior & Exterior Photography
export const interiorImages: PortfolioImage[] = [
  { src: '/images/portfolio/interior/interior-01.png', alt: 'Interior real estate photo 1' },
  { src: '/images/portfolio/interior/interior-03.png', alt: 'Interior real estate photo 3' },
  { src: '/images/portfolio/interior/interior-04.png', alt: 'Interior real estate photo 4' },
  { src: '/images/portfolio/interior/interior-05.png', alt: 'Interior real estate photo 5' },
  { src: '/images/portfolio/interior/interior-06.png', alt: 'Interior real estate photo 6' },
  { src: '/images/portfolio/interior/interior-07.webp', alt: 'Interior real estate photo 7' },
  { src: '/images/portfolio/interior/interior-08.webp', alt: 'Interior real estate photo 8' },
  { src: '/images/portfolio/interior/interior-09.webp', alt: 'Interior real estate photo 9' },
  { src: '/images/portfolio/interior/interior-10.webp', alt: 'Interior real estate photo 10' },
  { src: '/images/portfolio/interior/interior-11.webp', alt: 'Interior real estate photo 11' },
  { src: '/images/portfolio/interior/interior-12.webp', alt: 'Interior real estate photo 12' },
  { src: '/images/portfolio/interior/interior-13.webp', alt: 'Interior real estate photo 13' },
  { src: '/images/portfolio/interior/interior-14.webp', alt: 'Interior real estate photo 14' },
  { src: '/images/portfolio/interior/interior-15.webp', alt: 'Interior real estate photo 15' },
  { src: '/images/portfolio/interior/interior-16.webp', alt: 'Interior real estate photo 16' },
]

// Portfolio — Drone / Aerial Photography
export const droneImages: PortfolioImage[] = [
  { src: '/images/portfolio/drone/drone-02.png', alt: 'Aerial drone photo 2' },
  { src: '/images/portfolio/drone/drone-03.png', alt: 'Aerial drone photo 3' },
  { src: '/images/portfolio/drone/drone-04.png', alt: 'Aerial drone photo 4' },
  { src: '/images/portfolio/drone/drone-05.png', alt: 'Aerial drone photo 5' },
]

// Portfolio — Floor Plans
export const floorPlanImages: PortfolioImage[] = [
  { src: '/images/portfolio/floor-plans/floor-plan-01.webp', alt: 'Floor plan 1' },
  { src: '/images/portfolio/floor-plans/floor-plan-02.webp', alt: 'Floor plan 2' },
  { src: '/images/portfolio/floor-plans/floor-plan-03.webp', alt: 'Floor plan 3' },
  { src: '/images/portfolio/floor-plans/floor-plan-04.webp', alt: 'Floor plan 4' },
  { src: '/images/portfolio/floor-plans/floor-plan-05.webp', alt: 'Floor plan 5' },
  { src: '/images/portfolio/floor-plans/floor-plan-06.webp', alt: 'Floor plan 6' },
  { src: '/images/portfolio/floor-plans/floor-plan-07.webp', alt: 'Floor plan 7' },
  { src: '/images/portfolio/floor-plans/floor-plan-08.webp', alt: 'Floor plan 8' },
  { src: '/images/portfolio/floor-plans/floor-plan-09.png', alt: 'Floor plan 9' },
]

// Portfolio — Virtual Staging
export const virtualStagingImages: PortfolioImage[] = [
  { src: '/images/portfolio/virtual-staging/staging-01.png', alt: 'Virtual staging 1' },
  { src: '/images/portfolio/virtual-staging/staging-02.png', alt: 'Virtual staging 2' },
  { src: '/images/portfolio/virtual-staging/staging-03.png', alt: 'Virtual staging 3' },
  { src: '/images/portfolio/virtual-staging/staging-04.png', alt: 'Virtual staging 4' },
  { src: '/images/portfolio/virtual-staging/staging-06.png', alt: 'Virtual staging 6' },
  { src: '/images/portfolio/virtual-staging/staging-07.png', alt: 'Virtual staging 7' },
  { src: '/images/portfolio/virtual-staging/staging-08.webp', alt: 'Virtual staging 8' },
  { src: '/images/portfolio/virtual-staging/staging-09.webp', alt: 'Virtual staging 9' },
  { src: '/images/portfolio/virtual-staging/staging-10.webp', alt: 'Virtual staging 10' },
  { src: '/images/portfolio/virtual-staging/staging-11.webp', alt: 'Virtual staging 11' },
  { src: '/images/portfolio/virtual-staging/staging-12.webp', alt: 'Virtual staging 12' },
]

// Legacy combined array — kept for any references
export const portfolioImages: PortfolioImage[] = [
  ...interiorImages,
  ...droneImages,
  ...floorPlanImages,
  ...virtualStagingImages,
]

export const navLinks = [
  { label: 'Portfolio', href: '/portfolio' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'Service Area', href: '/service-area' },
] as const

// ─── Reviews ─────────────────────────────────────────────────────────────────

export interface Review {
  name: string
  time: string
  body: string
}

export const reviews: Review[] = [
  {
    name: 'Dennis Dickinson',
    time: '3 weeks ago',
    body: 'We had a very quick turnaround time needed to list our house for sale. Out of several real estate photographers that we reached out to, Jaedon was by far the most responsive and accommodating…',
  },
  {
    name: 'Tyler Andrews',
    time: '10 weeks ago',
    body: "I have been working with Jaedon on a couple projects now, and he has blown me away with his professionalism! Not only is the quality of his work exceptional, but his communication and turnaround time are second to none…",
  },
  {
    name: 'Kurt Esser',
    time: '12 weeks ago',
    body: 'Highly recommend Jaeco for all your Professional Real Estate Photography needs. Communication was On-Point. Flexible scheduling and the photos came out beautifully…',
  },
  {
    name: 'Veta McCarther',
    time: '12 weeks ago',
    body: 'Excellent photographer! Very professional, responsible, and right on time. The photos turned out amazing — clear, high quality, and really showcased the property at its best…',
  },
  {
    name: 'Marie Reich',
    time: '13 weeks ago',
    body: "We've had the pleasure of working with Jaedon Cosmen Photography for our real estate brokerage, and we couldn't be happier. His attention to detail and ability to capture each property's unique character is outstanding…",
  },
  {
    name: 'Kamahni Stuart',
    time: '41 weeks ago',
    body: "Absolutely amazing work! Every shot was crisp, bright, and perfectly captured the home's best features. Super professional, quick turnaround, and such a pleasure to work with. Highly recommend!",
  },
]
