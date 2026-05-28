import type { Metadata } from 'next'
import { Check } from 'lucide-react'
import Button from '@/components/ui/Button'
import { includedFeatures, pricingTiers, pricingAddOns } from '@/lib/data'

export const metadata: Metadata = {
  title: 'Pricing — Jaeco Real Estate Media',
  description: 'Real estate photography pricing — packages, add-ons, and agent rates.',
}

export default function PricingPage() {
  return (
    <>
      {/* Page header */}
      <div className="pt-32 pb-16 px-6 md:px-10 max-w-7xl mx-auto">
        <p className="text-[10px] font-semibold tracking-[0.25em] uppercase text-[#6B6B6B] mb-5">
          Pricing
        </p>
        <h1
          className="font-black tracking-tighter leading-[0.95] text-[#0A0A0A] mb-6"
          style={{ fontSize: 'clamp(3rem, 8vw, 6.5rem)' }}
        >
          Simple Packages
        </h1>
        <p className="text-sm md:text-base text-[#6B6B6B] max-w-lg leading-relaxed">
          Transparent pricing, no surprises. Choose your package by square footage — everything else is an add-on.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-10 pb-24 space-y-20">

        {/* ── Included in every package ── */}
        <div className="border border-[#E0E0E0] p-8 md:p-10">
          <p className="text-[10px] font-semibold tracking-[0.25em] uppercase text-[#6B6B6B] mb-6">
            Included in every package
          </p>
          <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4">
            {includedFeatures.map((f) => (
              <li key={f} className="flex items-start gap-2.5">
                <Check size={13} className="mt-0.5 shrink-0 text-[#0A0A0A]" strokeWidth={2.5} />
                <span className="text-sm text-[#0A0A0A] leading-snug">{f}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* ── Core Packages ── */}
        <div>
          <p className="text-[10px] font-semibold tracking-[0.25em] uppercase text-[#6B6B6B] mb-8">
            Core Photo Packages — priced by square footage
          </p>

          {/* Table header — desktop */}
          <div className="hidden md:grid grid-cols-[2fr_2fr_1.5fr_1fr_auto] gap-x-6 pb-3 border-b border-[#E0E0E0] mb-1">
            {['Package', 'Square Footage', 'Photos', 'Price', ''].map((h) => (
              <p key={h} className="text-[10px] font-semibold tracking-[0.18em] uppercase text-[#6B6B6B]">
                {h}
              </p>
            ))}
          </div>

          {/* Tier rows */}
          <div className="divide-y divide-[#E0E0E0]">
            {pricingTiers.map((tier) => (
              <div
                key={tier.name}
                className={`py-5 flex flex-col gap-3 md:grid md:grid-cols-[2fr_2fr_1.5fr_1fr_auto] md:items-center md:gap-x-6 ${
                  tier.highlight ? 'bg-[#F5F5F5] -mx-4 px-4 md:-mx-6 md:px-6' : ''
                }`}
              >
                {/* Name */}
                <div className="flex items-center gap-3">
                  <span className="text-base font-black tracking-tight text-[#0A0A0A]">
                    {tier.name}
                  </span>
                  {tier.highlight && (
                    <span className="text-[9px] font-semibold tracking-[0.15em] uppercase bg-[#0A0A0A] text-white px-2 py-0.5">
                      Popular
                    </span>
                  )}
                </div>

                {/* Sq ft */}
                <p className="text-sm text-[#6B6B6B]">
                  <span className="md:hidden text-[10px] font-semibold tracking-widest uppercase text-[#C0C0C0] mr-2">
                    Sq Ft
                  </span>
                  {tier.sqft}
                </p>

                {/* Photos */}
                <p className="text-sm text-[#6B6B6B]">
                  <span className="md:hidden text-[10px] font-semibold tracking-widest uppercase text-[#C0C0C0] mr-2">
                    Photos
                  </span>
                  {tier.photos}
                </p>

                {/* Price */}
                <p className="text-xl font-black tracking-tighter text-[#0A0A0A]">
                  {tier.price}
                </p>

                {/* CTA */}
                <div>
                  <Button
                    href="/contact"
                    variant={tier.custom ? 'outline-dark' : 'dark'}
                    className="w-full md:w-auto"
                  >
                    {tier.custom ? 'Get a Quote' : 'Book →'}
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Add-Ons ── */}
        <div>
          <p className="text-[10px] font-semibold tracking-[0.25em] uppercase text-[#6B6B6B] mb-8">
            Add-Ons
          </p>

          {/* Add-on table header */}
          <div className="hidden md:grid grid-cols-[3fr_1fr_1fr] gap-x-8 pb-3 border-b border-[#E0E0E0] mb-1">
            {['Service', 'With Package', 'Standalone'].map((h) => (
              <p key={h} className="text-[10px] font-semibold tracking-[0.18em] uppercase text-[#6B6B6B]">
                {h}
              </p>
            ))}
          </div>

          <div className="divide-y divide-[#E0E0E0]">
            {pricingAddOns.map((addon) => (
              <div
                key={addon.name}
                className="py-4 flex flex-col gap-2 md:grid md:grid-cols-[3fr_1fr_1fr] md:items-center md:gap-x-8"
              >
                <div>
                  <span className="text-sm font-semibold text-[#0A0A0A]">{addon.name}</span>
                  {addon.note && (
                    <span className="ml-2 text-[10px] text-[#A0A0A0] tracking-wide">{addon.note}</span>
                  )}
                </div>
                <p className="text-sm text-[#0A0A0A] font-medium">
                  <span className="md:hidden text-[10px] text-[#C0C0C0] tracking-widest uppercase mr-2">
                    With package
                  </span>
                  {addon.bundled}
                </p>
                <p className="text-sm text-[#6B6B6B]">
                  {addon.standalone ? (
                    <>
                      <span className="md:hidden text-[10px] text-[#C0C0C0] tracking-widest uppercase mr-2">
                        Standalone
                      </span>
                      {addon.standalone}
                    </>
                  ) : (
                    <span className="text-[#D0D0D0]">—</span>
                  )}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* ── Agent / Volume Pricing ── */}
        <div className="bg-[#0A0A0A] p-8 md:p-10 flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          <div>
            <p className="text-[10px] font-semibold tracking-[0.25em] uppercase text-white/40 mb-4">
              Agents &amp; Volume Pricing
            </p>
            <h3 className="text-2xl md:text-3xl font-black tracking-tighter text-white mb-3">
              10–15% off for regular clients
            </h3>
            <p className="text-sm text-white/55 leading-relaxed max-w-md">
              Agents who commit to 4 or more shoots per month receive a standing discount.
              Reach out to set up an ongoing rate.
            </p>
          </div>
          <Button href="/contact" variant="light" className="shrink-0">
            Let&apos;s Talk →
          </Button>
        </div>

        {/* Bottom CTA */}
        <div className="pt-4 border-t border-[#E0E0E0] flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <p className="text-sm text-[#6B6B6B] max-w-md leading-relaxed">
            Have a unique property or need something custom? Happy to put together a tailored quote.
          </p>
          <Button href="/contact" variant="outline-dark" className="shrink-0">
            Get a Custom Quote →
          </Button>
        </div>

      </div>
    </>
  )
}
