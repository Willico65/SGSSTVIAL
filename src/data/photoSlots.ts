// Huecos fotográficos reales que el sitio necesita. Cada slot referencia un
// prompt fotorrealista documentado en docs/PROMPTS_IMAGENES.md que sirvió de
// brief para la foto final guardada en src/assets/photos/<id>.jpg.
//
// Si se necesita agregar un slot nuevo sin foto todavía, usa
// `ready: false` y el componente <ImagePlaceholder> para mostrar un
// marcador con la proporción correcta mientras se consigue la imagen.

export type PhotoSlot = {
  id: string
  ratio: '16/9' | '4/5' | '4/3' | '1/1'
  alt: string
  promptRef: string
  ready: boolean
}

export const photoSlots: Record<string, PhotoSlot> = {
  hero: {
    id: 'hero',
    ratio: '16/9',
    alt: 'Operador de tránsito dirigiendo el paso de vehículos en una vía en obra, con espacio para titular y CTA',
    promptRef: 'PROMPT 1 — Hero 16:9',
    ready: true,
  },
  team1: {
    id: 'team-1',
    ratio: '4/5',
    alt: 'Retrato de profesional de SST con casco y chaleco reflectivo',
    promptRef: 'PROMPT 2 — Retrato equipo (líder SST)',
    ready: true,
  },
  team2: {
    id: 'team-2',
    ratio: '4/5',
    alt: 'Retrato de inspectora de seguridad vial con chaleco y tablero de inspección',
    promptRef: 'PROMPT 3 — Retrato equipo (inspectora vial)',
    ready: true,
  },
  team3: {
    id: 'team-3',
    ratio: '4/5',
    alt: 'Retrato de técnico de higiene industrial con EPP completo',
    promptRef: 'PROMPT 4 — Retrato equipo (técnico HSE)',
    ready: true,
  },
  training1: {
    id: 'training-1',
    ratio: '4/3',
    alt: 'Capacitación de inducción en SST con EPP a un grupo de trabajadores',
    promptRef: 'PROMPT 5 — Escena de capacitación',
    ready: true,
  },
  safework1: {
    id: 'safework-1',
    ratio: '4/3',
    alt: 'Inspección de elementos de protección personal antes del ingreso a planta',
    promptRef: 'PROMPT 6 — Escena de trabajo seguro',
    ready: true,
  },
  roadFlagger: {
    id: 'road-flagger',
    ratio: '4/3',
    alt: 'Señalizador vial con paleta PARE/SIGA dirigiendo el tránsito en una obra',
    promptRef: 'PROMPT 7 — Señalizador vial',
    ready: true,
  },
  roadTruck: {
    id: 'road-truck',
    ratio: '4/3',
    alt: 'Camión con flecha direccional (TMA) protegiendo una zona de trabajo en la vía',
    promptRef: 'PROMPT 8 — Camión con flecha',
    ready: true,
  },
  roadCones: {
    id: 'road-cones',
    ratio: '4/3',
    alt: 'Conos y señalización reflectiva delimitando una zona de trabajo vial',
    promptRef: 'PROMPT 9 — Conos y señalización',
    ready: true,
  },
  roadDrone: {
    id: 'road-drone',
    ratio: '16/9',
    alt: 'Vista aérea de dron de una zona de obra vial con señalización y maquinaria',
    promptRef: 'PROMPT 10 — Vista de dron',
    ready: true,
  },
}
