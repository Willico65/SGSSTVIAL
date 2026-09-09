import type { LabelHTMLAttributes } from 'react'

export default function Label({ className = '', ...rest }: LabelHTMLAttributes<HTMLLabelElement>) {
  return <label className={`mb-1.5 block text-sm font-semibold text-ink ${className}`} {...rest} />
}
