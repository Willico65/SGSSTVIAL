# Prompts fotorrealistas — fotografía pendiente de Sisstvial

Estos 10 prompts cubren cada hueco fotográfico dejado en el sitio (ver
`src/data/photoSlots.ts`). Están escritos con la misma receta de cámara +
lente + luz que usan las guías de fotografía realista de obra en Media.io
y Pippit: nombrar equipo real, condición de luz real y textura de piel/tela
real es lo que evita el look "de IA" — evita en cambio adjetivos vagos como
"fotorrealista, 8k, hiperdetallado" sin más contexto, que es justo lo que
produce el look plástico que se quiere evitar.

## Cómo usar cada prompt

1. Pégalo tal cual en tu generador (Gemini, Midjourney, Flux, etc.). Ajusta
   proporción de salida al ratio indicado.
2. Genera 3-4 variaciones y elige la que tenga mejor anatomía de manos y
   coherencia de EPP (son los puntos donde más se nota la IA).
3. Exporta en la relación de aspecto indicada, guarda el archivo en
   `src/assets/photos/<id>.jpg` (crea la carpeta si no existe).
4. En el componente que use ese slot, reemplaza `<ImagePlaceholder slot={...} />`
   por una etiqueta `<img>` apuntando al archivo importado, y marca
   `ready: true` en `photoSlots.ts`.

## Receta base (aplica a los 10 prompts)

- **Cámara:** cuerpo full-frame real (Canon EOS R5 o Sony A7 IV), nunca
  "cámara genérica".
- **Lente:** distancia focal y apertura explícitas (ej. 35mm f/1.8 para
  retrato con fondo desenfocado, 24mm f/5.6 para escena amplia con todo en
  foco).
- **Luz:** una fuente de luz real y su dirección (luz de atardecer rasante,
  nublado difuso típico del altiplano boyacense, luz de flash de relleno a
  las 2 de la tarde), nunca "buena iluminación" a secas.
- **Imperfección deliberada:** grano de ISO 400-800, ligera profundidad de
  campo imperfecta, arrugas en la ropa reflectiva, polvo o barro real en las
  botas — el detalle que una cámara real capturaría y que una IA sin guía
  tiende a "limpiar" de más.
- **Negative prompt / a evitar:** piel de plástico, simetría perfecta,
  manos con dedos de más, logotipos inventados en el chaleco, texto
  ilegible en señales, iluminación de estudio genérica sin dirección.

---

## PROMPT 1 — Hero 16:9

Fotografía documental realista, formato horizontal 16:9. Un operador de
tránsito colombiano de unos 35 años, piel trigueña, chaleco reflectivo
naranja de alta visibilidad sobre chaqueta impermeable azul oscuro, casco
blanco con la barbiquejo puesto, sosteniendo una paleta de señalización
PARE/SIGA en alto con el brazo extendido, de pie en el centro de una vía
en obra rodeada de montañas verdes del altiplano boyacense al fondo,
desenfocadas. Toma con cámara Canon EOS R5, lente 24mm f/5.6, luz de
atardecer rasante y cálida entrando desde la derecha del cuadro, cielo
parcialmente nublado. El tercio izquierdo del encuadre queda como espacio
negativo con la carretera desenfocada, sin elementos que interrumpan esa
zona, para superponer un titular y un botón de llamada a la acción.
Grano de película sutil, ISO 400, colores ligeramente desaturados como en
reportaje editorial, no publicidad genérica.

## PROMPT 2 — Retrato equipo (líder SST)

Retrato realista de medio cuerpo, formato vertical 4:5. Hombre colombiano
de unos 42 años, barba corta entrecana, casco blanco de seguridad, gafas
de protección transparentes sobre la frente, chaleco reflectivo naranja
sobre camisa de trabajo azul con el cuello desabotonado, sosteniendo una
carpeta con planillas de inspección bajo el brazo. Mirando directo a
cámara con expresión serena y profesional, de pie frente a una fachada
industrial gris fuera de foco. Cámara Sony A7 IV, lente 85mm f/1.8, luz de
ventana difusa de mediodía nublado desde la izquierda, sin flash directo.
Textura de piel real con poros visibles, sin retoque de suavizado.

## PROMPT 3 — Retrato equipo (inspectora vial)

Retrato realista de medio cuerpo, formato vertical 4:5. Mujer colombiana
de unos 30 años, cabello recogido en cola baja bajo un casco blanco,
chaleco reflectivo naranja con bandas plateadas sobre chompa térmica gris,
sosteniendo una tablet con una lista de chequeo de inspección de
vehículos, de pie junto a la parte frontal desenfocada de una camioneta
blanca. Expresión atenta, mirando ligeramente fuera de cámara hacia el
vehículo. Cámara Canon EOS R5, lente 50mm f/2, luz de mañana nublada
suave, sin sombras duras. Ligero grano ISO 320, colores naturales sin
saturar.

## PROMPT 4 — Retrato equipo (técnico HSE)

Retrato realista de medio cuerpo, formato vertical 4:5. Hombre colombiano
de unos 28 años, casco amarillo con protector auditivo integrado, gafas de
seguridad, guantes de carnaza puestos, chaleco reflectivo verde sobre
overol de trabajo, en el interior de una nave industrial iluminada por luz
natural cenital a través de claraboyas. Postura relajada, brazos cruzados,
mirando a cámara con media sonrisa. Cámara Sony A7 IV, lente 35mm f/2.2,
luz mixta (cenital natural + reflejo frío de piso de concreto), sombras
suaves. Grano ISO 500, sin viñeteado artificial.

## PROMPT 5 — Escena de capacitación

Fotografía documental realista, formato horizontal 4:3. Sala de
capacitación sencilla con sillas plásticas, un grupo de 6 trabajadores de
distintas edades sentados de espaldas/perfil parcial a la cámara,
todos con chaleco reflectivo puesto sobre su ropa de trabajo, atendiendo a
una instructora de pie frente a un rotafolio con el título "SG-SST" escrito
a mano, señalando un diagrama simple. Luz de tubos fluorescentes cálidos
de interior mezclada con luz de ventana lateral. Cámara Canon EOS R6,
lente 24-70mm en 35mm, f/4, foco en la instructora con el grupo
ligeramente desenfocado en primer plano. Ambiente real de oficina/bodega
adaptada, no auditorio corporativo genérico.

## PROMPT 6 — Escena de trabajo seguro

Fotografía documental realista, formato horizontal 4:3. Dos trabajadores
de una empresa de transporte revisando juntos una lista de elementos de
protección personal (casco, chaleco, guantes, botas de seguridad)
extendidos sobre el capó de un camión, antes del ingreso a una zona de
patio industrial. Luz de media mañana, cielo nublado uniforme típico de
Boyacá, sombras suaves sin dirección marcada. Cámara Sony A7 IV, lente
28mm f/4, todo el encuadre en foco razonable (profundidad de campo media).
Detalles reales: reflejos de humedad en el piso de concreto, textura de
uso en las botas.

## PROMPT 7 — Señalizador vial

Fotografía documental realista, formato horizontal 4:3. Señalizador vial
colombiano con chaleco reflectivo naranja y pantalón de trabajo oscuro,
casco blanco, sosteniendo con ambas manos una paleta reglamentaria roja de
PARE en alto, de pie sobre el borde de una vía en reparación con conos
naranjas visibles detrás formando un carril de desvío, montañas verdes
desenfocadas al fondo. Cámara Canon EOS R5, lente 50mm f/4, luz de tarde
suave con leve contraluz que recorta el borde del chaleco reflectivo.
Grano ISO 320, sin efectos de post-producción exagerados.

## PROMPT 8 — Camión con flecha

Fotografía documental realista, formato horizontal 4:3. Camión de
servicio vial visto de tres cuartos, con un panel de flecha direccional
(TMA) encendido en la parte trasera indicando desvío hacia la derecha,
estacionado protegiendo una zona de trabajo en una vía de dos carriles.
Luz de atardecer con el sol bajo detrás del camión, generando un halo
suave alrededor de la carrocería y reflejos anaranjados en la pintura.
Cámara Sony A7 IV, lente 35mm f/5.6, todo el encuadre nítido. Sin logos
inventados visibles en el camión, placas desenfocadas o no legibles.

## PROMPT 9 — Conos y señalización

Fotografía documental realista, formato horizontal 4:3, en plano medio-
bajo (altura de rodilla) mirando a lo largo de una fila de conos naranjas
de tránsito con cinta reflectiva blanca, delimitando el borde de una zona
de trabajo sobre pavimento agrietado, con una señal triangular de "Hombres
Trabajando" desenfocada al fondo. Luz de mañana rasante creando sombras
alargadas de los conos sobre el asfalto. Cámara Canon EOS R6, lente 24mm
f/8 (máxima nitidez de borde a borde), ligera viñeta natural de lente, sin
saturación artificial del naranja.

## PROMPT 10 — Vista de dron

Fotografía aérea de dron, formato horizontal 16:9, altura aproximada de 40
metros, tomada en ángulo de 45 grados (no cenital puro) sobre una zona de
obra vial en un tramo de carretera rural boyacense: maquinaria amarilla
estacionada, señalización de conos formando un carril de desvío, dos
vehículos de la cuadrilla estacionados en el borde, y montañas verdes
onduladas ocupando el fondo del encuadre. Dron DJI Mavic 3, lente
equivalente a 24mm f/5.6, luz de media mañana con sombras cortas bien
definidas, cielo con nubes dispersas. Nitidez alta uniforme típica de
sensor de dron, sin desenfoque de movimiento.

---

## Nota sobre consistencia de marca

Para que las 10 imágenes se sientan de la misma sesión y no de fuentes
distintas:

- Repite siempre el mismo tono de **naranja de seguridad** en chalecos y
  conos (el acento de marca del sitio, `accent` en `tailwind.config.js`).
- Usa **casco blanco** como elemento recurrente del equipo SST y **chaleco
  naranja** como elemento recurrente del equipo vial — ayuda a que un
  usuario reconozca visualmente qué sección está viendo.
- Mantén el **paisaje de fondo** (montañas verdes onduladas, cielo nublado
  o de atardecer) como hilo conductor entre las fotos de exteriores, ya que
  ancla el sitio a Duitama/Boyacá en vez de a un genérico "sitio de obra".
