import type { Recurso } from '../../data/content'

const categoryClass: Record<Recurso['category'], string> = {
  'SG-SST': 'bg-accent-soft text-accent',
  'Seguridad Vial': 'bg-gold-soft text-gold',
  Bienestar: 'bg-steel-soft text-steel',
}

export default function RecursoCard({ recurso, src }: { recurso: Recurso; src: string }) {
  return (
    <figure className="flex flex-col overflow-hidden rounded-xl border border-line bg-paper-raised shadow-card">
      <img src={src} alt={recurso.title} className="aspect-square w-full object-cover" loading="lazy" />
      <figcaption className="flex flex-1 flex-col gap-2 p-4">
        <span className={`w-fit rounded-full px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide ${categoryClass[recurso.category]}`}>
          {recurso.category}
        </span>
        <p className="text-sm font-semibold leading-snug">{recurso.title}</p>
      </figcaption>
    </figure>
  )
}
