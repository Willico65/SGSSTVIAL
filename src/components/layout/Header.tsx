import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import Container from '../ui/Container'
import { ButtonLink } from '../ui/Button'
import { company, nav } from '../../data/content'
import logo from '../../assets/logo.jpeg'

export default function Header() {
  const [open, setOpen] = useState(false)

  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `text-sm font-semibold transition-colors ${isActive ? 'text-accent' : 'text-ink hover:text-accent'}`

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-paper/95 backdrop-blur">
      <Container className="flex h-20 items-center justify-between">
        <NavLink to="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <img src={logo} alt={`Logo de ${company.name}`} className="h-12 w-12 rounded-full object-cover" />
          <span className="flex flex-col leading-tight">
            <span className="font-display text-lg font-extrabold tracking-tight">{company.name.toUpperCase()}</span>
            <span className="text-[11px] font-semibold uppercase tracking-wide text-steel">SG-SST &amp; Seguridad Vial</span>
          </span>
        </NavLink>

        <nav className="hidden items-center gap-8 lg:flex">
          {nav.map((item) => (
            <NavLink key={item.to} to={item.to} className={linkClass} end={item.to === '/'}>
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden lg:block">
          <ButtonLink to="/contacto">Solicitar asesoría</ButtonLink>
        </div>

        <button
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-line lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Abrir menú"
          aria-expanded={open}
        >
          <span className="sr-only">Menú</span>
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
            <path d="M2 5h16M2 10h16M2 15h16" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
          </svg>
        </button>
      </Container>

      {open && (
        <div className="border-t border-line bg-paper lg:hidden">
          <Container className="flex flex-col gap-1 py-4">
            {nav.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === '/'}
                className={({ isActive }) =>
                  `rounded-lg px-3 py-2.5 text-sm font-semibold ${isActive ? 'bg-accent-soft text-accent' : 'text-ink'}`
                }
                onClick={() => setOpen(false)}
              >
                {item.label}
              </NavLink>
            ))}
            <ButtonLink to="/contacto" className="mt-2" onClick={() => setOpen(false)}>
              Solicitar asesoría
            </ButtonLink>
          </Container>
        </div>
      )}
    </header>
  )
}
