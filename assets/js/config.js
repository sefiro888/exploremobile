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

  /* ─────────────────────────────────────────────────────────
     OFERTA DEL MES
     Aparece como una banda arriba del todo en TODAS las
     páginas. Para quitarla, pon activa: false.
     Cuando cambies de promoción, cambia también el "id":
     así vuelve a salirle a quien ya la había cerrado.
     ───────────────────────────────────────────────────────── */
  oferta: {
    activa: true,
    id: "agosto-2026",
    etiqueta: "Oferta de agosto",
    texto: "Protector de pantalla de regalo al cambiar la pantalla de tu móvil",
    textoBoton: "Lo quiero",
    mensajeWhatsapp: "Hola! Vengo por la oferta del protector de regalo al cambiar la pantalla. Mi modelo es: "
  },

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
  },

  /* ═════════════════════════════════════════════════════════
     TARIFAS DE REPARACIÓN  (calculadora de presupuesto)
     ─────────────────────────────────────────────────────────
     ⚠️  IMPORTANTE: los precios de abajo son DE EJEMPLO.
     Mientras "preciosConfirmados" sea false, la web avisa
     bien claro de que son orientativos y sin confirmar.

     CUANDO PONGAS TUS PRECIOS REALES:
       1. Cambia los números de "rangos"
       2. Pon preciosConfirmados: true
     ═════════════════════════════════════════════════════════ */
  tarifas: {
    preciosConfirmados: false,

    /* Gamas: sirven para no tener que listar todos los modelos.
       Cada modelo se asigna a una gama y hereda su precio.     */
    gamas: {
      basica: "Gama básica",
      media:  "Gama media",
      alta:   "Gama alta"
    },

    /* Averías: plazo habitual y precio [mínimo, máximo] por gama */
    averias: [
      {
        id: "pantalla", nombre: "Pantalla rota", icono: "📵",
        plazo: "Normalmente el mismo día",
        rangos: { basica: [45, 75], media: [80, 140], alta: [150, 290] }
      },
      {
        id: "bateria", nombre: "Batería agotada o hinchada", icono: "🔋",
        plazo: "Normalmente en el mismo día",
        rangos: { basica: [35, 50], media: [45, 70], alta: [65, 110] }
      },
      {
        id: "conector", nombre: "No carga / conector", icono: "🔌",
        plazo: "De 24 a 48 horas",
        rangos: { basica: [30, 45], media: [40, 60], alta: [55, 90] }
      },
      {
        id: "camara", nombre: "Cámara", icono: "📷",
        plazo: "De 24 a 48 horas",
        rangos: { basica: [35, 55], media: [50, 85], alta: [80, 150] }
      },
      {
        id: "altavoz", nombre: "Altavoz o micrófono", icono: "🔊",
        plazo: "De 24 a 48 horas",
        rangos: { basica: [30, 45], media: [40, 60], alta: [55, 85] }
      },
      {
        id: "agua", nombre: "Se ha mojado", icono: "💧",
        plazo: "De 2 a 4 días (hay que secar y revisar)",
        rangos: null,   // null = sin precio cerrado, hay que verlo
        nota: "El daño por agua no tiene precio cerrado: depende de lo que haya afectado. Primero lo revisamos y luego te decimos."
      },
      {
        id: "software", nombre: "Va lento o no arranca", icono: "⚙️",
        plazo: "De 24 a 48 horas",
        rangos: { basica: [25, 40], media: [25, 45], alta: [30, 50] }
      },
      {
        id: "datos", nombre: "Recuperar datos", icono: "💾",
        plazo: "Según el caso",
        rangos: null,
        nota: "La recuperación de datos depende del estado del terminal. Hay que verlo antes de dar un precio."
      }
    ],

    /* Marcas y modelos. Añade o quita modelos libremente:
       lo único importante es la gama que le asignes.          */
    marcas: [
      {
        id: "apple", nombre: "Apple", icono: "🍎",
        modelos: [
          { n: "iPhone 15 / 15 Pro",       g: "alta"   },
          { n: "iPhone 14 / 14 Pro",       g: "alta"   },
          { n: "iPhone 13 / 13 Pro",       g: "alta"   },
          { n: "iPhone 12 / 12 Pro",       g: "media"  },
          { n: "iPhone 11 / XR",           g: "media"  },
          { n: "iPhone SE",                g: "basica" },
          { n: "iPhone X / XS",            g: "media"  },
          { n: "Otro iPhone",              g: "media"  }
        ]
      },
      {
        id: "samsung", nombre: "Samsung", icono: "📱",
        modelos: [
          { n: "Galaxy S24 / S23",         g: "alta"   },
          { n: "Galaxy S22 / S21",         g: "alta"   },
          { n: "Galaxy Note",              g: "alta"   },
          { n: "Galaxy A54 / A53",         g: "media"  },
          { n: "Galaxy A34 / A33",         g: "media"  },
          { n: "Galaxy A15 / A13",         g: "basica" },
          { n: "Otro Samsung",             g: "media"  }
        ]
      },
      {
        id: "xiaomi", nombre: "Xiaomi / Redmi", icono: "⚡",
        modelos: [
          { n: "Xiaomi 13 / 14",           g: "alta"   },
          { n: "Redmi Note 12 / 13",       g: "media"  },
          { n: "Redmi Note 10 / 11",       g: "media"  },
          { n: "Redmi 12 / 13",            g: "basica" },
          { n: "POCO",                     g: "media"  },
          { n: "Otro Xiaomi",              g: "basica" }
        ]
      },
      {
        id: "otras", nombre: "Otra marca", icono: "🔎",
        modelos: [
          { n: "OPPO",                     g: "media"  },
          { n: "realme",                   g: "media"  },
          { n: "HONOR",                    g: "media"  },
          { n: "Google Pixel",             g: "alta"   },
          { n: "Motorola",                 g: "basica" },
          { n: "No lo sé / no está aquí",  g: "media"  }
        ]
      }
    ]
  }
};
