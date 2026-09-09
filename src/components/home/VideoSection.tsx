import Container from '../ui/Container'
import SectionHeading from '../ui/SectionHeading'
import VideoInstitucional from '../shared/VideoInstitucional'
import { company } from '../../data/content'

export default function VideoSection() {
  return (
    <section className="py-16">
      <Container className="grid items-center gap-10 lg:grid-cols-[1fr_auto]">
        <div>
          <SectionHeading
            eyebrow="Conócenos"
            title="Un mensaje directo del equipo de Sisstvial"
            lede={`"${company.taglineAlt}." Así presentamos nuestro trabajo a las empresas que confían la salud y seguridad de su equipo en manos de Sisstvial.`}
          />
          <p className="max-w-md text-sm text-ink-soft">
            Video publicado originalmente en nuestra página de Facebook. Puedes escribirnos por
            cualquiera de nuestros canales de contacto si tienes preguntas después de verlo.
          </p>
        </div>
        <VideoInstitucional />
      </Container>
    </section>
  )
}
