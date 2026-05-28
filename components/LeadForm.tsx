'use client'

import { useState } from 'react'
import { ChevronDown, Check } from 'lucide-react'
import Button from '@/components/ui/Button'

type FormState = 'idle' | 'loading' | 'success' | 'error'

const propertyTypes = [
  'Single Family Home',
  'Townhouse',
  'Condo / Apartment',
  'Duplex',
  'Multi-Family (3+ Units)',
  'Commercial',
  'New Construction',
  'Vacant Land / Lot',
  'Luxury / Estate',
  'Other',
]

const serviceOptions = [
  'Interior Photography',
  'Exterior Photography',
  'Drone / Aerial Photos',
  'Twilight Photos',
  'Virtual / AI Twilight',
  'Floor Plans',
  'Video Walkthrough',
  'Cinematic Video Tour',
  '3D Matterport Tour',
  'Virtual Staging',
  'Rush / Same-Day Delivery',
]

const inputClass =
  'border-b border-[#E0E0E0] bg-transparent py-3 text-sm text-[#0A0A0A] placeholder:text-[#C8C8C8] focus:outline-none focus:border-[#0A0A0A] transition-colors'

const labelClass = 'text-[10px] font-semibold tracking-[0.18em] uppercase text-[#6B6B6B]'

export default function LeadForm() {
  const [formState, setFormState] = useState<FormState>('idle')
  const [servicesOpen, setServicesOpen] = useState(false)
  const [selectedServices, setSelectedServices] = useState<string[]>([])

  function toggleService(service: string) {
    setSelectedServices((prev) =>
      prev.includes(service) ? prev.filter((s) => s !== service) : [...prev, service]
    )
  }

  function servicesSummary() {
    if (selectedServices.length === 0) return null
    if (selectedServices.length <= 2) return selectedServices.join(', ')
    return `${selectedServices.length} services selected`
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setFormState('loading')

    const form = e.currentTarget
    const data = new FormData(form)

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: data.get('name'),
          email: data.get('email'),
          phone: data.get('phone'),
          propertyType: data.get('propertyType'),
          services: selectedServices,
          address: data.get('address'),
          message: data.get('message'),
          consentTransactional: data.get('consentTransactional') === 'on',
          consentMarketing: data.get('consentMarketing') === 'on',
        }),
      })

      if (!res.ok) throw new Error()
      setFormState('success')
    } catch {
      setFormState('error')
    }
  }

  if (formState === 'success') {
    return (
      <div className="py-16">
        <p className="text-2xl font-black tracking-tighter text-[#0A0A0A] mb-3">
          Request received.
        </p>
        <p className="text-sm text-[#6B6B6B]">I&apos;ll be in touch within 24 hours.</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-8">

      {/* Name */}
      <div className="flex flex-col gap-2">
        <label className={labelClass}>Full Name *</label>
        <input
          name="name"
          required
          placeholder="Jane Smith"
          className={inputClass}
        />
      </div>

      {/* Email */}
      <div className="flex flex-col gap-2">
        <label className={labelClass}>Email *</label>
        <input
          name="email"
          type="email"
          required
          placeholder="jane@example.com"
          className={inputClass}
        />
      </div>

      {/* Phone */}
      <div className="flex flex-col gap-2">
        <label className={labelClass}>Phone *</label>
        <input
          name="phone"
          type="tel"
          required
          placeholder="(555) 000-0000"
          className={inputClass}
        />
      </div>

      {/* Property Type */}
      <div className="flex flex-col gap-2">
        <label className={labelClass}>Property Type *</label>
        <select
          name="propertyType"
          required
          defaultValue=""
          className={`${inputClass} appearance-none cursor-pointer`}
        >
          <option value="" disabled>Select type</option>
          {propertyTypes.map((t) => (
            <option key={t} value={t}>{t}</option>
          ))}
        </select>
      </div>

      {/* Services Needed — full-width multi-select dropdown */}
      <div className="md:col-span-2 flex flex-col gap-2">
        <label className={labelClass}>Services Needed</label>

        {/* Hidden inputs so selected values submit with the form */}
        {selectedServices.map((s) => (
          <input key={s} type="hidden" name="services" value={s} />
        ))}

        <div className="relative">
          <button
            type="button"
            onClick={() => setServicesOpen((v) => !v)}
            className="w-full border-b border-[#E0E0E0] py-3 text-sm text-left flex items-center justify-between gap-2 focus:outline-none focus:border-[#0A0A0A] transition-colors"
          >
            <span className={selectedServices.length === 0 ? 'text-[#C8C8C8]' : 'text-[#0A0A0A]'}>
              {servicesSummary() ?? 'Select all that apply'}
            </span>
            <ChevronDown
              size={14}
              className={`shrink-0 text-[#6B6B6B] transition-transform duration-200 ${servicesOpen ? 'rotate-180' : ''}`}
            />
          </button>

          {servicesOpen && (
            <>
              {/* Click-outside overlay */}
              <div
                className="fixed inset-0 z-[5]"
                onClick={() => setServicesOpen(false)}
              />

              {/* Dropdown panel */}
              <div className="absolute top-full left-0 right-0 z-10 bg-white border border-[#E0E0E0] border-t-0 shadow-sm">
                <div className="grid grid-cols-1 sm:grid-cols-2">
                  {serviceOptions.map((service) => {
                    const checked = selectedServices.includes(service)
                    return (
                      <label
                        key={service}
                        className="flex items-center gap-3 px-4 py-3 cursor-pointer hover:bg-[#F5F5F5] transition-colors"
                      >
                        <span
                          className={`w-4 h-4 shrink-0 border flex items-center justify-center transition-colors ${
                            checked
                              ? 'bg-[#0A0A0A] border-[#0A0A0A]'
                              : 'border-[#D0D0D0]'
                          }`}
                        >
                          {checked && <Check size={10} strokeWidth={3} className="text-white" />}
                        </span>
                        <input
                          type="checkbox"
                          className="sr-only"
                          checked={checked}
                          onChange={() => toggleService(service)}
                        />
                        <span className="text-sm text-[#0A0A0A]">{service}</span>
                      </label>
                    )
                  })}
                </div>

                {selectedServices.length > 0 && (
                  <div className="border-t border-[#E0E0E0] px-4 py-2.5 flex justify-between items-center">
                    <span className="text-[10px] text-[#6B6B6B] tracking-wide">
                      {selectedServices.length} selected
                    </span>
                    <button
                      type="button"
                      onClick={() => setSelectedServices([])}
                      className="text-[10px] text-[#6B6B6B] hover:text-[#0A0A0A] tracking-wide underline transition-colors"
                    >
                      Clear
                    </button>
                  </div>
                )}
              </div>
            </>
          )}
        </div>
      </div>

      {/* Property Address */}
      <div className="md:col-span-2 flex flex-col gap-2">
        <label className={labelClass}>Property Address</label>
        <input
          name="address"
          placeholder="123 Main St, City, State"
          className={inputClass}
        />
      </div>

      {/* Message */}
      <div className="md:col-span-2 flex flex-col gap-2">
        <label className={labelClass}>Message</label>
        <textarea
          name="message"
          rows={4}
          placeholder="Tell me about your listing, timeline, and any special requirements..."
          className={`${inputClass} resize-none`}
        />
      </div>

      {/* Submit */}
      <div className="md:col-span-2 flex flex-col gap-4">
        <Button type="submit" disabled={formState === 'loading'}>
          {formState === 'loading' ? 'Sending…' : 'Request a Quote'}
        </Button>
        {formState === 'error' && (
          <p className="text-xs text-red-600">Something went wrong. Please try again.</p>
        )}
      </div>

    </form>
  )
}
