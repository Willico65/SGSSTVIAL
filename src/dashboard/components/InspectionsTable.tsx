import type { Inspection } from '../data/mockInspections'
import StatusBadge from './StatusBadge'

const th = 'px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-slate-500'
const td = 'px-4 py-3 text-sm text-vial-text'

export default function InspectionsTable({ inspections }: { inspections: Inspection[] }) {
  return (
    <div className="overflow-hidden rounded-lg bg-vial-surface shadow-sm">
      <div className="overflow-x-auto">
        <table className="w-full min-w-[640px] border-collapse">
          <thead>
            <tr className="border-b border-slate-200">
              <th className={th}>Vehículo / Conductor</th>
              <th className={th}>Fecha</th>
              <th className={th}>Tipo de inspección</th>
              <th className={th}>Estado</th>
              <th className={`${th} text-right`}>Acciones</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {inspections.map((inspection) => (
              <tr key={inspection.id} className="hover:bg-slate-50">
                <td className={`${td} font-medium`}>{inspection.vehicleDriver}</td>
                <td className={td}>{inspection.date}</td>
                <td className={td}>{inspection.type}</td>
                <td className={td}>
                  <StatusBadge status={inspection.status} />
                </td>
                <td className={`${td} text-right`}>
                  <div className="flex justify-end gap-2">
                    <button className="rounded-md border border-slate-300 px-3 py-1.5 text-xs font-semibold text-slate-700 transition-colors hover:bg-slate-50">
                      Ver detalle
                    </button>
                    <button className="rounded-md border border-slate-300 px-3 py-1.5 text-xs font-semibold text-slate-700 transition-colors hover:bg-slate-50">
                      Programar
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
