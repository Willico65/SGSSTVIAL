import Container from '../ui/Container'
import { ButtonLink } from '../ui/Button'
import Photo from '../shared/Photo'
import { company } from '../../data/content'
import { photoSlots } from '../../data/photoSlots'
import heroPhoto from '../../assets/photos/hero.jpg'

export default function Hero() {
  return (
    <section className="border-b border-line bg-paper">
      <Container className="grid items-center gap-10 py-14 lg:grid-cols-[1.05fr_1fr] lg:py-20">
        <div className="flex flex-col gap-6">
          <span className="eyebrow">SG-SST &amp; Seguridad Vial · {company.city}, {company.department}</span>
          <h1 className="text-4xl font-extrabold leading-[1.08] sm:text-5xl">
            {company.legalDescription}
          </h1>
          <p className="max-w-xl text-base text-ink-soft">
            Diseñamos, implementamos y auditamos el sistema de gestión de seguridad y salud en el trabajo
            y el Plan Estratégico de Seguridad Vial de su empresa, con personal competente y de acuerdo
            a la normativa legal vigente.
          </p>
          <div className="flex flex-wrap gap-3">
            <ButtonLink to="/contacto">Solicitar asesoría</ButtonLink>
            <ButtonLink to="/servicios" variant="ghost">
              Ver servicios
            </ButtonLink>
          </div>
          <p className="text-sm text-ink-soft">
            <span className="font-semibold text-ink">"{company.tagline}."</span>
          </p>
        </div>

        <Photo slot={photoSlots.hero} src={heroPhoto} />
      </Container>
    </section>
  )
}
