'use client'

import { useState } from 'react'
import Image from 'next/image'
import Lightbox from './Lightbox'
import type { PortfolioImage } from '@/lib/data'

interface PortfolioGridProps {
  images: PortfolioImage[]
}

export default function PortfolioGrid({ images }: PortfolioGridProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null)

  if (images.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-32 border border-[#E0E0E0] text-center">
        <p className="text-sm text-[#6B6B6B] mb-2">Portfolio gallery coming soon.</p>
        <p className="text-xs text-[#C0C0C0]">Photos are being prepared for upload.</p>
      </div>
    )
  }

  return (
    <>
      <div className="columns-1 sm:columns-2 md:columns-3 gap-3 space-y-3">
        {images.map((img, i) => (
          <div
            key={i}
            className="break-inside-avoid overflow-hidden cursor-pointer group"
            onClick={() => setSelectedIndex(i)}
          >
            <Image
              src={img.src}
              alt={img.alt}
              width={800}
              height={600}
              className="w-full h-auto object-cover group-hover:scale-[1.02] transition-transform duration-500"
            />
          </div>
        ))}
      </div>

      {selectedIndex !== null && (
        <Lightbox
          images={images}
          index={selectedIndex}
          onClose={() => setSelectedIndex(null)}
          onPrev={() => setSelectedIndex((i) => Math.max(0, (i ?? 0) - 1))}
          onNext={() =>
            setSelectedIndex((i) => Math.min(images.length - 1, (i ?? 0) + 1))
          }
        />
      )}
    </>
  )
}
