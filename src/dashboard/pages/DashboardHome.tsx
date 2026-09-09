import { Link } from 'react-router-dom'
import KpiCard from '../components/KpiCard'
import InspectionsTable from '../components/InspectionsTable'
import { CheckCircleIcon, ClockIcon, AlertTriangleIcon, PlusIcon } from '../components/icons'
import { mockKpis, mockInspections } from '../data/mockInspections'

export default function DashboardHome() {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-vial-text">Panel principal</h1>
          <p className="mt-1 text-sm text-slate-500">Resumen del cumplimiento del PESV y las inspecciones vehiculares.</p>
        </div>
        <Link
          to="/dashboard/inspecciones"
          className="inline-flex items-center gap-2 rounded-lg bg-vial-secondary px-5 py-3 text-sm font-semibold text-vial-text transition-colors hover:bg-amber-600 hover:text-white"
        >
          <PlusIcon className="h-4 w-4" />
          Nueva inspección
        </Link>
      </div>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        <KpiCard
          title="Cumplimiento total (PESV)"
          value={`${mockKpis.cumplimientoPesv}%`}
          variant="success"
          icon={<CheckCircleIcon />}
          progress={mockKpis.cumplimientoPesv}
        />
        <KpiCard
          title="Inspecciones pendientes"
          value={String(mockKpis.inspeccionesPendientes)}
          variant="warning"
          icon={<ClockIcon />}
        />
        <KpiCard
          title="Hallazgos críticos"
          value={String(mockKpis.hallazgosCriticos)}
          variant="danger"
          icon={<AlertTriangleIcon />}
        />
      </div>

      <div>
        <h2 className="mb-3 text-lg font-bold text-vial-text">Últimas inspecciones</h2>
        <InspectionsTable inspections={mockInspections.slice(0, 5)} />
      </div>
    </div>
  )
}
