// Contenido real de la empresa, extraído de:
// - PORTAFOLIO SISSTVIAL FINAL.pdf
// - Página de Facebook (facebook.com/share/19T5qzdqa3/)
// - Las 12 piezas gráficas (Imagen1-12) publicadas en redes
//
// Editar este archivo es la forma más rápida de actualizar los textos del sitio
// sin tocar los componentes.

export const company = {
  name: 'Sisstvial',
  legalDescription:
    'Sistema de Gestión, Seguridad y Salud en el Trabajo y Seguridad Vial',
  tagline: 'La salud y seguridad de su empresa en buenas manos',
  taglineAlt: 'Tu seguridad en nuestras manos',
  city: 'Duitama',
  department: 'Boyacá',
  country: 'Colombia',
  email: 'sisstvial@gmail.com',
  phones: ['321 4578756', '312 3763805'],
  facebookUrl: 'https://www.facebook.com/share/19T5qzdqa3/',
}

export const nav = [
  { label: 'Inicio', to: '/' },
  { label: 'Quiénes somos', to: '/nosotros' },
  { label: 'Servicios', to: '/servicios' },
  { label: 'Metodología', to: '/metodologia' },
  { label: 'Recursos', to: '/recursos' },
  { label: 'Contacto', to: '/contacto' },
]

export type ServiceGroup = {
  id: string
  title: string
  summary: string
  items: string[]
}

// Eje 1 — Seguridad y Salud en el Trabajo (PDF, páginas 6-9)
export const sstServiceGroups: ServiceGroup[] = [
  {
    id: 'seguridad-industrial',
    title: 'Seguridad Industrial',
    summary:
      'Identificación, control y documentación del riesgo laboral en el día a día operativo.',
    items: [
      'Identificación y control de riesgos',
      'Uso de Elementos de Protección Personal (EPP)',
      'Jerarquización del riesgo',
      'Investigación de accidentes',
      'Prevención de enfermedades laborales',
      'Elaboración y/o actualización de la matriz de riesgo (GTC-45)',
      'Elaboración y/o actualización de la matriz legal',
      "Elaboración del programa de 5'S",
    ],
  },
  {
    id: 'higiene-industrial',
    title: 'Higiene Industrial',
    summary: 'Condiciones físicas del entorno de trabajo y comportamiento seguro.',
    items: [
      'Ambientes seguros de trabajo',
      'Seguridad basada en el comportamiento',
      'Tareas de alto riesgo',
      'Señalización',
      'Estudios de iluminación',
      'Estudios de ruido',
      'Inspecciones de puestos de trabajo',
    ],
  },
  {
    id: 'medicina-preventiva',
    title: 'Medicina Preventiva y del Trabajo',
    summary: 'Vigilancia epidemiológica y bienestar del colaborador, dentro y fuera del puesto de trabajo.',
    items: [
      'Análisis de puestos de trabajo (APT) con énfasis en riesgo psicosocial',
      'Programas de promoción y prevención de la salud',
      'Aplicación de batería de riesgo psicosocial',
      'Sistemas de vigilancia epidemiológica: musculoesquelético, visual, respiratorio, psicosocial y cardiovascular',
      'Estilos de vida saludable y prevención de la fatiga',
      'Higiene del sueño y manejo de la salud mental',
      'Pausas cognitivas y desconexión laboral',
    ],
  },
]

// Eje 2 — Seguridad Vial (PDF, páginas 10-14)
export const vialServiceGroups: ServiceGroup[] = [
  {
    id: 'pesv',
    title: 'Plan Estratégico de Seguridad Vial (PESV)',
    summary: 'Diseño e implementación del PESV bajo la Resolución 40595 de 2022.',
    items: [
      'Transición a la Resolución 40595 de 2022',
      'Diagnóstico y actualización del PESV',
      'Programas de gestión de riesgos críticos',
      'Programas de mantenimiento',
    ],
  },
  {
    id: 'inspeccion-vehiculos',
    title: 'Inspección de Vehículos',
    summary: 'Inspecciones preventivas y preoperacionales conforme a la normativa de transporte.',
    items: [
      'Inspecciones preventivas visuales a vehículos',
      'Inspecciones preventivas bimensuales para vehículos de servicio público (Res. 315/2013 y 6184/2018, bajo NTC 5375/2012)',
      'Inspección preoperacional',
      'Alistamiento de vehículos para la revisión técnico-mecánica',
    ],
  },
  {
    id: 'mantenimiento-vehiculos',
    title: 'Mantenimiento de Vehículos',
    summary: 'Mantenimiento preventivo periódico con trazabilidad documental.',
    items: [
      'Mantenimiento preventivo bimensual mínimo, según normatividad vigente',
      'Ficha de mantenimiento por vehículo',
    ],
  },
  {
    id: 'capacitacion-vial',
    title: 'Capacitación Vial',
    summary: 'Formación práctica para conductores y personal que se desplaza por motivo laboral.',
    items: [
      'Seguridad vial y manejo defensivo',
      'Plan Estratégico de Seguridad Vial',
      'Prevención de la fatiga al conducir (ergonomía, higiene del sueño)',
      'Elementos de protección personal y equipo de carretera',
      'Señalización y demarcación vial',
      'Seguridad activa y pasiva del vehículo',
      'Revisión técnico-mecánica e inspecciones de vehículos',
      'Investigación de accidentes viales',
      'Respuesta a accidentes, emergencias, recuperación y rehabilitación',
      'Normatividad legal vigente',
    ],
  },
]

export const auditServiceGroup: ServiceGroup = {
  id: 'auditorias',
  title: 'Auditorías',
  summary: 'Auditorías internas de cumplimiento normativo, previas a una visita de ente de control o certificación.',
  items: [
    'SG-SST: Decreto 1072 de 2015 y Resolución 0312 de 2019',
    'Registro Único de Contratistas (RUC) — Guía RUC del CCS',
    'Normas ISO certificables: ISO 9001:2015, ISO 45001:2018, ISO 14001:2015, ISO 39001:2012',
    'Plan Estratégico de Seguridad Vial (PESV) — Resolución 40595 de 2022',
  ],
}

export const methodologySteps = [
  {
    step: '01',
    title: 'Diagnóstico',
    description:
      'Levantamiento del estado actual: matriz de riesgos, cumplimiento legal y condición de la flota, cuando aplica.',
  },
  {
    step: '02',
    title: 'Diseño e implementación',
    description:
      'Documentos, procedimientos y planes de acción a la medida de la empresa — SG-SST, PESV o ambos.',
  },
  {
    step: '03',
    title: 'Capacitación',
    description:
      'Formación al equipo y a los conductores, con contenidos prácticos y aplicables al puesto de trabajo o a la vía.',
  },
  {
    step: '04',
    title: 'Auditoría y seguimiento',
    description:
      'Verificación de cumplimiento e indicadores de mejora continua, antes de que llegue el ente de control.',
  },
]

export type Recurso = {
  id: number
  file: string
  title: string
  category: 'SG-SST' | 'Seguridad Vial' | 'Bienestar'
}

// Las 12 piezas gráficas ya publicadas en Facebook — se reutilizan como
// contenido informativo corto en la sección de Recursos.
export const recursos: Recurso[] = [
  { id: 1, file: 'recurso-1.jpg', title: 'Qué hacemos en Sisstvial', category: 'SG-SST' },
  { id: 2, file: 'recurso-2.jpg', title: 'Nuestros servicios en Seguridad Industrial', category: 'SG-SST' },
  { id: 3, file: 'recurso-3.jpg', title: 'Evite sanciones: implemente su SG-SST', category: 'SG-SST' },
  { id: 4, file: 'recurso-4.jpg', title: 'La seguridad es gratis mientras conduces', category: 'Seguridad Vial' },
  { id: 5, file: 'recurso-5.jpg', title: 'Qué es el SG-SST', category: 'SG-SST' },
  { id: 6, file: 'recurso-6.jpg', title: 'Quiénes deben implementar el PESV', category: 'Seguridad Vial' },
  { id: 7, file: 'recurso-7.jpg', title: '¿Sabías qué? Empresas con 10+ vehículos', category: 'Seguridad Vial' },
  { id: 8, file: 'recurso-8.jpg', title: 'Servicios profesionales que ofrecemos', category: 'SG-SST' },
  { id: 9, file: 'recurso-9.jpg', title: 'Cómo mantener la seguridad en tu empresa', category: 'SG-SST' },
  { id: 10, file: 'recurso-10.jpg', title: 'Seguridad y salud: hábitos en el trabajo', category: 'Bienestar' },
  { id: 11, file: 'recurso-11.jpg', title: '¿Su empresa está al día con el SG-SST?', category: 'SG-SST' },
  { id: 12, file: 'recurso-12.jpg', title: 'Qué esperas para implementar el PESV', category: 'Seguridad Vial' },
]
