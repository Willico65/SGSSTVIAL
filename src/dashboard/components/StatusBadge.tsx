import type { InspectionStatus } from '../data/mockInspections'

// Fondo claro + texto oscuro del mismo tono en los tres casos: cumple
// WCAG AA (4.5:1) sin depender del color saturado (500) como fondo de texto.
const styles: Record<InspectionStatus, string> = {
  Aprobado: 'bg-emerald-100 text-emerald-800',
  'Con Observaciones': 'bg-amber-100 text-amber-800',
  Rechazado: 'bg-red-100 text-red-800',
}

export default function StatusBadge({ status }: { status: InspectionStatus }) {
  return (
    <span className={`inline-flex items-center rounded-full px-2.5 py-1 text-xs font-semibold ${styles[status]}`}>
      {status}
    </span>
  )
}
