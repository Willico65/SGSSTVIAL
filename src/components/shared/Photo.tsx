import type { PhotoSlot } from '../../data/photoSlots'

const ratioClass: Record<PhotoSlot['ratio'], string> = {
  '16/9': 'aspect-[16/9]',
  '4/5': 'aspect-[4/5]',
  '4/3': 'aspect-[4/3]',
  '1/1': 'aspect-square',
}

export default function Photo({
  slot,
  src,
  className = '',
}: {
  slot: PhotoSlot
  src: string
  className?: string
}) {
  return (
    <div className={`relative ${ratioClass[slot.ratio]} w-full overflow-hidden rounded-xl ${className}`}>
      <img src={src} alt={slot.alt} className="h-full w-full object-cover" />
    </div>
  )
}
