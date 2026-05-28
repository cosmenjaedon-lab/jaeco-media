import type { Metadata } from 'next'
import PortfolioSlideshow from '@/components/PortfolioSlideshow'
import Button from '@/components/ui/Button'
import {
  interiorImages,
  droneImages,
  floorPlanImages,
  virtualStagingImages,
} from '@/lib/data'

export const metadata: Metadata = {
  title: 'Portfolio — Jaeco Real Estate Media',
  description: 'Real estate photography portfolio — interior, aerial, floor plans, and virtual staging.',
}

const sections = [
  {
    label: 'Photography',
    title: 'Interior & Exterior',
    subtitle:
      'Professional listing photos that capture every angle and showcase each property at its absolute best.',
    images: interiorImages,
    objectFit: 'cover' as const,
    bg: 'white',
    slidesBg: '#0A0A0A',
    light: false,
  },
  {
    label: 'Aerial',
    title: 'Drone Photography',
    subtitle:
      "Bird’s-eye perspectives that reveal the full scope of a property — land, location, and surroundings.",
    images: droneImages,
    objectFit: 'cover' as const,
    bg: 'dark',
    slidesBg: '#0A0A0A',
    light: true,
  },
  {
    label: 'Floor Plans',
    title: 'Measured Plans',
    subtitle:
      'Clean, accurate floor plans that help buyers understand the layout and flow before stepping foot inside.',
    images: floorPlanImages,
    objectFit: 'contain' as const,
    bg: 'surface',
    slidesBg: '#F5F5F5',
    light: false,
  },
  {
    label: 'Virtual Staging',
    title: 'Staged to Sell',
    subtitle:
      'Photorealistic virtual staging that transforms vacant spaces and helps buyers picture life in the home.',
    images: virtualStagingImages,
    objectFit: 'cover' as const,
    bg: 'white',
    slidesBg: '#0A0A0A',
    light: false,
  },
]

const bgClass: Record<string, string> = {
  white: 'bg-white',
  dark: 'bg-[#0A0A0A]',
  surface: 'bg-[#F5F5F5]',
}

export default function PortfolioPage() {
  return (
    <>
      {/* Page header */}
      <div className="pt-32 pb-20 px-6 md:px-10 max-w-7xl mx-auto">
        <p className="text-[10px] font-semibold tracking-[0.25em] uppercase text-[#6B6B6B] mb-5">
          Portfolio
        </p>
        <h1
          className="font-black tracking-tighter leading-[0.95] text-[#0A0A0A]"
          style={{ fontSize: 'clamp(3rem, 8vw, 6.5rem)' }}
        >
          The Work
        </h1>
      </div>

      {/* 4 Sections */}
      {sections.map((section) => (
        <section key={section.title} className={`${bgClass[section.bg]} pb-20 md:pb-28`}>
          {/* Section heading */}
          <div className="max-w-7xl mx-auto px-6 md:px-10 pt-14 md:pt-20 pb-10">
            <p
              className={`text-[10px] font-semibold tracking-[0.25em] uppercase mb-5 ${
                section.light ? 'text-white/40' : 'text-[#6B6B6B]'
              }`}
            >
              {section.label}
            </p>
            <h2
              className={`font-black tracking-tighter leading-[0.95] mb-5 ${
                section.light ? 'text-white' : 'text-[#0A0A0A]'
              }`}
              style={{ fontSize: 'clamp(2.25rem, 5vw, 4rem)' }}
            >
              {section.title}
            </h2>
            <p
              className={`text-sm md:text-base leading-relaxed max-w-xl ${
                section.light ? 'text-white/50' : 'text-[#6B6B6B]'
              }`}
            >
              {section.subtitle}
            </p>
          </div>

          {/* Full-bleed slideshow */}
          <PortfolioSlideshow
            images={section.images}
            objectFit={section.objectFit}
            slidesBg={section.slidesBg}
          />
        </section>
      ))}

      {/* CTA */}
      <section className="bg-[#0A0A0A] py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 md:px-10 flex flex-col md:flex-row md:items-center md:justify-between gap-10">
          <div>
            <p className="text-[10px] font-semibold tracking-[0.25em] uppercase text-white/30 mb-5">
              Ready to Book
            </p>
            <h2
              className="font-black tracking-tighter text-white leading-[0.95]"
              style={{ fontSize: 'clamp(2rem, 5vw, 4rem)' }}
            >
              Let's shoot<br />your next listing.
            </h2>
          </div>
          <Button href="/contact" variant="light">
            Book a Shoot →
          </Button>
        </div>
      </section>
    </>
  )
}
