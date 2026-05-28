import type { Metadata } from 'next'
import Image from 'next/image'
import Hero from '@/components/Hero'
import SectionHeader from '@/components/ui/SectionHeader'
import Button from '@/components/ui/Button'
import Reviews from '@/components/Reviews'
import { serviceAreas, interiorImages, droneImages, floorPlanImages, virtualStagingImages } from '@/lib/data'

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
  image: 'https://www.jaecomedia.com/images/portfolio/interior/interior-06.png',
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

      {/* Portfolio teaser */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="flex items-end justify-between mb-10">
            <SectionHeader label="Portfolio" title="The Work" />
            <Button href="/portfolio" variant="outline-dark" className="hidden md:inline-flex shrink-0 ml-8">
              View All →
            </Button>
          </div>

          {/* One image from each portfolio category */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-3">
            {[
              { img: interiorImages[0],       label: 'Interior' },
              { img: droneImages[0],           label: 'Aerial' },
              { img: floorPlanImages[0],       label: 'Floor Plans' },
              { img: virtualStagingImages[0],  label: 'Virtual Staging' },
            ].map(({ img, label }) => (
              <div key={label} className="relative aspect-[4/3] bg-[#0A0A0A] overflow-hidden group">
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover group-hover:scale-[1.04] transition-transform duration-500 opacity-90"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
                <p className="absolute bottom-3 left-3 text-[9px] font-semibold tracking-[0.2em] uppercase text-white/70">
                  {label}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8 md:hidden">
            <Button href="/portfolio" variant="outline-dark">
              View All Work →
            </Button>
          </div>
        </div>
      </section>

      {/* Service area strip */}
      <section className="py-12 bg-[#F5F5F5] border-y border-[#E0E0E0]">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5">
            <p className="text-[10px] font-semibold tracking-[0.25em] uppercase text-[#6B6B6B] shrink-0">
              Serving
            </p>
            {serviceAreas.length > 0 ? (
              <p className="text-sm font-medium text-[#0A0A0A]">
                {serviceAreas.join(' · ')}
              </p>
            ) : (
              <p className="text-sm text-[#B0B0B0]">Service areas coming soon</p>
            )}
            <Button href="/service-area" variant="outline-dark" className="shrink-0">
              See All Areas →
            </Button>
          </div>
        </div>
      </section>

      {/* Pricing teaser */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="max-w-xl">
            <SectionHeader
              label="Pricing"
              title="Simple, Transparent Packages"
              subtitle="No hidden fees. Clear deliverables. Every shoot includes professional editing and fast turnaround."
            />
            <div className="mt-10">
              <Button href="/pricing">See Pricing →</Button>
            </div>
          </div>
        </div>
      </section>

      <Reviews />

      {/* CTA band */}
      <section className="bg-[#0A0A0A] py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 md:px-10 flex flex-col md:flex-row md:items-center md:justify-between gap-10">
          <div>
            <p className="text-[10px] font-semibold tracking-[0.25em] uppercase text-white/30 mb-5">
              Ready to Book
            </p>
            <h2
              className="font-black tracking-tighter text-white leading-[0.95]"
              style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)' }}
            >
              Your next listing<br />deserves better photos.
            </h2>
          </div>
          <div className="shrink-0">
            <Button href="/contact" variant="light">
              Book a Shoot →
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
