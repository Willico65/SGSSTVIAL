import type { PhotoSlot } from '../../data/photoSlots'

const ratioClass: Record<PhotoSlot['ratio'], string> = {
  '16/9': 'aspect-[16/9]',
  '4/5': 'aspect-[4/5]',
  '4/3': 'aspect-[4/3]',
  '1/1': 'aspect-square',
}

/**
 * Marcador visual para una foto que todavía no existe.
 *
 * Una vez tengas el archivo real:
 *   import photo from '../../assets/photos/hero.jpg'
 *   <img src={photo} alt={photoSlots.hero.alt} className="h-full w-full object-cover" />
 * en lugar de este componente.
 */
export default function ImagePlaceholder({ slot, className = '' }: { slot: PhotoSlot; className?: string }) {
  return (
    <div
      className={`relative flex ${ratioClass[slot.ratio]} w-full flex-col justify-end overflow-hidden rounded-xl border border-dashed border-line bg-steel-soft ${className}`}
    >
      <svg
        className="absolute inset-0 h-full w-full text-line"
        preserveAspectRatio="none"
        viewBox="0 0 100 100"
        aria-hidden="true"
      >
        <line x1="0" y1="0" x2="100" y2="100" stroke="currentColor" strokeWidth="0.5" />
        <line x1="100" y1="0" x2="0" y2="100" stroke="currentColor" strokeWidth="0.5" />
      </svg>
      <div className="relative m-3 rounded-lg bg-paper-raised/95 p-3 text-[11px] leading-snug text-ink-soft shadow-card">
        <p className="font-semibold text-ink">Foto pendiente</p>
        <p>{slot.promptRef}</p>
        <p className="mt-1 text-[10px] text-steel">docs/PROMPTS_IMAGENES.md</p>
      </div>
    </div>
  )
}
