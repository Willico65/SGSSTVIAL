import Container from '../components/ui/Container'
import PageHeader from '../components/shared/PageHeader'
import RecursoCard from '../components/shared/RecursoCard'
import VideoInstitucional from '../components/shared/VideoInstitucional'
import { recursos } from '../data/content'

// Carga todas las imágenes de src/assets/recursos como URLs que Vite puede servir.
const recursoImages = import.meta.glob('../assets/recursos/*.jpg', {
  eager: true,
  import: 'default',
}) as Record<string, string>

function resolveSrc(file: string) {
  const entry = Object.entries(recursoImages).find(([path]) => path.endsWith(file))
  return entry?.[1] ?? ''
}

export default function Resources() {
  return (
    <>
      <PageHeader
        eyebrow="Recursos"
        title="Material informativo de Sisstvial"
        lede="Piezas y videos que ya compartimos en nuestras redes, reunidas aquí para consulta rápida."
      />

      <section className="py-16">
        <Container>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {recursos.map((recurso) => (
              <RecursoCard key={recurso.id} recurso={recurso} src={resolveSrc(recurso.file)} />
            ))}
          </div>
        </Container>
      </section>

      <section className="border-t border-line bg-steel-soft/40 py-16">
        <Container className="grid items-center gap-10 lg:grid-cols-[1fr_auto]">
          <div>
            <h2 className="text-xl font-bold">Video institucional</h2>
            <p className="mt-3 max-w-md text-[15px] text-ink-soft">
              El mismo video que publicamos en Facebook, disponible aquí para quien prefiera verlo desde
              el sitio.
            </p>
          </div>
          <VideoInstitucional />
        </Container>
      </section>
    </>
  )
}
