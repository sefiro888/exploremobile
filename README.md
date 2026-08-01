# explore! mobile — web de la tienda

Web escaparate cuyo objetivo es que el cliente **contacte por WhatsApp**.
HTML + CSS + JS puros, sin frameworks ni instalaciones. Se sube tal cual a cualquier hosting.

## Qué tengo que rellenar

Todo lo editable está en **`assets/js/config.js`**:

| Campo | Qué es |
|---|---|
| `whatsapp` | Número en formato internacional sin `+` ni espacios (ej. `34600112233`) |
| `telefonoVisible` | El teléfono tal y como se muestra en la web |
| `direccion` | Dirección completa de la tienda |
| `googleRating` / `googleReviews` | Valoración y número de opiniones de Google |
| `mostrarMapa` | `true` para incrustar el mapa de Google |
| `horario` | Tramos por día. `tramos: []` = cerrado |
| `oferta` | Banner de promoción (ver abajo) |

Con eso se actualizan solos: todos los botones de WhatsApp, el enlace a Google Maps,
el mapa, la tabla de horarios y el aviso de «Abierto ahora / Cerrado» de la barra superior.

## Oferta del mes

En `config.js`, el bloque `oferta` pinta una banda arriba del todo en **todas** las páginas:

```js
oferta: {
  activa: true,                    // false para quitarla
  id: "agosto-2026",               // cámbialo al poner una promo nueva
  etiqueta: "Oferta de agosto",
  texto: "Protector de pantalla de regalo al cambiar la pantalla",
  textoBoton: "Lo quiero",
  mensajeWhatsapp: "Hola! Vengo por la oferta..."
}
```

El visitante puede cerrarla y no le vuelve a salir. Al cambiar el `id`, reaparece.

## Páginas

| Archivo | Contenido |
|---|---|
| `index.html` | Portada: hero, cifras, Vinted Go, servicios, opiniones |
| `servicios.html` | Móviles, fundas de marca, sonido y carga, maletas, prepago, videojuegos |
| `reparaciones.html` | Averías, comparador antes/después, proceso, sello de garantía |
| `fibra-tarifas.html` | Comparativa de operadores, portabilidad |
| `vinted-go.html` | Punto de entrega y recogida de Vinted |
| `tienda.html` | Galería de fotos y feed de Instagram |
| `consejos.html` | Blog con 4 artículos (batería, mojado, pantalla, factura) |
| `preguntas.html` | Preguntas frecuentes por categorías |
| `contacto.html` | Mapa, horario, cómo llegar (coche/bus/a pie) y opiniones |
| `404.html` | Página de error con el estilo de la marca |
| `reparar-pantalla-benalmadena.html` | Landing de SEO local: pantallas |
| `cambiar-bateria-benalmadena.html` | Landing de SEO local: baterías |

## Idiomas

La web se traduce a **inglés, francés y alemán** con el selector de banderas de la cabecera.
Recuerda la elección del visitante y, en la primera visita, propone el idioma de su navegador.

Las traducciones están en **`assets/js/i18n.js`**. Para añadir o corregir una frase,
busca el bloque del idioma y añade una línea:

```js
'Frase en español': 'Translated sentence',
```

Lo que no esté traducido se queda en español, sin romper nada.

## Comparador antes/después

En `reparaciones.html`. Ahora usa dos SVG de muestra
(`assets/img/ejemplo-antes.svg` y `ejemplo-despues.svg`).

**Para poner fotos reales**: sustituye esos dos `<img>` por las fotografías del mismo
móvil antes y después, hechas desde el mismo ángulo. No hay que tocar nada más:
el arrastre, el teclado y el móvil siguen funcionando igual.

## Fotos

Las de la tienda están en `assets/img/`. Las 12 actuales vienen de las miniaturas de
Google Maps (141 px), por eso la galería las muestra pequeñas: a ese tamaño se ven nítidas.
Con fotos hechas directamente con el móvil se podrían mostrar mucho más grandes.

Recomendación para fotos nuevas: cuadradas, mínimo 800×800 px, JPG/WebP < 300 KB.

## Botón de WhatsApp

- **Móvil** (< 760 px): barra fija inferior con el CTA a ancho completo más un botón
  de llamada. Se genera desde `main.js`, no hay que copiarla en cada página.
- **Escritorio**: botón flotante con anillo de pulso y una burbuja de reclamo que
  aparece a los 2 s y se retira sola a los 14 s (una vez por sesión).

## Cómo verla en local

```bash
python -m http.server 5178
```

Luego abre http://localhost:5178

## Estructura

```
index.html + 11 páginas más
site.webmanifest
assets/
  css/styles.css          estilos (paleta tomada del logotipo)
  fonts/*.woff2           tipografía Outfit alojada aquí (sin Google Fonts)
  js/config.js            ← datos del negocio y oferta del mes
  js/main.js              WhatsApp, horarios, comparador, animaciones
  js/i18n.js              ← traducciones ES/EN/FR/DE
  img/                    logotipo, favicons, imagen social y fotos
```

## Detalles técnicos

- **Sin conexiones externas**: la tipografía se sirve desde el propio sitio, así que
  el navegador del visitante no contacta con Google (mejor para el RGPD y más rápido).
- **Favicons** en 16, 32, 180, 192 y 512 px, más `site.webmanifest` para que se pueda
  añadir a la pantalla de inicio del móvil.
- **Imagen social** (`assets/img/og-image.png`, 1200×630): es la tarjeta que aparece
  al compartir el enlace por WhatsApp o redes.
- **Accesibilidad**: el comparador se maneja con teclado, hay textos para lectores de
  pantalla y se respeta `prefers-reduced-motion` (quien tenga las animaciones
  desactivadas en su sistema no las verá).

## Paleta

Extraída del logotipo: negro `#08080A`, magenta `#EC008C`, verde `#57B75B`,
cian `#22B8E6`, amarillo `#FFE01A` y blanco. Verde WhatsApp `#25D366` reservado
en exclusiva para los botones de contacto, para que destaquen sobre todo lo demás.
Turquesa `#09B1BA` para todo lo relacionado con Vinted Go.
