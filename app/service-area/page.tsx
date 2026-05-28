import type { Metadata } from 'next'
import ServiceAreaMapWrapper from '@/components/ServiceAreaMapWrapper'
import Button from '@/components/ui/Button'

export const metadata: Metadata = {
  title: 'Service Area — Delaware, PA, MD & NJ Real Estate Photography',
  description:
    'Jaeco Real Estate Media serves the entire Delaware Valley and surrounding region — Delaware, New Jersey, Pennsylvania, and Maryland within 100 miles of Bear, DE. Including Wilmington, Philadelphia, Baltimore, and more.',
  alternates: { canonical: 'https://www.jaecomedia.com/service-area' },
  openGraph: {
    title: 'Service Area — Jaeco Real Estate Media',
    description: 'Real estate photography serving DE, NJ, PA, and MD within 100 miles of Bear, DE.',
    url: 'https://www.jaecomedia.com/service-area',
  },
}

const states = ['Delaware', 'New Jersey', 'Pennsylvania', 'Maryland']

export default function ServiceAreaPage() {
  return (
    <>
      {/* Page header */}
      <div className="pt-32 pb-16 px-6 md:px-10 max-w-7xl mx-auto">
        <p className="text-[10px] font-semibold tracking-[0.25em] uppercase text-[#6B6B6B] mb-5">
          Coverage
        </p>
        <h1
          className="font-black tracking-tighter leading-[0.95] text-[#0A0A0A] mb-6"
          style={{ fontSize: 'clamp(3rem, 8vw, 6.5rem)' }}
        >
          Where I Shoot
        </h1>
        <p className="text-sm md:text-base text-[#6B6B6B] max-w-xl leading-relaxed">
          Based in Bear, Delaware. Available within a 100-mile radius — covering{' '}
          {states.join(', ')}.
        </p>
      </div>

      {/* Map */}
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <ServiceAreaMapWrapper />
      </div>

      {/* States + note */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 mt-10 pb-24 space-y-10">

        {/* State chips */}
        <div className="flex flex-wrap gap-3">
          {states.map((s) => (
            <div key={s} className="border border-[#E0E0E0] px-5 py-2.5">
              <p className="text-sm font-semibold text-[#0A0A0A]">{s}</p>
            </div>
          ))}
        </div>

        {/* Coverage detail */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4 border-t border-[#E0E0E0]">
          <div>
            <p className="text-[10px] font-semibold tracking-[0.2em] uppercase text-[#6B6B6B] mb-4">
              Coverage detail
            </p>
            <ul className="space-y-2.5">
              {[
                'All of Delaware',
                'Southern & central New Jersey',
                'Eastern Pennsylvania — including Philadelphia and suburbs',
                'Northern & eastern Maryland — including Baltimore area',
              ].map((item) => (
                <li key={item} className="text-sm text-[#0A0A0A] flex items-start gap-2.5">
                  <span className="mt-0.5 shrink-0 text-[#A0A0A0]">—</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-[10px] font-semibold tracking-[0.2em] uppercase text-[#6B6B6B] mb-4">
              Travel note
            </p>
            <p className="text-sm text-[#6B6B6B] leading-relaxed">
              Properties within ~30 miles of Bear, DE are covered at no additional cost.
              Shoots beyond ~30 miles may include a small travel fee — contact me for details.
            </p>
            <div className="mt-6">
              <Button href="/contact">Book a Shoot →</Button>
            </div>
          </div>
        </div>

      </div>
    </>
  )
}
