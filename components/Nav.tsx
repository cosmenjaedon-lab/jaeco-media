'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'
import { AnimatePresence, motion } from 'framer-motion'
import { navLinks } from '@/lib/data'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const pathname = usePathname()
  const isHome = pathname === '/'

  useEffect(() => {
    if (!isHome) {
      setScrolled(true)
      return
    }
    const handle = () => setScrolled(window.scrollY > 60)
    handle()
    window.addEventListener('scroll', handle, { passive: true })
    return () => window.removeEventListener('scroll', handle)
  }, [isHome])

  useEffect(() => { setOpen(false) }, [pathname])

  const dark = scrolled || !isHome

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        dark ? 'bg-white border-b border-[#E0E0E0]' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 h-16 flex items-center justify-between">
        <Link
          href="/"
          className={`text-[10px] font-black tracking-[0.18em] uppercase transition-colors ${
            dark ? 'text-[#0A0A0A]' : 'text-white'
          }`}
        >
          Jaeco Real Estate Media
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-[10px] font-semibold tracking-[0.15em] uppercase transition-colors hover:opacity-50 ${
                dark ? 'text-[#0A0A0A]' : 'text-white'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className={`text-[10px] font-semibold tracking-[0.15em] uppercase border px-5 py-2.5 transition-colors ${
              dark
                ? 'border-[#0A0A0A] text-[#0A0A0A] hover:bg-[#0A0A0A] hover:text-white'
                : 'border-white text-white hover:bg-white hover:text-[#0A0A0A]'
            }`}
          >
            Book a Shoot
          </Link>
        </nav>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          className={`md:hidden transition-colors ${dark ? 'text-[#0A0A0A]' : 'text-white'}`}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.15 }}
            className="md:hidden bg-white border-t border-[#E0E0E0]"
          >
            <div className="flex flex-col px-6 py-8 gap-7">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm font-semibold tracking-[0.15em] uppercase text-[#0A0A0A] hover:opacity-40 transition-opacity"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/contact"
                className="text-sm font-semibold tracking-[0.15em] uppercase border border-[#0A0A0A] text-[#0A0A0A] py-3.5 text-center hover:bg-[#0A0A0A] hover:text-white transition-colors"
              >
                Book a Shoot
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
