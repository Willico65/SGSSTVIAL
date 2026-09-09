import type { AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react'
import { Link } from 'react-router-dom'

type Variant = 'primary' | 'secondary' | 'ghost' | 'ghostDark'

const base =
  'inline-flex items-center justify-center gap-2 rounded-lg px-5 py-3 text-sm font-semibold transition-colors whitespace-nowrap disabled:cursor-not-allowed disabled:opacity-60'

const variants: Record<Variant, string> = {
  primary: 'bg-accent text-white hover:bg-accent-dark',
  secondary: 'bg-ink text-paper hover:bg-ink/90',
  ghost: 'border border-line bg-transparent text-ink hover:bg-steel-soft',
  // Para usar sobre fondos oscuros (bg-ink) — evita pisar utilidades de color
  // con className, cuyo orden en el CSS final no está garantizado.
  ghostDark: 'border border-paper/30 bg-transparent text-paper hover:bg-paper/10',
}

type LinkProps = {
  to: string
  variant?: Variant
} & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'href'>

export function ButtonLink({ to, variant = 'primary', className = '', children, ...rest }: LinkProps) {
  const isExternal = to.startsWith('http') || to.startsWith('mailto:') || to.startsWith('tel:')

  if (isExternal) {
    return (
      <a href={to} className={`${base} ${variants[variant]} ${className}`} {...rest}>
        {children}
      </a>
    )
  }

  return (
    <Link to={to} className={`${base} ${variants[variant]} ${className}`} {...rest}>
      {children}
    </Link>
  )
}

type BtnProps = {
  variant?: Variant
} & ButtonHTMLAttributes<HTMLButtonElement>

export function Button({ variant = 'primary', className = '', children, ...rest }: BtnProps) {
  return (
    <button className={`${base} ${variants[variant]} ${className}`} {...rest}>
      {children}
    </button>
  )
}
