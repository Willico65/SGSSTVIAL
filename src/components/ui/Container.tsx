import type { PropsWithChildren } from 'react'

export default function Container({
  children,
  className = '',
}: PropsWithChildren<{ className?: string }>) {
  return (
    <div className={`mx-auto w-full max-w-content px-6 ${className}`}>
      {children}
    </div>
  )
}
