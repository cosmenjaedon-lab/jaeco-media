import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Hero from '@/components/Hero'
import Button from '@/components/ui/Button'
import Reviews from '@/components/Reviews'
import { interiorImages, droneImages, floorPlanImages, virtualStagingImages, reviews } from '@/lib/data'

export const metadata: Metadata = {
  title: 'Jaeco Real Estate Media — Real Estate Photography in Delaware, PA, MD & NJ',
  description:
    'Homes that sell. Photos that do it. Professional real estate photography, drone aerials, virtual staging, floor plans, and video tours serving Delaware, Pennsylvania, Maryland, and New Jersey.',
  alternates: { canonical: 'https://www.jaecomedia.com' },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Jaeco Real Estate Media',
  description: 'Premium real estate photography, drone aerials, floor plans, virtual staging, and video tours.',
  url: 'https://www.jaecomedia.com',
  telephone: '+14247680219',
  email: 'Cosmenjaedon@gmail.com',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Bear',
    addressRegion: 'DE',
    postalCode: '19701',
    addressCountry: 'US',
  },
  areaServed: ['Delaware', 'Pennsylvania', 'Maryland', 'New Jersey'],
  priceRange: '$$',
  image: 'https://www.jaecomedia.com/images/portfolio/interior/interior-01.png',
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '5',
    reviewCount: String(reviews.length),
    bestRating: '5',
    worstRating: '5',
  },
  review: reviews.map((r) => ({
    '@type': 'Review',
    author: { '@type': 'Person', name: r.name },
    reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
    reviewBody: r.body,
  })),
  sameAs: [],
}

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Hero />

      {/* Portfolio teaser — asymmetric editorial layout */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 md:px-10">

          {/* Heading row */}
          <div className="flex items-baseline justify-between mb-10 gap-6">
            <h2
              className="font-black tracking-tighter leading-[0.9] text-[#0A0A0A]"
              style={{ fontSize: 'clamp(3rem, 8vw, 7rem)' }}
            >
              See Our Portfolio
            </h2>
            <Link
              href="/portfolio"
              className="hidden md:inline-flex shrink-0 text-[11px] font-semibold tracking-[0.15em] uppercase text-[#6B6B6B] hover:text-[#0A0A0A] transition-colors"
            >
              View All →
            </Link>
          </div>

          {/* Asymmetric grid: large left + two stacked right */}
          <div className="grid grid-cols-1 md:grid-cols-[3fr_2fr] gap-2 md:gap-3">
            {/* Large feature image — Interior */}
            <Link href="/portfolio#interior" className="relative aspect-[4/3] md:aspect-auto md:row-span-2 bg-[#0A0A0A] overflow-hidden group block">
              <Image
                src={interiorImages[0].src}
                alt={interiorImages[0].alt}
                fill
                className="object-cover group-hover:scale-[1.03] transition-transform duration-700 opacity-90"
                sizes="(max-width: 768px) 100vw, 60vw"
              />
              <p className="absolute bottom-4 left-4 text-[10px] font-semibold tracking-[0.2em] uppercase text-white/70">
                Interior /
              </p>
            </Link>

            {/* Aerial */}
            <Link href="/portfolio#aerial" className="relative aspect-[4/3] bg-[#0A0A0A] overflow-hidden group block">
              <Image
                src={droneImages[0].src}
                alt={droneImages[0].alt}
                fill
                className="object-cover group-hover:scale-[1.03] transition-transform duration-700 opacity-90"
                sizes="(max-width: 768px) 100vw, 40vw"
              />
              <p className="absolute bottom-4 left-4 text-[10px] font-semibold tracking-[0.2em] uppercase text-white/70">
                Aerial /
              </p>
            </Link>

            {/* Virtual Staging */}
            <Link href="/portfolio#virtual-staging" className="relative aspect-[4/3] bg-[#0A0A0A] overflow-hidden group block">
              <Image
                src={virtualStagingImages[0].src}
                alt={virtualStagingImages[0].alt}
                fill
                className="object-cover group-hover:scale-[1.03] transition-transform duration-700 opacity-90"
                sizes="(max-width: 768px) 100vw, 40vw"
              />
              <p className="absolute bottom-4 left-4 text-[10px] font-semibold tracking-[0.2em] uppercase text-white/70">
                Virtual Staging /
              </p>
            </Link>
          </div>

          {/* Full-width floor plan strip */}
          <Link href="/portfolio#floor-plans" className="relative mt-2 md:mt-3 aspect-[21/9] bg-[#0A0A0A] overflow-hidden group block">
            <Image
              src={floorPlanImages[0].src}
              alt={floorPlanImages[0].alt}
              fill
              className="object-cover group-hover:scale-[1.02] transition-transform duration-700 opacity-90"
              sizes="100vw"
            />
            <p className="absolute bottom-4 left-4 text-[10px] font-semibold tracking-[0.2em] uppercase text-white/70">
              Floor Plans /
            </p>
          </Link>

          <div className="mt-8 md:hidden">
            <Button href="/portfolio" variant="outline-dark">View All Work →</Button>
          </div>
        </div>
      </section>

      {/* Service area — dark editorial band */}
      <section className="bg-[#0A0A0A] py-10 md:py-12">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
              {['Delaware', 'Pennsylvania', 'Maryland', 'New Jersey'].map((state, i, arr) => (
                <div key={state} className="flex items-center gap-6">
                  <span className="text-xl md:text-2xl font-black tracking-tight text-white">
                    {state}
                  </span>
                  {i < arr.length - 1 && (
                    <span className="w-px h-5 bg-white/20 shrink-0" />
                  )}
                </div>
              ))}
            </div>
            <Link
              href="/service-area"
              className="shrink-0 text-[11px] font-semibold tracking-[0.15em] uppercase text-white/50 hover:text-white transition-colors"
            >
              See All Areas →
            </Link>
          </div>
        </div>
      </section>

      {/* Pricing teaser — split layout with outlined number */}
      <section className="py-20 md:py-28 border-b border-[#E0E0E0]">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-10">
            <div className="max-w-lg">
              <h2
                className="font-black tracking-tighter leading-[0.92] text-[#0A0A0A]"
                style={{ fontSize: 'clamp(2.5rem, 6vw, 5.5rem)' }}
              >
                Simple,<br />Transparent<br />Pricing.
              </h2>
              <p className="mt-6 text-sm text-[#6B6B6B] leading-relaxed max-w-sm">
                No hidden fees. Clear deliverables. Every shoot includes professional editing and fast turnaround.
              </p>
              <div className="mt-10 hidden md:block">
                <Button href="/pricing">See Pricing →</Button>
              </div>
            </div>

            {/* Outlined price number */}
            <div className="shrink-0 select-none" aria-hidden="true">
              <p
                className="font-black tracking-tighter leading-none text-transparent"
                style={{
                  fontSize: 'clamp(6rem, 12vw, 11rem)',
                  WebkitTextStroke: '2px #E0E0E0',
                }}
              >
                $175
              </p>
              <p className="text-[10px] tracking-[0.2em] uppercase text-[#C0C0C0] mt-2 text-right">
                Starting from
              </p>
            </div>

            {/* Button below price on mobile only */}
            <div className="md:hidden">
              <Button href="/pricing">See Pricing →</Button>
            </div>
          </div>
        </div>
      </section>

      <Reviews />

      {/* CTA band */}
      <section className="bg-[#0A0A0A] py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 md:px-10 flex flex-col md:flex-row md:items-center md:justify-between gap-10">
          <h2
            className="font-black tracking-tighter text-white leading-[0.9]"
            style={{ fontSize: 'clamp(3.5rem, 8vw, 7rem)' }}
          >
            Your next listing<br />deserves better photos.
          </h2>
          <div className="shrink-0">
            <Button href="/contact" variant="light">Book a Shoot →</Button>
          </div>
        </div>
      </section>
    </>
  )
}
