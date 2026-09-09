import { Link } from 'react-router-dom'
import Container from '../ui/Container'
import SectionHeading from '../ui/SectionHeading'

const axes = [
  {
    title: 'Seguridad y Salud en el Trabajo',
    tag: 'SG-SST',
    description: 'Seguridad industrial, higiene industrial y medicina preventiva y del trabajo.',
    to: '/servicios#sst',
  },
  {
    title: 'Seguridad Vial',
    tag: 'PESV',
    description: 'Plan Estratégico de Seguridad Vial, inspección y mantenimiento de vehículos, capacitación.',
    to: '/servicios#vial',
  },
  {
    title: 'Auditorías',
    tag: 'Cumplimiento',
    description: 'Verificación de cumplimiento normativo antes de una visita de ente de control o certificación.',
    to: '/servicios#auditorias',
  },
]

export default function ServiceAxes() {
  return (
    <section className="py-16">
      <Container>
        <SectionHeading
          eyebrow="Qué hacemos"
          title="Dos frentes, un mismo sistema de gestión"
          lede="Muchas empresas necesitan gestionar el riesgo laboral y el riesgo vial al mismo tiempo. En Sisstvial los tratamos como un solo sistema, no como dos servicios sueltos."
        />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {axes.map((axis) => (
            <Link
              key={axis.title}
              to={axis.to}
              className="group flex flex-col gap-3 rounded-xl border border-line bg-paper-raised p-6 shadow-card transition-transform hover:-translate-y-0.5"
            >
              <span className="w-fit rounded-full bg-accent-soft px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-accent">
                {axis.tag}
              </span>
              <h3 className="text-lg font-bold">{axis.title}</h3>
              <p className="text-sm text-ink-soft">{axis.description}</p>
              <span className="mt-auto text-sm font-semibold text-accent group-hover:underline">
                Ver detalle →
              </span>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  )
}
