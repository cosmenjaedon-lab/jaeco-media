'use client'

import { useEffect, useCallback } from 'react'
import Image from 'next/image'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import type { PortfolioImage } from '@/lib/data'

interface LightboxProps {
  images: PortfolioImage[]
  index: number
  onClose: () => void
  onPrev: () => void
  onNext: () => void
}

export default function Lightbox({ images, index, onClose, onPrev, onNext }: LightboxProps) {
  const image = images[index]

  const handleKey = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowLeft') onPrev()
      if (e.key === 'ArrowRight') onNext()
    },
    [onClose, onPrev, onNext]
  )

  useEffect(() => {
    document.addEventListener('keydown', handleKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', handleKey)
      document.body.style.overflow = ''
    }
  }, [handleKey])

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        className="fixed inset-0 z-[100] bg-black/96 flex items-center justify-center"
        onClick={onClose}
      >
        {/* Close */}
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors z-10"
        >
          <X size={22} />
        </button>

        {/* Counter */}
        <p className="absolute top-7 left-6 text-[10px] text-white/30 tracking-[0.2em] uppercase">
          {index + 1} / {images.length}
        </p>

        {/* Prev */}
        {index > 0 && (
          <button
            onClick={(e) => { e.stopPropagation(); onPrev() }}
            aria-label="Previous photo"
            className="absolute left-4 md:left-8 text-white/40 hover:text-white transition-colors"
          >
            <ChevronLeft size={30} />
          </button>
        )}

        {/* Image */}
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.18 }}
          className="relative w-full max-w-5xl max-h-[85vh] px-4 md:px-16 h-[85vh]"
          onClick={(e) => e.stopPropagation()}
        >
          <Image
            src={image.src}
            alt={image.alt}
            fill
            className="object-contain"
            sizes="90vw"
          />
        </motion.div>

        {/* Next */}
        {index < images.length - 1 && (
          <button
            onClick={(e) => { e.stopPropagation(); onNext() }}
            aria-label="Next photo"
            className="absolute right-4 md:right-8 text-white/40 hover:text-white transition-colors"
          >
            <ChevronRight size={30} />
          </button>
        )}
      </motion.div>
    </AnimatePresence>
  )
}
