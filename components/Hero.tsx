import Link from 'next/link'
import Image from 'next/image'

export default function Hero() {
  return (
    <section className="relative h-screen bg-[#0A0A0A] flex items-center overflow-hidden">
      <Image
        src="/images/portfolio/interior/interior-06.png"
        alt="Real estate photography"
        fill
        className="object-cover opacity-60"
        priority
      />

      {/* Subtle gradient overlay — keep this even when photo is added */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 w-full">
        <div className="max-w-3xl">
          <p className="text-[10px] font-semibold tracking-[0.35em] uppercase text-white/40 mb-8">
            Real Estate Photography
          </p>

          <h1 className="font-black tracking-tighter leading-[0.9] text-white mb-8"
              style={{ fontSize: 'clamp(3.5rem, 9vw, 7.5rem)' }}>
            <span className="block">Homes that sell.</span>
            <span className="block">Photos that do it.</span>
          </h1>

          <p className="text-sm md:text-base text-white/55 max-w-sm leading-relaxed mb-10">
            Premium real estate photography for agents who want every listing to stand out.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center text-[10px] font-semibold tracking-[0.18em] uppercase bg-white text-[#0A0A0A] px-8 py-4 hover:bg-white/90 transition-colors"
            >
              Book a Shoot
            </Link>
            <Link
              href="/portfolio"
              className="inline-flex items-center text-[10px] font-semibold tracking-[0.18em] uppercase text-white/60 hover:text-white transition-colors"
            >
              View Portfolio →
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/25 pointer-events-none">
        <span className="text-[9px] tracking-[0.3em] uppercase">Scroll</span>
        <div className="w-px h-8 bg-white/20" />
      </div>
    </section>
  )
}
