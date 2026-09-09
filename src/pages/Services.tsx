import Container from '../components/ui/Container'
import PageHeader from '../components/shared/PageHeader'
import ServiceGroupCard from '../components/shared/ServiceGroupCard'
import Photo from '../components/shared/Photo'
import { photoSlots } from '../data/photoSlots'
import { sstServiceGroups, vialServiceGroups, auditServiceGroup } from '../data/content'
import training1Photo from '../assets/photos/training-1.jpg'
import safework1Photo from '../assets/photos/safework-1.jpg'
import roadFlaggerPhoto from '../assets/photos/road-flagger.jpg'
import roadTruckPhoto from '../assets/photos/road-truck.jpg'
import roadConesPhoto from '../assets/photos/road-cones.jpg'
import roadDronePhoto from '../assets/photos/road-drone.jpg'

export default function Services() {
  return (
    <>
      <PageHeader
        eyebrow="Servicios"
        title="Servicios profesionales que ofrecemos"
        lede="Sistemas de gestión SST, auditorías, PESV, mediciones ambientales, salud ocupacional, higiene y seguridad industrial, medicina preventiva y seguridad vial."
      />

      <section id="sst" className="scroll-mt-20 py-16">
        <Container>
          <div className="mb-10 flex flex-col gap-2">
            <span className="eyebrow">Eje 1</span>
            <h2 className="text-2xl font-bold sm:text-3xl">Seguridad y Salud en el Trabajo</h2>
            <p className="max-w-2xl text-[15px] text-ink-soft">
              Seguridad industrial, higiene industrial y medicina preventiva y del trabajo, integradas en
              un solo sistema de gestión.
            </p>
          </div>
          <div className="grid gap-5 lg:grid-cols-3">
            {sstServiceGroups.map((group) => (
              <ServiceGroupCard key={group.id} group={group} />
            ))}
          </div>
        </Container>
      </section>

      <section className="border-y border-line bg-steel-soft/40 py-12">
        <Container className="grid gap-8 lg:grid-cols-2">
          <Photo slot={photoSlots.training1} src={training1Photo} />
          <Photo slot={photoSlots.safework1} src={safework1Photo} />
        </Container>
      </section>

      <section id="vial" className="scroll-mt-20 py-16">
        <Container>
          <div className="mb-10 flex flex-col gap-2">
            <span className="eyebrow">Eje 2</span>
            <h2 className="text-2xl font-bold sm:text-3xl">Seguridad Vial</h2>
            <p className="max-w-2xl text-[15px] text-ink-soft">
              Plan Estratégico de Seguridad Vial, inspección y mantenimiento de vehículos, y capacitación
              vial para empresas con flota o personal que se desplaza por motivo laboral.
            </p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            {vialServiceGroups.map((group) => (
              <ServiceGroupCard key={group.id} group={group} />
            ))}
          </div>
        </Container>
      </section>

      <section className="border-y border-line bg-steel-soft/40 py-12">
        <Container>
          <div className="mb-8 flex flex-col gap-2">
            <span className="eyebrow">En la vía</span>
            <h2 className="text-xl font-bold">Señalización y control de tránsito en obra</h2>
          </div>
          <div className="grid gap-5 sm:grid-cols-3">
            <Photo slot={photoSlots.roadFlagger} src={roadFlaggerPhoto} />
            <Photo slot={photoSlots.roadTruck} src={roadTruckPhoto} />
            <Photo slot={photoSlots.roadCones} src={roadConesPhoto} />
          </div>
          <div className="mt-5">
            <Photo slot={photoSlots.roadDrone} src={roadDronePhoto} />
          </div>
        </Container>
      </section>

      <section id="auditorias" className="scroll-mt-20 py-16">
        <Container>
          <div className="mb-10 flex flex-col gap-2">
            <span className="eyebrow">Eje 3</span>
            <h2 className="text-2xl font-bold sm:text-3xl">Auditorías</h2>
            <p className="max-w-2xl text-[15px] text-ink-soft">
              Auditorías internas de cumplimiento normativo, antes de una visita de un ente de control o
              de un proceso de certificación.
            </p>
          </div>
          <div className="max-w-2xl">
            <ServiceGroupCard group={auditServiceGroup} />
          </div>
        </Container>
      </section>
    </>
  )
}
