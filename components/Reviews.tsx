import { reviews } from '@/lib/data'

const STARS = '★★★★★'

export default function Reviews() {
  const [featured, ...rest] = reviews

  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-10">

        {/* Header */}
        <div className="flex items-end justify-between mb-12">
          <h2
            className="font-black tracking-tighter leading-[0.92] text-[#0A0A0A]"
            style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)' }}
          >
            What Clients Say
          </h2>
          <div className="hidden sm:flex items-center gap-3 shrink-0 pb-1">
            <span className="text-base tracking-tight text-[#0A0A0A]" aria-hidden="true">{STARS}</span>
            <p className="text-sm font-semibold text-[#0A0A0A]">
              5.0
              <span className="font-normal text-[#6B6B6B]"> · {reviews.length} reviews</span>
            </p>
          </div>
        </div>

        {/* Featured review */}
        <div className="relative bg-[#F5F5F5] p-10 md:p-14 mb-4 overflow-hidden">
          <span
            className="absolute top-4 left-6 font-black leading-none select-none pointer-events-none text-[#E0E0E0]"
            style={{ fontSize: 'clamp(5rem, 20vw, 10rem)' }}
            aria-hidden="true"
          >
            &ldquo;
          </span>
          <div className="relative z-10 max-w-3xl">
            <span className="text-base tracking-tight text-[#0A0A0A]" aria-label="5 stars">{STARS}</span>
            <p className="mt-6 text-base md:text-lg text-[#0A0A0A] leading-relaxed">
              {featured.body}
            </p>
            <p className="mt-8 font-black text-sm tracking-wide text-[#0A0A0A]">
              — {featured.name}
            </p>
            <p className="text-[10px] text-[#6B6B6B] tracking-wide mt-1">
              {featured.time} · Google
            </p>
          </div>
        </div>

        {/* Remaining reviews */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {rest.map((review) => (
            <div key={review.name} className="bg-[#F5F5F5] p-7 flex flex-col">
              <span className="text-base tracking-tight text-[#0A0A0A]" aria-label="5 stars">
                {STARS}
              </span>
              <p className="mt-5 text-sm text-[#0A0A0A] leading-relaxed flex-1">
                &ldquo;{review.body}&rdquo;
              </p>
              <div className="mt-6 pt-5 border-t border-[#E0E0E0]">
                <p className="text-xs font-semibold tracking-wide text-[#0A0A0A]">{review.name}</p>
                <p className="text-[10px] text-[#6B6B6B] tracking-wide mt-0.5">{review.time} · Google</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
