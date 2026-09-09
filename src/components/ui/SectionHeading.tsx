type Props = {
  eyebrow?: string
  title: string
  lede?: string
  align?: 'left' | 'center'
}

export default function SectionHeading({ eyebrow, title, lede, align = 'left' }: Props) {
  const alignment = align === 'center' ? 'text-center items-center' : 'text-left items-start'

  return (
    <div className={`mb-10 flex flex-col gap-3 ${alignment}`}>
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <h2 className="text-2xl font-bold sm:text-3xl">{title}</h2>
      {lede && <p className="max-w-2xl text-[15px] text-ink-soft">{lede}</p>}
    </div>
  )
}
