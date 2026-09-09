import { Link } from 'react-router-dom'
import Container from '../ui/Container'
import { company, nav } from '../../data/content'
import logo from '../../assets/logo.jpeg'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-line bg-ink text-paper">
      <Container className="grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-3">
            <img src={logo} alt={`Logo de ${company.name}`} className="h-10 w-10 rounded-full object-cover" />
            <span className="font-display text-base font-extrabold">{company.name.toUpperCase()}</span>
          </div>
          <p className="max-w-xs text-sm text-paper/70">{company.legalDescription}</p>
        </div>

        <div className="flex flex-col gap-2">
          <span className="mb-1 text-[11px] font-bold uppercase tracking-wide text-paper/50">Navegación</span>
          {nav.map((item) => (
            <Link key={item.to} to={item.to} className="text-sm text-paper/80 hover:text-accent">
              {item.label}
            </Link>
          ))}
        </div>

        <div className="flex flex-col gap-2">
          <span className="mb-1 text-[11px] font-bold uppercase tracking-wide text-paper/50">Contacto</span>
          <a href={`mailto:${company.email}`} className="text-sm text-paper/80 hover:text-accent">
            {company.email}
          </a>
          {company.phones.map((phone) => (
            <a key={phone} href={`tel:+57${phone.replace(/\s/g, '')}`} className="text-sm text-paper/80 hover:text-accent">
              {phone}
            </a>
          ))}
          <span className="text-sm text-paper/80">
            {company.city}, {company.department} — {company.country}
          </span>
        </div>

        <div className="flex flex-col gap-2">
          <span className="mb-1 text-[11px] font-bold uppercase tracking-wide text-paper/50">Síguenos</span>
          <a
            href={company.facebookUrl}
            target="_blank"
            rel="noreferrer"
            className="text-sm text-paper/80 hover:text-accent"
          >
            Facebook
          </a>
        </div>
      </Container>

      <div className="border-t border-paper/10">
        <Container className="flex flex-col gap-2 py-5 text-xs text-paper/50 sm:flex-row sm:items-center sm:justify-between">
          <span>
            © {year} {company.name}. Sitio informativo — no realiza transacciones en línea.
          </span>
          <span>Duitama, Boyacá, Colombia</span>
        </Container>
      </div>
    </footer>
  )
}
