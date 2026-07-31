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
  telefonoVisible: "616 11 33 22",

  /* Dirección completa de la tienda */
  direccion: "Calle Ejemplo 00, Localidad, Provincia",

  /* Mostrar el mapa de Google embebido (true) o el recuadro gris (false) */
  mostrarMapa: false,

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
