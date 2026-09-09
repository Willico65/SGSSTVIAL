import Container from '../ui/Container'
import { ButtonLink } from '../ui/Button'
import { company } from '../../data/content'

export default function CTABand() {
  return (
    <section className="bg-ink py-14 text-paper">
      <Container className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
        <div>
          <h2 className="text-2xl font-bold">¿Su empresa está al día con el SG-SST y el PESV?</h2>
          <p className="mt-2 max-w-lg text-sm text-paper/70">
            Escríbanos y agendamos un primer diagnóstico sin compromiso, según las necesidades de su empresa.
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          <ButtonLink to={`mailto:${company.email}`} variant="primary">
            Escribir un correo
          </ButtonLink>
          <ButtonLink to="/contacto" variant="ghostDark">
            Ver datos de contacto
          </ButtonLink>
        </div>
      </Container>
    </section>
  )
}
