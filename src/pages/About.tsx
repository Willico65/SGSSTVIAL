import Container from '../components/ui/Container'
import PageHeader from '../components/shared/PageHeader'
import Photo from '../components/shared/Photo'
import { photoSlots } from '../data/photoSlots'
import { company } from '../data/content'
import safework1Photo from '../assets/photos/safework-1.jpg'

export default function About() {
  return (
    <>
      <PageHeader
        eyebrow="Quiénes somos"
        title={`El equipo detrás de ${company.name}`}
        lede="Profesionales especializados en salud, seguridad en el trabajo y seguridad vial, al servicio de su organización."
      />

      <section className="py-16">
        <Container className="grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:items-center">
          <div className="flex flex-col gap-6">
            <div>
              <h2 className="text-xl font-bold">¿Quiénes somos?</h2>
              <p className="mt-3 text-[15px] leading-relaxed text-ink-soft">
                Somos profesionales especializados en las áreas de salud, seguridad en el trabajo y la
                seguridad vial, que unimos nuestros esfuerzos, capacidades, conocimientos y valores para
                ponerlos al servicio de su organización en el apoyo, asesoría y acompañamiento para el
                diseño, implementación y evaluación del sistema de gestión de la salud y seguridad en el
                trabajo y la seguridad vial, de acuerdo a las necesidades de su empresa.
              </p>
            </div>
            <div>
              <h2 className="text-xl font-bold">¿Qué hacemos?</h2>
              <p className="mt-3 text-[15px] leading-relaxed text-ink-soft">
                Comprometemos todos nuestros esfuerzos al mejoramiento continuo de los procesos
                organizacionales para la prestación de servicios en materia de salud, seguridad en el
                trabajo y seguridad vial, con personal competente y cualificado que permita satisfacer
                las necesidades de nuestros clientes.
              </p>
            </div>
          </div>

          <Photo slot={photoSlots.safework1} src={safework1Photo} />
        </Container>
      </section>

      <section className="border-t border-line bg-steel-soft/40 py-16">
        <Container>
          <h2 className="text-xl font-bold">Dónde trabajamos</h2>
          <p className="mt-3 max-w-2xl text-[15px] text-ink-soft">
            Atendemos empresas en {company.city} y el resto de {company.department}, tanto en sede como
            de forma itinerante para inspecciones de vehículos y capacitaciones en campo.
          </p>
        </Container>
      </section>
    </>
  )
}
