import Container from '../components/ui/Container'
import { ButtonLink } from '../components/ui/Button'

export default function NotFound() {
  return (
    <section className="py-24">
      <Container className="flex flex-col items-center gap-4 text-center">
        <span className="eyebrow">404</span>
        <h1 className="text-3xl font-extrabold">Esta página no existe</h1>
        <p className="max-w-md text-ink-soft">
          Puede que el enlace esté mal escrito o que la página se haya movido.
        </p>
        <ButtonLink to="/">Volver al inicio</ButtonLink>
      </Container>
    </section>
  )
}
