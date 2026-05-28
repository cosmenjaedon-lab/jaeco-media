import { reviews } from '@/lib/data'

const STARS = '★★★★★'

export default function Reviews() {
  return (
    <section className="py-20 md:py-28 bg-[#F5F5F5]">
      <div className="max-w-7xl mx-auto px-6 md:px-10">

        {/* Header row */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-10">
          <div>
            <p className="text-[10px] font-semibold tracking-[0.25em] uppercase text-[#6B6B6B] mb-5">
              Google Reviews
            </p>
            <h2
              className="font-black tracking-tighter leading-[0.95] text-[#0A0A0A]"
              style={{ fontSize: 'clamp(2.25rem, 5vw, 4rem)' }}
            >
              What Clients Say
            </h2>
          </div>

          {/* Rating badge */}
          <div className="flex items-center gap-3 shrink-0 pb-1">
            <span className="text-lg tracking-tight text-[#0A0A0A]" aria-hidden="true">
              {STARS}
            </span>
            <p className="text-sm font-semibold text-[#0A0A0A]">
              5.0
              <span className="font-normal text-[#6B6B6B]"> · {reviews.length} reviews</span>
            </p>
          </div>
        </div>

        {/* Review cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {reviews.map((review) => (
            <div key={review.name} className="bg-white border border-[#E0E0E0] p-7 flex flex-col">
              {/* Stars */}
              <span className="text-base tracking-tight text-[#0A0A0A]" aria-label="5 stars">
                {STARS}
              </span>

              {/* Body */}
              <p className="mt-5 text-sm text-[#0A0A0A] leading-relaxed flex-1">
                &ldquo;{review.body}&rdquo;
              </p>

              {/* Attribution */}
              <div className="mt-6 pt-5 border-t border-[#E0E0E0]">
                <p className="text-xs font-semibold tracking-wide text-[#0A0A0A]">
                  {review.name}
                </p>
                <p className="text-[10px] text-[#6B6B6B] tracking-wide mt-0.5">
                  {review.time} · Google
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
