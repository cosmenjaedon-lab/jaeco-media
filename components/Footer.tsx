import Link from 'next/link'
import { siteConfig, navLinks } from '@/lib/data'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-[#0A0A0A] text-white">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-16 md:py-20">
        <div className="flex flex-col md:flex-row md:justify-between gap-12">
          <div>
            <p className="text-[10px] font-black tracking-[0.18em] uppercase mb-3">Jaeco Real Estate Media</p>
            <p className="text-sm text-white/50 max-w-xs leading-relaxed">{siteConfig.name}</p>
          </div>

          <nav className="flex flex-col gap-4">
            <p className="text-[10px] font-semibold tracking-[0.2em] uppercase text-white/30">
              Navigate
            </p>
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-white/60 hover:text-white transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="text-sm text-white/60 hover:text-white transition-colors"
            >
              Contact
            </Link>
          </nav>

          <div className="flex flex-col gap-4">
            <p className="text-[10px] font-semibold tracking-[0.2em] uppercase text-white/30">
              Get in Touch
            </p>
            {siteConfig.email ? (
              <a
                href={`mailto:${siteConfig.email}`}
                className="text-sm text-white/60 hover:text-white transition-colors"
              >
                {siteConfig.email}
              </a>
            ) : (
              <p className="text-sm text-white/20">Email coming soon</p>
            )}
            {siteConfig.phone && (
              <a
                href={`tel:${siteConfig.phone}`}
                className="text-sm text-white/60 hover:text-white transition-colors"
              >
                {siteConfig.phone}
              </a>
            )}
            {siteConfig.instagram && (
              <a
                href={`https://instagram.com/${siteConfig.instagram}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-white/60 hover:text-white transition-colors"
              >
                @{siteConfig.instagram}
              </a>
            )}
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <p className="text-xs text-white/25">
            © {year} {siteConfig.name}. All rights reserved.
          </p>
          <p className="text-[10px] text-white/15 tracking-[0.2em] uppercase">
            Real Estate Photography
          </p>
        </div>
      </div>
    </footer>
  )
}
