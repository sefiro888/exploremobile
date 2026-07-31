/* ═══════════════════════════════════════════════════════════
   CONFIGURACIÓN DE LA WEB — edita SOLO este archivo
   ═══════════════════════════════════════════════════════════
   Cambia aquí el teléfono, la dirección y los horarios.
   Todo lo demás (enlaces de WhatsApp, mapa, "abierto ahora",
   horario del pie) se actualiza automáticamente.
   ═══════════════════════════════════════════════════════════ */

window.EXPLORE = {

  /* Número de WhatsApp en formato internacional, SIN "+" ni espacios.
     Ejemplo España: 34600112233                                     */
  whatsapp: "34616113322",

  /* Teléfono tal y como quieres que se vea en la web */
  telefonoVisible: "952 96 44 63",

  /* Dirección completa de la tienda */
  direccion: "Av. las Palmeras, Local 14, 29630 Benalmádena, Málaga",

  /* Valoración en Google (para el sello de confianza) */
  googleRating: "4,9",
  googleReviews: "223",
  googleReviewsUrl: "https://share.google/P0gWbLZr0X8yQrWbc",

  /* Mostrar el mapa de Google embebido (true) o el recuadro gris (false) */
  mostrarMapa: true,

  /* Horario. Usa "cerrado" para los días que no abrís.
     Puedes poner varios tramos: [["10:00","14:00"],["17:00","20:30"]] */
  horario: {
    1: { etiqueta: "Lunes",     tramos: [["10:00","14:00"],["17:00","21:00"]] },
    2: { etiqueta: "Martes",    tramos: [["10:00","14:00"],["17:00","21:00"]] },
    3: { etiqueta: "Miércoles", tramos: [["10:00","14:00"],["17:00","21:00"]] },
    4: { etiqueta: "Jueves",    tramos: [["10:00","14:00"],["17:00","21:00"]] },
    5: { etiqueta: "Viernes",   tramos: [["10:00","14:00"],["17:00","21:00"]] },
    6: { etiqueta: "Sábado",    tramos: [["10:30","14:00"]] },
    0: { etiqueta: "Domingo",   tramos: [] }
  }
};
