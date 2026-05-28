interface SectionHeaderProps {
  label?: string
  title: string
  subtitle?: string
  align?: 'left' | 'center'
  light?: boolean
}

export default function SectionHeader({
  label,
  title,
  subtitle,
  align = 'left',
  light = false,
}: SectionHeaderProps) {
  const centered = align === 'center' ? 'text-center mx-auto' : ''
  const textColor = light ? 'text-white' : 'text-[#0A0A0A]'
  const muteColor = light ? 'text-white/50' : 'text-[#6B6B6B]'

  return (
    <div className={`max-w-2xl ${centered}`}>
      {label && (
        <p className={`text-[10px] font-semibold tracking-[0.25em] uppercase mb-5 ${muteColor}`}>
          {label}
        </p>
      )}
      <h2 className={`text-4xl md:text-5xl font-black tracking-tighter leading-[0.95] ${textColor}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-5 text-sm md:text-base leading-relaxed ${muteColor}`}>{subtitle}</p>
      )}
    </div>
  )
}
