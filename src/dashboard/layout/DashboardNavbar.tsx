import { NavLink } from 'react-router-dom'

const navItems = [
  { label: 'Inicio', to: '/dashboard', end: true },
  { label: 'Inspecciones', to: '/dashboard/inspecciones' },
  { label: 'Reportes', to: '/dashboard/reportes' },
  { label: 'Normatividad', to: '/dashboard/normatividad' },
  { label: 'Configuración', to: '/dashboard/configuracion' },
]

export default function DashboardNavbar() {
  return (
    <header className="border-b border-slate-200 bg-vial-surface">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-6 py-4">
        <span className="text-lg font-bold text-vial-primary">
          SGSST <span className="text-vial-text">Vial</span>
        </span>

        <nav className="flex flex-wrap gap-1">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.end}
              className={({ isActive }) =>
                `rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
                  isActive ? 'bg-vial-primary text-white' : 'text-slate-600 hover:bg-slate-100 hover:text-vial-text'
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  )
}
