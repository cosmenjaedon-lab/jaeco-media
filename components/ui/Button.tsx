import Link from 'next/link'

type Variant = 'dark' | 'light' | 'outline-dark' | 'outline-light'

interface ButtonProps {
  children: React.ReactNode
  href?: string
  onClick?: () => void
  variant?: Variant
  className?: string
  type?: 'button' | 'submit' | 'reset'
  disabled?: boolean
}

const variants: Record<Variant, string> = {
  dark: 'bg-[#0A0A0A] text-white hover:bg-[#2A2A2A]',
  light: 'bg-white text-[#0A0A0A] hover:bg-[#F0F0F0]',
  'outline-dark': 'border border-[#0A0A0A] text-[#0A0A0A] hover:bg-[#0A0A0A] hover:text-white',
  'outline-light': 'border border-white text-white hover:bg-white hover:text-[#0A0A0A]',
}

export default function Button({
  children,
  href,
  onClick,
  variant = 'dark',
  className = '',
  type = 'button',
  disabled,
}: ButtonProps) {
  const base = `inline-flex items-center gap-2 text-[10px] font-semibold tracking-[0.15em] uppercase px-6 py-3.5 transition-colors duration-200 disabled:opacity-40 ${variants[variant]} ${className}`

  if (href) {
    return (
      <Link href={href} className={base}>
        {children}
      </Link>
    )
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={base}>
      {children}
    </button>
  )
}
