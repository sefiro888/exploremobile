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

## Fotos

En la sección **La tienda** hay 6 recuadros de relleno (`<figure class="ph">`).
Sustituye cada uno por una foto real:

```html
<img src="assets/img/tienda-1.jpg" alt="Interior de la tienda">
```

Recomendación: imágenes cuadradas, mínimo 800×800 px, optimizadas (JPG/WebP < 300 KB).

## Reseñas

Las de `#opiniones` son de ejemplo. Cámbialas por las reales de la ficha de Google
(texto y nombre del cliente).

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
