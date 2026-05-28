import type { Metadata } from 'next'
import SectionHeader from '@/components/ui/SectionHeader'
import LeadForm from '@/components/LeadForm'
import { siteConfig } from '@/lib/data'

export const metadata: Metadata = {
  title: 'Book a Shoot — Request a Real Estate Photography Quote',
  description:
    'Book a real estate photography shoot with Jaeco Real Estate Media. Request a quote for interior, drone, floor plans, virtual staging, or video tours in Delaware, PA, MD & NJ.',
  alternates: { canonical: 'https://www.jaecomedia.com/contact' },
  openGraph: {
    title: 'Book a Shoot — Jaeco Real Estate Media',
    description: 'Request a quote for professional real estate photography and media.',
    url: 'https://www.jaecomedia.com/contact',
  },
}

export default function ContactPage() {
  return (
    <>
      {/* Dark page header */}
      <div className="bg-[#0A0A0A] pt-32 pb-20 px-6 md:px-10">
        <div className="max-w-7xl mx-auto">
          <SectionHeader label="Let's Work Together" title="Book a Shoot" light />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-10 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          {/* Sidebar */}
          <div className="flex flex-col gap-10">
            <div>
              <p className="text-[10px] font-semibold tracking-[0.2em] uppercase text-[#6B6B6B] mb-5">
                Direct Contact
              </p>
              <div className="flex flex-col gap-4">
                {siteConfig.email ? (
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="text-sm text-[#0A0A0A] hover:opacity-50 transition-opacity"
                  >
                    {siteConfig.email}
                  </a>
                ) : (
                  <p className="text-sm text-[#C0C0C0]">Email coming soon</p>
                )}
                {siteConfig.phone ? (
                  <a
                    href={`tel:${siteConfig.phone}`}
                    className="text-sm text-[#0A0A0A] hover:opacity-50 transition-opacity"
                  >
                    {siteConfig.phone}
                  </a>
                ) : (
                  <p className="text-sm text-[#C0C0C0]">Phone coming soon</p>
                )}
                {siteConfig.instagram && (
                  <a
                    href={`https://instagram.com/${siteConfig.instagram}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-[#0A0A0A] hover:opacity-50 transition-opacity"
                  >
                    @{siteConfig.instagram}
                  </a>
                )}
              </div>
            </div>

            <div>
              <p className="text-[10px] font-semibold tracking-[0.2em] uppercase text-[#6B6B6B] mb-5">
                What to Expect
              </p>
              <ul className="flex flex-col gap-3">
                {[
                  'Response within 24 hours',
                  'No-obligation quote',
                  'Flexible scheduling',
                  'Fast photo delivery',
                ].map((item) => (
                  <li key={item} className="text-sm text-[#6B6B6B] flex items-start gap-2">
                    <span className="mt-0.5 text-[#0A0A0A] font-light shrink-0">—</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Form */}
          <div className="md:col-span-2">
            <LeadForm />
          </div>
        </div>
      </div>
    </>
  )
}
