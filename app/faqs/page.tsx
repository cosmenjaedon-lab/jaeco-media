import type { Metadata } from 'next'
import Button from '@/components/ui/Button'

export const metadata: Metadata = {
  title: 'FAQs — Real Estate Photography Questions Answered',
  description:
    'Answers to the most common questions about real estate photography, pricing, turnaround time, drone aerials, virtual staging, and booking in Delaware, PA, MD & NJ.',
  alternates: { canonical: 'https://www.jaecomedia.com/faqs' },
  openGraph: {
    title: 'FAQs — Jaeco Real Estate Media',
    description: 'Everything you need to know about booking professional real estate photography.',
    url: 'https://www.jaecomedia.com/faqs',
  },
}

const faqs = [
  {
    q: 'How much does real estate photography cost?',
    a: 'Packages start at $175 for homes up to 1,500 sq ft and go up based on size and services. All packages include professional editing and fast delivery. Visit the Pricing page for a full breakdown.',
  },
  {
    q: 'What areas do you serve?',
    a: 'We serve Delaware, New Jersey, Pennsylvania, and Maryland within approximately 100 miles of Bear, DE — including Wilmington, Newark, Dover, Philadelphia, West Chester, Lancaster, Baltimore, Annapolis, Camden, Cherry Hill, and Atlantic City.',
  },
  {
    q: 'How quickly will I receive my photos?',
    a: 'Standard turnaround is 24–48 hours after the shoot. Rush and same-day delivery are available as add-ons for time-sensitive listings.',
  },
  {
    q: 'What is included in a standard shoot?',
    a: 'Every package includes HDR interior and exterior photography, professional post-processing, and a private online gallery for easy downloading and sharing with clients.',
  },
  {
    q: 'Do you offer drone and aerial photography?',
    a: 'Yes. Drone aerials are available as an add-on to any package or as a standalone service. All drone work is performed by a licensed FAA Part 107 operator.',
  },
  {
    q: 'What is virtual staging?',
    a: 'Virtual staging uses photo editing to digitally furnish and decorate empty rooms, helping buyers visualize the space without the cost of physical staging. It is ideal for vacant listings.',
  },
  {
    q: 'Do you offer floor plans?',
    a: 'Yes. Accurate, professionally drawn floor plans are available as an add-on. They help buyers understand the layout and flow of a property before scheduling a showing.',
  },
  {
    q: 'Can you do twilight or sunset photography?',
    a: 'Yes. Both real twilight shoots (timed for golden hour) and virtual AI twilight edits (converted from daytime photos) are available. Twilight photos are highly effective for marketing luxury and larger properties.',
  },
  {
    q: 'Do you shoot occupied homes?',
    a: 'Absolutely. We work with both vacant and occupied properties. For best results, we recommend decluttering and cleaning before the shoot. We can provide a pre-shoot checklist upon booking.',
  },
  {
    q: 'How do I book a shoot?',
    a: 'Fill out the quote form on the Contact page with your property details and preferred date. We typically respond within a few hours to confirm availability and finalize scheduling.',
  },
  {
    q: 'What if the weather is bad on shoot day?',
    a: 'We monitor weather closely. If conditions are poor, we will proactively reach out to reschedule at no extra charge. Sky replacement editing is also available for overcast days.',
  },
  {
    q: 'Do you offer video walkthroughs or cinematic tours?',
    a: 'Yes. Video walkthroughs and cinematic video tours are available as add-ons. These are ideal for high-end listings and social media marketing.',
  },
]

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map(({ q, a }) => ({
    '@type': 'Question',
    name: q,
    acceptedAnswer: { '@type': 'Answer', text: a },
  })),
}

export default function FaqsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Page header */}
      <div className="pt-32 pb-16 px-6 md:px-10 max-w-7xl mx-auto">
        <h1
          className="font-black tracking-tighter leading-[0.92] text-[#0A0A0A]"
          style={{ fontSize: 'clamp(3rem, 8vw, 6.5rem)' }}
        >
          Frequently Asked<br />Questions
        </h1>
        <p className="mt-6 text-sm text-[#6B6B6B] leading-relaxed max-w-lg">
          Everything you need to know before booking. Don&apos;t see your question? Reach out directly.
        </p>
      </div>

      {/* FAQ list */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 pb-20 md:pb-28">
        <div className="divide-y divide-[#E0E0E0]">
          {faqs.map(({ q, a }) => (
            <div key={q} className="py-8 md:grid md:grid-cols-[2fr_3fr] md:gap-16">
              <p className="font-black text-base tracking-tight text-[#0A0A0A] mb-4 md:mb-0">
                {q}
              </p>
              <p className="text-sm text-[#6B6B6B] leading-relaxed">{a}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 pt-10 border-t border-[#E0E0E0] flex flex-col sm:flex-row items-start sm:items-center gap-6">
          <p className="text-sm text-[#6B6B6B]">Still have questions? Get in touch.</p>
          <Button href="/contact">Book a Shoot →</Button>
        </div>
      </div>
    </>
  )
}
