import video from '../../assets/video/institucional.mp4'
import { company } from '../../data/content'

/**
 * Video real publicado en la página de Facebook de Sisstvial (12 de marzo de 2025).
 * Es vertical (formato para redes), por eso el contenedor lo respeta en vez de
 * forzarlo a un recorte horizontal.
 */
export default function VideoInstitucional() {
  return (
    <div className="mx-auto aspect-[9/16] w-full max-w-[280px] overflow-hidden rounded-2xl border border-line bg-ink shadow-card">
      <video
        src={video}
        controls
        playsInline
        preload="metadata"
        className="h-full w-full object-cover"
        aria-label={`Video institucional de ${company.name}`}
      />
    </div>
  )
}
