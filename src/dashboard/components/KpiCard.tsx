import type { ReactNode } from 'react'

type Variant = 'success' | 'warning' | 'danger'

const variantStyles: Record<Variant, { border: string; iconBg: string; iconText: string }> = {
  success: { border: 'border-l-4 border-vial-success', iconBg: 'bg-emerald-50', iconText: 'text-emerald-600' },
  warning: { border: 'border-l-4 border-vial-secondary', iconBg: 'bg-amber-50', iconText: 'text-amber-600' },
  danger: { border: 'border-l-4 border-vial-danger', iconBg: 'bg-red-50', iconText: 'text-red-600' },
}

export default function KpiCard({
  title,
  value,
  variant,
  icon,
  progress,
}: {
  title: string
  value: string
  variant: Variant
  icon: ReactNode
  progress?: number
}) {
  const styles = variantStyles[variant]

  return (
    <div className={`flex flex-col gap-4 rounded-lg bg-vial-surface p-6 shadow-sm ${styles.border}`}>
      <div className="flex items-start justify-between">
        <p className="text-sm font-medium text-slate-500">{title}</p>
        <span className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full ${styles.iconBg} ${styles.iconText}`}>
          <span className="h-5 w-5 [&>svg]:h-5 [&>svg]:w-5">{icon}</span>
        </span>
      </div>

      <p className="text-3xl font-bold text-vial-text">{value}</p>

      {typeof progress === 'number' && (
        <div className="h-2 w-full overflow-hidden rounded-full bg-slate-100">
          <div
            className="h-full rounded-full bg-vial-success transition-[width]"
            style={{ width: `${Math.min(100, Math.max(0, progress))}%` }}
          />
        </div>
      )}
    </div>
  )
}
