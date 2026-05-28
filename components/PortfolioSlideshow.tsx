'use client'

import { useState, useCallback, useEffect, useRef } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { AnimatePresence, motion } from 'framer-motion'
import Lightbox from './Lightbox'
import type { PortfolioImage } from '@/lib/data'

interface PortfolioSlideshowProps {
  images: PortfolioImage[]
  objectFit?: 'cover' | 'contain'
  slidesBg?: string
}

export default function PortfolioSlideshow({
  images,
  objectFit = 'cover',
  slidesBg = '#0A0A0A',
}: PortfolioSlideshowProps) {
  const [current, setCurrent] = useState(0)
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)
  const touchStartX = useRef<number | null>(null)

  const prev = useCallback(
    () => setCurrent((c) => (c - 1 + images.length) % images.length),
    [images.length]
  )
  const next = useCallback(
    () => setCurrent((c) => (c + 1) % images.length),
    [images.length]
  )

  // Keyboard navigation (when not in lightbox)
  useEffect(() => {
    if (lightboxIndex !== null) return
    const handle = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') prev()
      if (e.key === 'ArrowRight') next()
    }
    window.addEventListener('keydown', handle)
    return () => window.removeEventListener('keydown', handle)
  }, [prev, next, lightboxIndex])

  // Auto-advance every 5 seconds, pause when lightbox is open
  useEffect(() => {
    if (lightboxIndex !== null || images.length <= 1) return
    const timer = setInterval(next, 5000)
    return () => clearInterval(timer)
  }, [next, lightboxIndex, images.length])

  if (images.length === 0) return null

  return (
    <div>
      {/* Full-bleed slide area */}
      <div
        className="relative group w-full aspect-video overflow-hidden cursor-zoom-in select-none"
        style={{ backgroundColor: slidesBg }}
        onClick={() => setLightboxIndex(current)}
        onTouchStart={(e) => { touchStartX.current = e.touches[0].clientX }}
        onTouchEnd={(e) => {
          if (touchStartX.current === null) return
          const diff = touchStartX.current - e.changedTouches[0].clientX
          if (Math.abs(diff) > 50) diff > 0 ? next() : prev()
          touchStartX.current = null
        }}
      >
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={current}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35, ease: 'easeInOut' }}
            className="absolute inset-0"
          >
            <Image
              src={images[current].src}
              alt={images[current].alt}
              fill
              className={objectFit === 'contain' ? 'object-contain p-6 md:p-10' : 'object-cover'}
              sizes="100vw"
              priority={current === 0}
            />
          </motion.div>
        </AnimatePresence>

        {/* Prev arrow */}
        {images.length > 1 && (
          <button
            onClick={(e) => { e.stopPropagation(); prev() }}
            aria-label="Previous photo"
            className="absolute left-5 md:left-10 top-1/2 -translate-y-1/2 w-11 h-11 bg-black/30 hover:bg-black/60 backdrop-blur-sm flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all duration-200"
          >
            <ChevronLeft size={20} />
          </button>
        )}

        {/* Next arrow */}
        {images.length > 1 && (
          <button
            onClick={(e) => { e.stopPropagation(); next() }}
            aria-label="Next photo"
            className="absolute right-5 md:right-10 top-1/2 -translate-y-1/2 w-11 h-11 bg-black/30 hover:bg-black/60 backdrop-blur-sm flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all duration-200"
          >
            <ChevronRight size={20} />
          </button>
        )}

        {/* Counter */}
        <p className="absolute top-5 right-5 text-[10px] text-white/50 tracking-[0.22em] tabular-nums pointer-events-none">
          {String(current + 1).padStart(2, '0')} / {String(images.length).padStart(2, '0')}
        </p>
      </div>

      {/* Dot / line indicators */}
      {images.length > 1 && (
        <div className="flex items-center gap-1.5 pt-5 max-w-7xl mx-auto px-6 md:px-10">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`h-[2px] transition-all duration-300 ${
                i === current
                  ? 'bg-[#0A0A0A] w-8'
                  : 'bg-[#D0D0D0] w-3 hover:bg-[#A0A0A0]'
              }`}
            />
          ))}
        </div>
      )}

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <Lightbox
          images={images}
          index={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onPrev={() => setLightboxIndex((i) => Math.max(0, (i ?? 0) - 1))}
          onNext={() =>
            setLightboxIndex((i) => Math.min(images.length - 1, (i ?? 0) + 1))
          }
        />
      )}
    </div>
  )
}
