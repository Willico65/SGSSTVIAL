# Sisstvial — sitio web informativo

Frontend en **React 18 + TypeScript + Vite + Tailwind CSS + React Router**
para Sisstvial (Sistema de Gestión de Seguridad y Salud en el Trabajo y
Seguridad Vial), Duitama, Boyacá.

## Poner a correr el proyecto

Requiere Node.js 18 o superior.

```bash
npm install
npm run dev
```

Abre la URL que muestre la terminal (por defecto `http://localhost:5173`).

Otros comandos:

```bash
npm run build     # build de producción a /dist
npm run preview   # sirve el build de producción localmente
npm run lint      # revisa el código con ESLint
```

## Formulario de contacto (envío de correo)

El formulario de `/contacto` envía los datos a `api/contact.ts`, una función
serverless de Vercel que usa [Resend](https://resend.com) para enviar el
correo (no hay backend propio ni servidor que mantener).

Variables de entorno requeridas (ver `.env.example`):

- `RESEND_API_KEY` — API key de tu cuenta de Resend.
- `RESEND_FROM_EMAIL` — remitente. Con una cuenta nueva sin dominio propio
  verificado en Resend, usa `Sisstvial Web <onboarding@resend.dev>` (solo
  puede enviar al correo con el que te registraste en Resend). Si más
  adelante se verifica un dominio propio, se puede enviar desde cualquier
  dirección de ese dominio a cualquier destinatario.
- `CONTACT_TO_EMAIL` — correo que recibe los mensajes del formulario
  (`sisstvial@gmail.com` por defecto).

Estas variables se configuran en Vercel → Project Settings → Environment
Variables. La función solo corre en Vercel (o con `vercel dev` localmente);
`npm run dev` no la ejecuta.

## Estructura

```
src/
  data/
    content.ts       ← todo el texto real del sitio (servicios, contacto, etc.)
    photoSlots.ts     ← huecos fotográficos pendientes (ver docs/PROMPTS_IMAGENES.md)
  assets/
    logo.jpeg
    video/institucional.mp4      ← video real, ya publicado en Facebook
    recursos/recurso-1.jpg …12   ← piezas gráficas ya publicadas en Facebook
  components/
    layout/           ← Header, Footer, Layout
    ui/                ← Button, Container, SectionHeading, Badge
    shared/             ← ImagePlaceholder, RecursoCard, ServiceGroupCard, etc.
    home/               ← secciones exclusivas de Inicio
  pages/
    Home, About (Nosotros), Services (Servicios), Methodology, Resources, Contact
docs/
  PROMPTS_IMAGENES.md   ← 10 prompts fotorrealistas listos para generar las fotos que faltan
```

## Contenido y fuentes

Todo el texto de servicios (`src/data/content.ts`) viene directamente de
`PORTAFOLIO SISSTVIAL FINAL.pdf` y de la página de Facebook de Sisstvial.
No hay texto de relleno ("lorem ipsum") en ningún lugar del sitio.

**Dos datos a confirmar con el cliente antes de publicar:**

- El correo aparece como `sisstvial@gmail.com` en el PDF y en las 12
  piezas gráficas, pero el campo de contacto del perfil de Facebook
  muestra `sisstvialinfo@gmail.com`. Se usó `sisstvial@gmail.com` por ser
  el que se repite en más fuentes — confírmalo antes de publicar.
- El PDF menciona un tercer teléfono (`313 3400353`) que no aparece en las
  piezas gráficas ni en el perfil de Facebook. No se incluyó por
  inconsistencia, pero puede agregarse en `src/data/content.ts` si es
  válido.

## Fotografía pendiente

La carpeta del proyecto no tenía fotografías reales (solo piezas gráficas
tipo Canva). Los 10 huecos fotográficos (hero, retratos de equipo, escenas
de capacitación/trabajo seguro y sección de seguridad vial) están resueltos
por ahora con `<ImagePlaceholder />`, que muestra la proporción correcta y
referencia al prompt correspondiente. Para completarlos:

1. Genera cada imagen con su prompt en `docs/PROMPTS_IMAGENES.md`.
2. Guarda el archivo en `src/assets/photos/<id>.jpg`.
3. Reemplaza el `<ImagePlaceholder slot={...} />` correspondiente por un
   `<img>` normal (cada componente que usa un slot indica dónde).

## Desplegar en Vercel

1. Importa el repositorio de GitHub en [vercel.com](https://vercel.com/new)
   (detecta Vite automáticamente, no requiere configuración adicional).
2. Antes del primer deploy (o después, y vuelve a desplegar), define en
   Project Settings → Environment Variables: `RESEND_API_KEY`,
   `RESEND_FROM_EMAIL`, `CONTACT_TO_EMAIL` (ver sección de arriba).
3. Deploy.

## Próximos pasos

- [ ] Confirmar correo y teléfono definitivos (ver arriba)
- [ ] Generar/tomar las 10 fotografías pendientes
- [ ] Definir si "Recursos" se queda como está o se reemplaza por un blog editable
- [ ] Verificar un dominio propio en Resend para enviar desde una dirección
      del dominio del sitio en vez de `onboarding@resend.dev`
