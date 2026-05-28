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
    q: 'How far in advance should I book?',
    a: 'We recommend booking at least 72 hours in advance to secure your preferred date and time. That said, we do our best to accommodate last-minute requests — reach out and we will let you know what is available.',
  },
  {
    q: 'How long does a typical shoot take?',
    a: 'Shoot time depends on the size and complexity of the property. A smaller home typically takes 15–30 minutes, while a larger or more detailed property can take up to 2 hours. We will give you a time estimate when you book.',
  },
  {
    q: 'What is your turnaround time?',
    a: 'Standard turnaround is 24–48 hours after the shoot. If you need your photos the same day, rush delivery is available as an add-on — photos are delivered within 2 hours of the shoot wrapping up.',
  },
  {
    q: 'Do I need to be at the property during the shoot?',
    a: 'No. As long as we have access to the property, you do not need to be present. Many agents provide a lockbox code or arrange for a key drop. Just make sure the home is prepared before we arrive.',
  },
  {
    q: 'How should the home be prepared before the shoot?',
    a: 'For best results: open all blinds and window treatments to let in natural light, clean windows if possible, tidy all rooms and remove clutter, clear countertops and personal items, and relocate pets. A clean, decluttered home always photographs better.',
  },
  {
    q: 'What happens if the weather is bad on shoot day?',
    a: 'If weather prevents us from shooting the exterior, we have two options: reschedule the exterior portion at no additional cost, or use a sky replacement edit to enhance the existing exterior photos. We will work with you to find the best solution.',
  },
  {
    q: 'What is your service area, and are there travel fees?',
    a: 'We serve properties within approximately 100 miles of Bear, DE — covering Delaware, Pennsylvania, Maryland, and New Jersey. There is no travel fee within the first 30 miles. Beyond that, a small travel fee applies based on distance.',
  },
  {
    q: 'Do you offer drone and aerial photography?',
    a: 'Yes. Drone aerials are available as an add-on to any package or as a standalone service. All drone work is performed by a licensed FAA Part 107 certified operator.',
  },
  {
    q: 'How is pricing structured?',
    a: 'Base packages are priced by square footage and range from $175 to $399. Luxury properties over 5,000 sq ft are quoted individually. Add-ons such as drone, video, virtual staging, floor plans, and twilight photography are available at flat rates. Visit the Pricing page for a full breakdown.',
  },
  {
    q: 'What usage rights do I get with the photos?',
    a: 'You receive full rights to use the photos for marketing the listed property — including MLS, social media, print, and digital advertising. Photos are licensed for use with that listing and may not be transferred to third parties or used for unrelated commercial purposes.',
  },
  {
    q: 'Do you offer discounts for agents with multiple listings?',
    a: 'Yes. If you have multiple active listings or expect ongoing volume, reach out directly to discuss volume pricing. We value long-term relationships with agents and brokerages.',
  },
  {
    q: 'What if I am not happy with the photos?',
    a: 'Your satisfaction matters. If there is something you are not happy with, we will re-edit the photos at no additional cost. If a re-edit does not resolve the issue, we will schedule a reshoot. We want every set of photos to represent your listing at its best.',
  },
  {
    q: 'How do I pay, and when is payment due?',
    a: 'An invoice is sent after delivery of your photos. We accept cash, check, Venmo, Cash App, and Zelle. Payment is due upon receipt of the invoice.',
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
