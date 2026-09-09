import { Route, Routes } from 'react-router-dom'
import Layout from './components/layout/Layout'
import ScrollManager from './components/shared/ScrollManager'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Methodology from './pages/Methodology'
import Resources from './pages/Resources'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'

export default function App() {
  return (
    <Layout>
      <ScrollManager />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/nosotros" element={<About />} />
        <Route path="/servicios" element={<Services />} />
        <Route path="/metodologia" element={<Methodology />} />
        <Route path="/recursos" element={<Resources />} />
        <Route path="/contacto" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  )
}
