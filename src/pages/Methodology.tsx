import Container from '../components/ui/Container'
import PageHeader from '../components/shared/PageHeader'
import { methodologySteps } from '../data/content'

export default function Methodology() {
  return (
    <>
      <PageHeader
        eyebrow="Metodología"
        title="Un proceso claro, de diagnóstico a mejora continua"
        lede="Cuatro etapas que aplicamos tanto al sistema de gestión de SST como al Plan Estratégico de Seguridad Vial."
      />

      <section className="py-16">
        <Container>
          <ol className="grid gap-6 lg:grid-cols-4">
            {methodologySteps.map((step, index) => (
              <li key={step.step} className="relative flex flex-col gap-3 rounded-xl border border-line bg-paper-raised p-6 shadow-card">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-accent text-sm font-extrabold text-white">
                  {step.step}
                </span>
                <h3 className="text-base font-bold">{step.title}</h3>
                <p className="text-sm text-ink-soft">{step.description}</p>
                {index < methodologySteps.length - 1 && (
                  <span className="absolute right-[-14px] top-1/2 hidden -translate-y-1/2 text-line lg:block" aria-hidden="true">
                    →
                  </span>
                )}
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <section className="border-t border-line bg-steel-soft/40 py-16">
        <Container className="max-w-2xl">
          <h2 className="text-xl font-bold">Seguimiento, no solo entrega</h2>
          <p className="mt-3 text-[15px] leading-relaxed text-ink-soft">
            No entregamos un documento y nos vamos: cada sistema de gestión que implementamos queda con
            indicadores de seguimiento, para que la mejora continua sea parte del día a día de su
            empresa y no un ejercicio de una sola vez al año.
          </p>
        </Container>
      </section>
    </>
  )
}
