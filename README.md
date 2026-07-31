# explore! mobile — landing page

Web escaparate de una sola página cuyo objetivo es que el cliente **contacte por WhatsApp**.
HTML + CSS + JS puros, sin frameworks ni instalaciones. Se puede subir tal cual a cualquier hosting.

## Qué tengo que rellenar

Todo lo editable está en **`assets/js/config.js`**:

| Campo | Qué es |
|---|---|
| `whatsapp` | Número en formato internacional sin `+` ni espacios (ej. `34600112233`) |
| `telefonoVisible` | El teléfono tal y como se muestra en la web |
| `direccion` | Dirección completa de la tienda |
| `mostrarMapa` | `true` para incrustar el mapa de Google |
| `horario` | Tramos por día. `tramos: []` = cerrado |

Con eso se actualizan solos: todos los botones de WhatsApp, el enlace a Google Maps,
el mapa, la tabla de horarios y el aviso de «Abierto ahora / Cerrado» de la barra superior.

## Páginas

| Archivo | Contenido |
|---|---|
| `index.html` | Portada: hero, Vinted Go, servicios, opiniones |
| `servicios.html` | Móviles, fundas, sonido y carga, maletas, prepago, videojuegos |
| `reparaciones.html` | Averías, proceso en 3 pasos, garantía |
| `fibra-tarifas.html` | Comparativa de operadores, portabilidad |
| `vinted-go.html` | Punto de entrega y recogida de Vinted |
| `tienda.html` | Galería y por qué venir en persona |
| `preguntas.html` | FAQ por categorías |
| `contacto.html` | Mapa, horario, cómo llegar y opiniones |

## Fotos

En `tienda.html` hay 6 recuadros de relleno (`<figure class="ph">`).
Guarda las fotos en `assets/img/` y sustituye cada recuadro por:

```html
<img src="assets/img/tienda-1.jpg" alt="Interior de la tienda">
```

Nombres sugeridos: `escaparate.jpg`, `interior.jpg`, `fundas-marca.jpg`,
`maletas.jpg`, `auriculares.jpg`, `powerbanks.jpg`.

Recomendación: imágenes cuadradas, mínimo 800×800 px, optimizadas (JPG/WebP < 300 KB).

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
index.html
assets/
  css/styles.css     estilos (paleta tomada del logotipo)
  js/config.js       ← datos del negocio
  js/main.js         lógica: WhatsApp, horarios, menú, animaciones
  img/logotipo.png
```

## Paleta

Extraída del logotipo: negro `#08080A`, magenta `#EC008C`, verde `#57B75B`,
cian `#22B8E6`, amarillo `#FFE01A` y blanco. Verde WhatsApp `#25D366` reservado
en exclusiva para los botones de contacto, para que destaquen sobre todo lo demás.
