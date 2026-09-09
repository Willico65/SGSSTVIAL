import Container from '../ui/Container'

export default function PageHeader({
  eyebrow,
  title,
  lede,
}: {
  eyebrow: string
  title: string
  lede?: string
}) {
  return (
    <section className="border-b border-line bg-steel-soft/40 py-14">
      <Container className="flex flex-col gap-3">
        <span className="eyebrow">{eyebrow}</span>
        <h1 className="max-w-2xl text-3xl font-extrabold sm:text-4xl">{title}</h1>
        {lede && <p className="max-w-2xl text-[15px] text-ink-soft">{lede}</p>}
      </Container>
    </section>
  )
}
