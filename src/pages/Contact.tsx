import Container from '../components/ui/Container'
import PageHeader from '../components/shared/PageHeader'
import ContactForm from '../components/contact/ContactForm'
import { company } from '../data/content'

export default function Contact() {
  return (
    <>
      <PageHeader
        eyebrow="Contacto"
        title="Hablemos de la seguridad de su empresa"
        lede="Escríbanos por teléfono, correo, redes sociales o el formulario a continuación — sin pasarelas de pago."
      />

      <section className="py-16">
        <Container className="grid gap-10 lg:grid-cols-2">
          <div className="flex flex-col gap-6 rounded-xl border border-line bg-paper-raised p-8 shadow-card">
            <div>
              <span className="eyebrow">Correo</span>
              <a href={`mailto:${company.email}`} className="mt-1 block text-lg font-bold text-ink hover:text-accent">
                {company.email}
              </a>
            </div>

            <div>
              <span className="eyebrow">Teléfonos</span>
              <div className="mt-1 flex flex-col gap-1">
                {company.phones.map((phone) => (
                  <a
                    key={phone}
                    href={`tel:+57${phone.replace(/\s/g, '')}`}
                    className="text-lg font-bold text-ink hover:text-accent"
                  >
                    {phone}
                  </a>
                ))}
              </div>
            </div>

            <div>
              <span className="eyebrow">Ubicación</span>
              <p className="mt-1 text-lg font-bold text-ink">
                {company.city}, {company.department} — {company.country}
              </p>
            </div>

            <div>
              <span className="eyebrow">Redes</span>
              <a
                href={company.facebookUrl}
                target="_blank"
                rel="noreferrer"
                className="mt-1 block text-lg font-bold text-ink hover:text-accent"
              >
                Facebook: Sisstvial
              </a>
            </div>
          </div>

          <div className="overflow-hidden rounded-xl border border-line shadow-card">
            <iframe
              title={`Mapa de ubicación de ${company.name} en ${company.city}`}
              src="https://www.google.com/maps?q=Duitama,+Boyac%C3%A1,+Colombia&output=embed"
              className="h-full min-h-[360px] w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </Container>
      </section>

      <section className="border-t border-line bg-steel-soft/40 py-16">
        <Container>
          <ContactForm />
        </Container>
      </section>
    </>
  )
}
