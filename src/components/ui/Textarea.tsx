import type { TextareaHTMLAttributes } from 'react'

export default function Textarea({ className = '', ...rest }: TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <textarea
      className={`w-full rounded-lg border border-line bg-paper px-3.5 py-2.5 text-sm text-ink placeholder:text-ink-soft/60 transition-colors focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20 ${className}`}
      {...rest}
    />
  )
}
