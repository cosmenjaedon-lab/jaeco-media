'use client'

import dynamic from 'next/dynamic'

const ServiceAreaMap = dynamic(() => import('./ServiceAreaMap'), {
  ssr: false,
  loading: () => (
    <div
      className="w-full border border-[#E0E0E0] bg-[#F5F5F5] flex items-center justify-center"
      style={{ height: 'clamp(380px, 55vw, 560px)' }}
    >
      <p className="text-xs text-[#B0B0B0] tracking-widest uppercase">Loading map…</p>
    </div>
  ),
})

export default function ServiceAreaMapWrapper() {
  return <ServiceAreaMap />
}
