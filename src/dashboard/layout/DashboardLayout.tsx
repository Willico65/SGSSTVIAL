import { Outlet } from 'react-router-dom'
import DashboardNavbar from './DashboardNavbar'

export default function DashboardLayout() {
  return (
    <div className="min-h-screen bg-vial-bg font-body text-vial-text">
      <DashboardNavbar />
      <main className="mx-auto max-w-6xl px-6 py-8">
        <Outlet />
      </main>
    </div>
  )
}
