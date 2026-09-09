import Container from '../ui/Container'
import SectionHeading from '../ui/SectionHeading'
import Photo from '../shared/Photo'
import { photoSlots } from '../../data/photoSlots'
import team1Photo from '../../assets/photos/team-1.jpg'
import team2Photo from '../../assets/photos/team-2.jpg'
import team3Photo from '../../assets/photos/team-3.jpg'

const reasons = [
  {
    title: 'Un solo interlocutor',
    description: 'SG-SST y PESV gestionados por el mismo equipo, con una sola matriz de seguimiento.',
  },
  {
    title: 'Normativa al día',
    description: 'Decreto 1072 de 2015, Resolución 0312 de 2019 y Resolución 40595 de 2022, entre otras.',
  },
  {
    title: 'Capacitación aplicada',
    description: 'Formación práctica para el puesto de trabajo y para la vía, no solo teoría.',
  },
  {
    title: 'Auditoría antes que la sanción',
    description: 'Revisamos el cumplimiento antes de que lo haga el ente de control.',
  },
]

export default function WhySisstvial() {
  return (
    <section className="border-y border-line bg-steel-soft/40 py-16">
      <Container className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-center">
        <div className="grid grid-cols-3 gap-3">
          <Photo slot={photoSlots.team1} src={team1Photo} />
          <Photo slot={photoSlots.team2} src={team2Photo} className="mt-6" />
          <Photo slot={photoSlots.team3} src={team3Photo} />
        </div>

        <div>
          <SectionHeading
            eyebrow="Por qué Sisstvial"
            title="Equipo profesional para la salud, la seguridad y la vía"
            lede="Profesionales especializados en salud, seguridad en el trabajo y seguridad vial, al servicio del diseño, implementación y evaluación del sistema de gestión de su empresa."
          />
          <dl className="grid gap-5 sm:grid-cols-2">
            {reasons.map((reason) => (
              <div key={reason.title}>
                <dt className="text-sm font-bold">{reason.title}</dt>
                <dd className="mt-1 text-sm text-ink-soft">{reason.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </Container>
    </section>
  )
}
