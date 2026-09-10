// Datos de ejemplo (mock) — el panel /dashboard todavía no tiene backend ni
// base de datos real de inspecciones. Reemplazar por una llamada a la API
// real cuando exista.

export type InspectionStatus = 'Aprobado' | 'Con Observaciones' | 'Rechazado'

export type Inspection = {
  id: string
  vehicleDriver: string
  date: string
  type: string
  status: InspectionStatus
}

export const mockKpis = {
  cumplimientoPesv: 92,
  inspeccionesPendientes: 7,
  hallazgosCriticos: 3,
}

export const mockInspections: Inspection[] = [
  { id: 'INS-1042', vehicleDriver: 'Camión NPR — Carlos Gómez', date: '2026-09-02', type: 'Inspección preoperacional', status: 'Aprobado' },
  { id: 'INS-1041', vehicleDriver: 'Van Traffic — Laura Pérez', date: '2026-09-02', type: 'Preventiva bimensual', status: 'Con Observaciones' },
  { id: 'INS-1040', vehicleDriver: 'Tractocamión — Andrés Rojas', date: '2026-09-01', type: 'Inspección preoperacional', status: 'Rechazado' },
  { id: 'INS-1039', vehicleDriver: 'Camioneta Dmax — María Torres', date: '2026-08-31', type: 'Alistamiento técnico-mecánica', status: 'Aprobado' },
  { id: 'INS-1038', vehicleDriver: 'Buseta — Jorge Ramírez', date: '2026-08-30', type: 'Preventiva bimensual', status: 'Aprobado' },
  { id: 'INS-1037', vehicleDriver: 'Camión 350 — Diego Salas', date: '2026-08-29', type: 'Inspección preoperacional', status: 'Con Observaciones' },
  { id: 'INS-1036', vehicleDriver: 'Van Sprinter — Paula Nieto', date: '2026-08-28', type: 'Inspección preoperacional', status: 'Aprobado' },
  { id: 'INS-1035', vehicleDriver: 'Tractocamión — Felipe Cruz', date: '2026-08-27', type: 'Preventiva bimensual', status: 'Rechazado' },
]
