import type { PropsWithChildren } from 'react'

export default function Badge({ children }: PropsWithChildren) {
  return (
    <span className="inline-flex items-center rounded-full bg-steel-soft px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-steel">
      {children}
    </span>
  )
}
