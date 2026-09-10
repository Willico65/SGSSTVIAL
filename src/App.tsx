import { Outlet, Route, Routes } from 'react-router-dom'
import Layout from './components/layout/Layout'
import ScrollManager from './components/shared/ScrollManager'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Methodology from './pages/Methodology'
import Resources from './pages/Resources'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'
import DashboardLayout from './dashboard/layout/DashboardLayout'
import DashboardHome from './dashboard/pages/DashboardHome'
import Inspecciones from './dashboard/pages/Inspecciones'
import Reportes from './dashboard/pages/Reportes'
import Normatividad from './dashboard/pages/Normatividad'
import Configuracion from './dashboard/pages/Configuracion'

function PublicSite() {
  return (
    <Layout>
      <Outlet />
    </Layout>
  )
}

export default function App() {
  return (
    <>
      <ScrollManager />
      <Routes>
        <Route element={<PublicSite />}>
          <Route path="/" element={<Home />} />
          <Route path="/nosotros" element={<About />} />
          <Route path="/servicios" element={<Services />} />
          <Route path="/metodologia" element={<Methodology />} />
          <Route path="/recursos" element={<Resources />} />
          <Route path="/contacto" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Route>

        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route index element={<DashboardHome />} />
          <Route path="inspecciones" element={<Inspecciones />} />
          <Route path="reportes" element={<Reportes />} />
          <Route path="normatividad" element={<Normatividad />} />
          <Route path="configuracion" element={<Configuracion />} />
        </Route>
      </Routes>
    </>
  )
}
