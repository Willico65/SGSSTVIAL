import InspectionsTable from '../components/InspectionsTable'
import { PlusIcon } from '../components/icons'
import { mockInspections } from '../data/mockInspections'

export default function Inspecciones() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-vial-text">Inspecciones</h1>
          <p className="mt-1 text-sm text-slate-500">Registro de inspecciones vehiculares y su estado.</p>
        </div>
        <button className="inline-flex items-center gap-2 rounded-lg bg-vial-secondary px-5 py-3 text-sm font-semibold text-vial-text transition-colors hover:bg-amber-600 hover:text-white">
          <PlusIcon className="h-4 w-4" />
          Nueva inspección
        </button>
      </div>

      <InspectionsTable inspections={mockInspections} />
    </div>
  )
}
