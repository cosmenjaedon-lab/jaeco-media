import Link from 'next/link'
import Image from 'next/image'

export default function Hero() {
  return (
    <section className="relative h-screen bg-[#0A0A0A] overflow-hidden">
      <Image
        src="/images/portfolio/interior/interior-06.png"
        alt="Real estate photography"
        fill
        className="object-cover opacity-55"
        priority
      />

      {/* Bottom-anchored editorial content */}
      <div className="absolute bottom-0 left-0 right-0 z-10 px-6 md:px-10 pb-10 md:pb-16">
        <h1
          className="font-black tracking-tighter leading-[0.85] text-white"
          style={{ fontSize: 'clamp(4.5rem, 13vw, 12rem)' }}
        >
          <span className="block">Homes</span>
          <span className="block">that sell.</span>
        </h1>

        <div className="mt-8 pt-6 border-t border-white/20 flex flex-wrap items-center gap-6">
          <Link
            href="/contact"
            className="text-[11px] font-semibold tracking-[0.15em] uppercase bg-white text-[#0A0A0A] px-7 py-3.5 hover:bg-white/90 transition-colors"
          >
            Book a Shoot
          </Link>
          <Link
            href="/portfolio"
            className="text-[11px] font-semibold tracking-[0.15em] uppercase text-white/60 hover:text-white transition-colors"
          >
            View Portfolio →
          </Link>
        </div>
      </div>

      {/* Top-right tagline */}
      <div className="absolute top-24 right-6 md:right-10 z-10">
        <p className="text-[10px] tracking-[0.25em] uppercase text-white/35">
          Photos that do it.
        </p>
      </div>
    </section>
  )
}
