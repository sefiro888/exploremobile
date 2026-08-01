/* ═══════════════════════════════════════════════════════════
   explore! mobile — lógica de la landing
   No hace falta tocar este archivo: la configuración está en
   assets/js/config.js
   ═══════════════════════════════════════════════════════════ */
(function () {
  'use strict';

  var CFG = window.EXPLORE || {};

  /* ── 1. Enlaces de WhatsApp ──────────────────────────────
     Cualquier elemento con data-wa abre WhatsApp con ese
     mensaje ya escrito. Así sabemos por qué nos escriben.   */
  function waUrl(msg) {
    return 'https://wa.me/' + (CFG.whatsapp || '') + '?text=' + encodeURIComponent(msg || '');
  }

  document.querySelectorAll('[data-wa]').forEach(function (el) {
    var url = waUrl(el.getAttribute('data-wa'));
    if (el.tagName === 'A') {
      el.href = url;
      el.target = '_blank';
      el.rel = 'noopener';
    } else {
      el.addEventListener('click', function () {
        window.open(url, '_blank', 'noopener');
      });
    }
  });

  /* ── 1b. Menú y pie, generados desde aquí ────────────────
     Así solo hay que tocar un sitio para añadir o cambiar
     una página, y todas quedan sincronizadas.              */
  var MENU = [
    { url: 'servicios.html',      txt: 'Servicios' },
    { url: 'reparaciones.html',   txt: 'Reparaciones' },
    { url: 'presupuesto.html',    txt: 'Presupuesto', destacado: true },
    { url: 'fibra-tarifas.html',  txt: 'Fibra' },
    { url: 'vinted-go.html',      txt: 'Vinted Go', clase: 'nav--vinted' },
    { txt: 'Más', submenu: [
        { url: 'tienda.html',      txt: '🏬 La tienda' },
        { url: 'que-movil.html',   txt: '🤔 ¿Qué móvil me compro?' },
        { url: 'consejos.html',    txt: '💡 Consejos' },
        { url: 'empresas.html',    txt: '🏢 Para empresas' },
        { url: 'tourists.html',    txt: '🌍 Visitors / Touristen' },
        { url: 'preguntas.html',   txt: '❓ Preguntas frecuentes' }
      ] },
    { url: 'contacto.html',       txt: 'Contacto' }
  ];

  var PIE = [
    { titulo: 'Servicios', enlaces: [
      { url: 'servicios.html',     txt: 'Venta de móviles' },
      { url: 'reparaciones.html',  txt: 'Reparaciones' },
      { url: 'presupuesto.html',   txt: 'Calcular presupuesto' },
      { url: 'fibra-tarifas.html', txt: 'Fibra y tarifas' },
      { url: 'vinted-go.html',     txt: 'Punto Vinted Go' }
    ] },
    { titulo: 'Información', enlaces: [
      { url: 'tienda.html',    txt: 'La tienda' },
      { url: 'que-movil.html', txt: '¿Qué móvil me compro?' },
      { url: 'consejos.html',  txt: 'Consejos' },
      { url: 'empresas.html',  txt: 'Para empresas' },
      { url: 'preguntas.html', txt: 'Preguntas frecuentes' },
      { url: 'contacto.html',  txt: 'Contacto' }
    ] }
  ];

  var paginaActual = (location.pathname.split('/').pop() || 'index.html').toLowerCase();

  var nav = document.getElementById('nav');
  if (nav && !nav.children.length) {
    nav.innerHTML = MENU.map(function (m) {
      if (m.submenu) {
        var activo = m.submenu.some(function (s) { return s.url === paginaActual; });
        return '<div class="nav-drop' + (activo ? ' is-active' : '') + '">' +
                 '<button class="nav-drop__btn" aria-expanded="false" aria-haspopup="true">' + m.txt +
                   '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 10l5 5 5-5z" fill="currentColor"/></svg>' +
                 '</button>' +
                 '<div class="nav-drop__list">' +
                   m.submenu.map(function (s) {
                     return '<a href="' + s.url + '"' + (s.url === paginaActual ? ' class="is-active"' : '') + '>' + s.txt + '</a>';
                   }).join('') +
                 '</div>' +
               '</div>';
      }
      var cls = [];
      if (m.clase) cls.push(m.clase);
      if (m.destacado) cls.push('nav--cta');
      if (m.url === paginaActual) cls.push('is-active');
      return '<a href="' + m.url + '"' + (cls.length ? ' class="' + cls.join(' ') + '"' : '') + '>' + m.txt + '</a>';
    }).join('');

    // Desplegable: en escritorio se abre al pulsar, en móvil se despliega dentro
    nav.querySelectorAll('.nav-drop__btn').forEach(function (b) {
      b.addEventListener('click', function (e) {
        e.stopPropagation();
        var d = b.parentNode;
        var abierto = d.classList.toggle('is-open');
        b.setAttribute('aria-expanded', abierto ? 'true' : 'false');
      });
    });
    document.addEventListener('click', function () {
      nav.querySelectorAll('.nav-drop.is-open').forEach(function (d) {
        d.classList.remove('is-open');
        d.querySelector('.nav-drop__btn').setAttribute('aria-expanded', 'false');
      });
    });
  }

  var pie = document.getElementById('pie');
  if (pie && !pie.children.length) {
    pie.innerHTML =
      '<div class="footer__brand">' +
        '<img src="assets/img/logotipo.png" alt="explore! mobile" width="120" height="120">' +
        '<p>Tienda física de móviles, fundas y accesorios. Reparación, fibra, prepago, videojuegos y punto Vinted Go.</p>' +
      '</div>' +
      PIE.map(function (c, i) {
        var enlaces = c.enlaces.map(function (e) {
          return '<a href="' + e.url + '">' + e.txt + '</a>';
        }).join('');
        // Instagram solo en la última columna
        if (i === PIE.length - 1) {
          enlaces += '<a href="https://www.instagram.com/explore_mobile/" target="_blank" rel="noopener">Instagram</a>';
        }
        return '<div class="footer__links"><h5>' + c.titulo + '</h5>' + enlaces + '</div>';
      }).join('');
  }

  /* ── 2. Datos de contacto ─────────────────────────────── */
  var addr = document.getElementById('addr');
  if (addr && CFG.direccion) addr.textContent = CFG.direccion;

  var mapsLink = document.getElementById('mapsLink');
  if (mapsLink && CFG.direccion) {
    mapsLink.href = 'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent(CFG.direccion);
  }

  var telLink = document.getElementById('telLink');
  if (telLink && CFG.telefonoVisible) {
    telLink.textContent = CFG.telefonoVisible;
    telLink.href = 'tel:' + CFG.telefonoVisible.replace(/\s/g, '');
  }

  /* ── 2b. Sello de valoración de Google ───────────────────── */
  ['ratingNum', 'ratingNum2'].forEach(function (id) {
    var el = document.getElementById(id);
    if (el && CFG.googleRating) el.textContent = CFG.googleRating;
  });
  ['ratingCount', 'ratingCount2'].forEach(function (id) {
    var el = document.getElementById(id);
    if (el && CFG.googleReviews) el.textContent = CFG.googleReviews;
  });
  var reviewsLink = document.getElementById('reviewsLink');
  if (reviewsLink) {
    if (CFG.googleReviewsUrl) reviewsLink.href = CFG.googleReviewsUrl;
    if (CFG.googleReviews) reviewsLink.textContent = 'Ver las ' + CFG.googleReviews + ' reseñas en Google →';
  }

  /* ── 2c. Datos estructurados para Google (SEO local) ─────── */
  if (CFG.direccion) {
    var ld = document.createElement('script');
    ld.type = 'application/ld+json';
    ld.textContent = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'ElectronicsStore',
      name: 'explore! mobile',
      image: window.location.origin + '/assets/img/logotipo.png',
      telephone: CFG.telefonoVisible || undefined,
      address: { '@type': 'PostalAddress', streetAddress: CFG.direccion },
      aggregateRating: (CFG.googleRating && CFG.googleReviews) ? {
        '@type': 'AggregateRating',
        ratingValue: CFG.googleRating.replace(',', '.'),
        reviewCount: CFG.googleReviews
      } : undefined,
      url: window.location.origin + window.location.pathname
    });
    document.head.appendChild(ld);
  }

  /* Rutas por modo de transporte: Google Maps calcula el trayecto
     desde donde esté el cliente, así siempre está actualizado. */
  if (CFG.direccion) {
    var destino = encodeURIComponent(CFG.direccion);
    [['wayCar', 'driving'], ['wayBus', 'transit'], ['wayWalk', 'walking']].forEach(function (par) {
      var el = document.getElementById(par[0]);
      if (el) el.href = 'https://www.google.com/maps/dir/?api=1&destination=' + destino + '&travelmode=' + par[1];
    });
  }

  var mapBox = document.getElementById('mapBox');
  if (mapBox && CFG.mostrarMapa && CFG.direccion) {
    var iframe = document.createElement('iframe');
    iframe.src = 'https://www.google.com/maps?q=' + encodeURIComponent(CFG.direccion) + '&output=embed';
    iframe.loading = 'lazy';
    iframe.title = 'Ubicación de explore! mobile';
    iframe.referrerPolicy = 'no-referrer-when-downgrade';
    iframe.style.border = '0';
    mapBox.replaceWith(iframe);
  }

  /* ── 3. Horario y estado "abierto ahora" ──────────────── */
  var H = CFG.horario || {};
  var ORDEN = [1, 2, 3, 4, 5, 6, 0];

  function fmt(tramos) {
    if (!tramos || !tramos.length) return 'Cerrado';
    return tramos.map(function (t) { return t[0] + '–' + t[1]; }).join(' · ');
  }

  function minutos(hhmm) {
    var p = hhmm.split(':');
    return parseInt(p[0], 10) * 60 + parseInt(p[1], 10);
  }

  var ahora = new Date();
  var hoy = ahora.getDay();
  var min = ahora.getHours() * 60 + ahora.getMinutes();

  var lista = document.getElementById('hours');
  if (lista) {
    ORDEN.forEach(function (d) {
      var dia = H[d];
      if (!dia) return;
      var li = document.createElement('li');
      if (d === hoy) li.className = 'is-today';
      li.innerHTML = '<span>' + dia.etiqueta + '</span><strong>' + fmt(dia.tramos) + '</strong>';
      lista.appendChild(li);
    });
  }

  var abierto = false;
  var cierra = null;
  if (H[hoy] && H[hoy].tramos) {
    H[hoy].tramos.forEach(function (t) {
      if (min >= minutos(t[0]) && min < minutos(t[1])) { abierto = true; cierra = t[1]; }
    });
  }

  var dot = document.getElementById('openDot');
  var txt = document.getElementById('openText');
  if (txt) {
    // Buscamos la siguiente apertura (para cuando está cerrado)
    var prox = null, proxCorto = null;
    if (!abierto) {
      for (var i = 0; i < 7 && !prox; i++) {
        var d = (hoy + i) % 7;
        var dia = H[d];
        if (!dia || !dia.tramos.length) continue;
        for (var j = 0; j < dia.tramos.length; j++) {
          var ini = dia.tramos[j][0];
          if (i > 0 || minutos(ini) > min) {
            var cuando = (i === 0 ? 'hoy' : i === 1 ? 'mañana' : 'el ' + dia.etiqueta.toLowerCase());
            prox = cuando + ' a las ' + ini;
            proxCorto = (i === 0 ? 'hoy' : i === 1 ? 'mañana' : dia.etiqueta.slice(0, 3).toLowerCase()) + ' ' + ini;
            break;
          }
        }
      }
      if (dot) dot.classList.add('is-closed');
    }

    /* En una pantalla estrecha el mensaje largo no cabe y se
       cortaba a la mitad. Aquí se usa una versión corta.      */
    function pintarHorario() {
      var estrecho = window.innerWidth <= 760;
      if (abierto) {
        txt.textContent = estrecho
          ? 'Abierto · cerramos ' + cierra
          : 'Abierto ahora · cerramos a las ' + cierra;
      } else {
        txt.textContent = estrecho
          ? 'Cerrado · abrimos ' + (proxCorto || '')
          : 'Cerrado ahora' + (prox ? ' · abrimos ' + prox : '') + ' — escríbenos por WhatsApp';
      }
    }
    pintarHorario();
    window.addEventListener('resize', pintarHorario);
  }

  /* ── 4. Menú móvil ───────────────────────────────────────
     Panel lateral anclado a la ventana: no depende de la
     altura de la cabecera ni del banner, así que nunca se
     descoloca. Bloquea el scroll del fondo mientras está
     abierto y se cierra con el fondo, la X o la tecla Esc.  */
  var burger = document.getElementById('burger');
  var nav = document.getElementById('nav');
  var header = document.getElementById('header');

  if (burger && nav) {
    // Fondo oscuro. Se añade dentro de <header> (no de <body>)
    // a propósito: el <nav> vive dentro de la cabecera, que
    // tiene su propio contexto de apilamiento (position:sticky
    // + z-index). Si el fondo se cuelga de <body>, queda en un
    // contexto distinto y el navegador puede pintarlo por
    // encima del menú aunque su z-index sea menor: eso es lo
    // que hacía que los toques en los enlaces no funcionaran
    // y que el menú se viera "empañado". Metiéndolo aquí,
    // ambos compiten dentro del mismo contexto y gana el que
    // tiene mayor z-index (el menú, 200 frente a 190).
    var fondo = document.createElement('div');
    fondo.className = 'nav-backdrop';
    fondo.setAttribute('hidden', '');
    (header || document.body).appendChild(fondo);

    // Botón de cerrar dentro del panel
    var cerrar = document.createElement('button');
    cerrar.className = 'nav-close';
    cerrar.setAttribute('aria-label', 'Cerrar menú');
    cerrar.innerHTML = '&times;';
    nav.appendChild(cerrar);

    var posicionScroll = 0;

    function abrirMenu() {
      posicionScroll = window.scrollY;
      nav.classList.add('is-open');
      fondo.removeAttribute('hidden');
      requestAnimationFrame(function () { fondo.classList.add('is-on'); });
      document.body.classList.add('nav-abierto');
      burger.setAttribute('aria-expanded', 'true');
      // El primer enlace recibe el foco, para quien navega con teclado
      var primero = nav.querySelector('a');
      if (primero) setTimeout(function () { primero.focus({ preventScroll: true }); }, 320);
    }

    function cerrarMenu() {
      nav.classList.remove('is-open');
      fondo.classList.remove('is-on');
      setTimeout(function () { if (!nav.classList.contains('is-open')) fondo.setAttribute('hidden', ''); }, 320);
      document.body.classList.remove('nav-abierto');
      burger.setAttribute('aria-expanded', 'false');
    }

    burger.addEventListener('click', function (e) {
      e.stopPropagation();
      if (nav.classList.contains('is-open')) cerrarMenu(); else abrirMenu();
    });

    cerrar.addEventListener('click', cerrarMenu);
    fondo.addEventListener('click', cerrarMenu);

    nav.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', cerrarMenu);
    });

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && nav.classList.contains('is-open')) {
        cerrarMenu();
        burger.focus();
      }
    });

    // Si se gira el móvil o se pasa a escritorio, el menú se cierra
    window.addEventListener('resize', function () {
      if (window.innerWidth > 980 && nav.classList.contains('is-open')) cerrarMenu();
    });
  }

  /* ── 5. Sombra de la cabecera al hacer scroll ────────── */
  if (header) {
    var onScroll = function () {
      header.classList.toggle('is-stuck', window.scrollY > 8);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
  }

  /* ── 6. Aparición progresiva de secciones ────────────── */
  var animables = document.querySelectorAll('.svc, .rep, .step, .why, .rev, .trust li, .faq details, .gallery > *, .cta-band, .bill, .shead');
  if ('IntersectionObserver' in window) {
    animables.forEach(function (el) { el.classList.add('reveal'); });
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e, i) {
        if (e.isIntersecting) {
          setTimeout(function () { e.target.classList.add('is-in'); }, Math.min(i * 60, 240));
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px' });
    animables.forEach(function (el) { io.observe(el); });
  }

  /* ── 7. Año del pie ──────────────────────────────────── */
  var year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();

  /* ── 7b. Logotipos de las marcas ─────────────────────────
     Marcas gráficas en SVG monocromo, para que encajen con
     el fondo oscuro sin romper la paleta. Se insertan sobre
     los nombres que ya están en el HTML: si el JS fallara,
     los nombres siguen leyéndose igual.                     */
  var MARCAS = {
    'apple': '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.559-1.701"/></svg>',

    'google': '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"/></svg>',

    /* Xiaomi: cuadrado redondeado con las siglas MI */
    'xiaomi': '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="1.4" y="1.4" width="21.2" height="21.2" rx="6.6" fill="none" stroke="currentColor" stroke-width="1.9"/><text x="12" y="16.4" text-anchor="middle" font-family="Outfit,sans-serif" font-size="10.4" font-weight="800" letter-spacing="-.3" fill="currentColor">MI</text></svg>',

    /* Motorola: la M angular dentro de un círculo */
    'motorola': '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="10.6" fill="none" stroke="currentColor" stroke-width="1.6"/><path d="M4.9 17.2V7.4l3.75 4.9L12 8.1l3.35 4.2 3.75-4.9v9.8" fill="none" stroke="currentColor" stroke-width="2.1" stroke-linejoin="round" stroke-linecap="round"/></svg>',

    /* Samsung: su marca es el propio nombre dentro de un óvalo */
    'samsung': '<svg viewBox="0 0 62 18" aria-hidden="true" class="bmark--wide"><ellipse cx="31" cy="9" rx="30.1" ry="8.1" fill="none" stroke="currentColor" stroke-width="1.5"/><text x="31" y="12.4" text-anchor="middle" font-family="Outfit,sans-serif" font-size="9" font-weight="700" letter-spacing="-.15" fill="currentColor">SAMSUNG</text></svg>',

    /* Estas tres marcas son wordmarks: su logotipo es el nombre */
    'oppo': '<svg viewBox="0 0 38 14" aria-hidden="true" class="bmark--wide"><text x="19" y="11.4" text-anchor="middle" font-family="Outfit,sans-serif" font-size="13" font-weight="700" letter-spacing="-.6" fill="currentColor">OPPO</text></svg>',

    'realme': '<svg viewBox="0 0 42 14" aria-hidden="true" class="bmark--wide"><text x="21" y="11.4" text-anchor="middle" font-family="Outfit,sans-serif" font-size="13" font-weight="600" letter-spacing="-.5" fill="currentColor">realme</text></svg>',

    'honor': '<svg viewBox="0 0 44 14" aria-hidden="true" class="bmark--wide"><text x="22" y="11.2" text-anchor="middle" font-family="Outfit,sans-serif" font-size="11.4" font-weight="600" letter-spacing="1.2" fill="currentColor">HONOR</text></svg>'
  };

  /* En estas marcas el logotipo ya es el propio nombre, así que
     el texto se oculta a la vista y se deja solo para lectores
     de pantalla y buscadores (si no, saldría repetido). */
  var SOLO_LOGO = ['samsung', 'oppo', 'realme', 'honor'];

  document.querySelectorAll('.brands__list span').forEach(function (el) {
    var nombre = el.textContent.trim();
    var clave = nombre.toLowerCase();
    var svg = MARCAS[clave];
    if (!svg) return;

    el.classList.add('brand-chip');
    var texto = SOLO_LOGO.indexOf(clave) !== -1
      ? '<span class="sr-only">' + nombre + '</span>'
      : '<span>' + nombre + '</span>';
    el.innerHTML = '<span class="bmark">' + svg + '</span>' + texto;
  });

  /* ── 8. Barra de contacto fija en móvil ──────────────────
     Se genera desde aquí para no repetir el HTML en cada
     página. En móvil es lo primero que ve el cliente al
     terminar de leer, y lo que más contacto genera.        */
  var WA_ICON = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38c1.45.79 3.08 1.21 4.79 1.21h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2Zm4.52 12.15c-.25-.12-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.13-.16.24-.64.8-.78.97-.15.16-.29.18-.53.06-.25-.12-1.05-.39-1.99-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.01-.38.11-.5.11-.11.25-.29.37-.43.13-.15.17-.25.25-.41.08-.17.04-.31-.02-.43-.06-.12-.56-1.34-.76-1.84-.2-.48-.41-.42-.56-.43h-.48c-.16 0-.43.06-.65.31-.22.24-.85.83-.85 2.03s.87 2.35.99 2.51c.12.16 1.71 2.61 4.15 3.66.58.25 1.03.4 1.39.51.58.19 1.11.16 1.53.1.47-.07 1.47-.6 1.67-1.18.21-.58.21-1.07.15-1.18-.06-.11-.22-.17-.47-.29Z"/></svg>';
  var TEL_ICON = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2Z"/></svg>';

  if (!document.querySelector('.wa-bar')) {
    var bar = document.createElement('div');
    bar.className = 'wa-bar';

    var main = document.createElement('a');
    main.className = 'wa-bar__main';
    main.href = waUrl('Hola! Vengo desde la web y quiero información.');
    main.target = '_blank';
    main.rel = 'noopener';
    main.innerHTML = WA_ICON + '<span>Escríbenos por WhatsApp</span>';
    bar.appendChild(main);

    if (CFG.telefonoVisible) {
      var tel = document.createElement('a');
      tel.className = 'wa-bar__tel';
      tel.href = 'tel:' + CFG.telefonoVisible.replace(/\s/g, '');
      tel.setAttribute('aria-label', 'Llamar al ' + CFG.telefonoVisible);
      tel.innerHTML = TEL_ICON;
      bar.appendChild(tel);
    }

    document.body.appendChild(bar);
    setTimeout(function () { bar.classList.add('is-in'); }, 600);
  }

  /* ── 9. Burbuja de reclamo en escritorio ─────────────────
     Aparece una vez por sesión, para no cansar a quien
     navega entre varias páginas.                           */
  var yaVista = false;
  try { yaVista = sessionStorage.getItem('waTip') === '1'; } catch (e) {}

  if (!yaVista && !document.querySelector('.wa-tip')) {
    var tip = document.createElement('div');
    tip.className = 'wa-tip';
    tip.innerHTML = '<button class="wa-tip__close" aria-label="Cerrar">×</button>' +
                    '¿Dudas con tu móvil? Escríbenos, <strong>te respondemos en minutos</strong>.';
    document.body.appendChild(tip);

    setTimeout(function () { tip.classList.add('is-in'); }, 2200);

    tip.querySelector('.wa-tip__close').addEventListener('click', function (e) {
      e.stopPropagation();
      tip.remove();
      try { sessionStorage.setItem('waTip', '1'); } catch (err) {}
    });

    tip.addEventListener('click', function () {
      window.open(waUrl('Hola! Vengo desde la web y quiero información.'), '_blank', 'noopener');
      try { sessionStorage.setItem('waTip', '1'); } catch (err) {}
    });

    // Se retira sola tras un rato para no estorbar
    setTimeout(function () {
      if (document.body.contains(tip)) {
        tip.classList.remove('is-in');
        setTimeout(function () { tip.remove(); }, 500);
      }
    }, 14000);
  }

  /* ── 10. Comparador antes / después ──────────────────────
     Funciona con ratón, con el dedo y con las flechas del
     teclado. Si mañana se cambian los <img> por fotos
     reales, no hay que tocar nada de aquí.                 */
  document.querySelectorAll('.ba').forEach(function (ba) {
    var usado = false;

    function fijar(pct) {
      pct = Math.max(0, Math.min(100, pct));
      ba.style.setProperty('--pos', pct + '%');
      ba.setAttribute('aria-valuenow', Math.round(pct));
      ba.setAttribute('aria-valuetext', Math.round(pct) + '% visible del después');
      if (!usado) { usado = true; ba.classList.add('is-used'); }
    }

    function desdeEvento(e) {
      var r = ba.getBoundingClientRect();
      var x = (e.touches ? e.touches[0].clientX : e.clientX) - r.left;
      fijar((x / r.width) * 100);
    }

    var arrastrando = false;

    ba.addEventListener('pointerdown', function (e) {
      arrastrando = true;
      ba.classList.add('is-drag');
      ba.setPointerCapture && ba.setPointerCapture(e.pointerId);
      desdeEvento(e);
    });
    ba.addEventListener('pointermove', function (e) {
      if (arrastrando) { e.preventDefault(); desdeEvento(e); }
    });
    ['pointerup', 'pointercancel', 'pointerleave'].forEach(function (ev) {
      ba.addEventListener(ev, function () { arrastrando = false; ba.classList.remove('is-drag'); });
    });

    // Con el teclado: flechas mueven de 4 en 4, Inicio y Fin a los extremos
    ba.addEventListener('keydown', function (e) {
      var actual = parseFloat(ba.style.getPropertyValue('--pos')) || 50;
      if (e.key === 'ArrowLeft')  { fijar(actual - 4); e.preventDefault(); }
      if (e.key === 'ArrowRight') { fijar(actual + 4); e.preventDefault(); }
      if (e.key === 'Home')       { fijar(0);   e.preventDefault(); }
      if (e.key === 'End')        { fijar(100); e.preventDefault(); }
    });

    // Pequeño vaivén al entrar en pantalla, para que se vea que se puede mover
    if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      var visto = false;
      new IntersectionObserver(function (entradas, obs) {
        entradas.forEach(function (en) {
          if (!en.isIntersecting || visto) return;
          visto = true;
          obs.disconnect();
          var pasos = [50, 62, 38, 50];
          pasos.forEach(function (p, i) {
            setTimeout(function () {
              ba.style.transition = 'none';
              ba.style.setProperty('--pos', p + '%');
            }, 500 + i * 420);
          });
        });
      }, { threshold: 0.4 }).observe(ba);
    }
  });

  /* ── 10b. Pestañas del comparador ────────────────────────
     Cambia el par de imágenes y el texto según la
     reparación elegida.                                    */
  var REPARACIONES = {
    pantalla: {
      antes: 'assets/img/ejemplo-antes.svg',
      despues: 'assets/img/ejemplo-despues.svg',
      altA: 'Móvil con la pantalla rota y agrietada, antes de repararla',
      altB: 'El mismo móvil con la pantalla nueva, después de la reparación'
    },
    bateria: {
      antes: 'assets/img/ejemplo-bateria-antes.svg',
      despues: 'assets/img/ejemplo-bateria-despues.svg',
      altA: 'Batería hinchada que levanta la carcasa del móvil',
      altB: 'Batería nueva instalada y terminal cerrado correctamente'
    },
    conector: {
      antes: 'assets/img/ejemplo-conector-antes.svg',
      despues: 'assets/img/ejemplo-conector-despues.svg',
      altA: 'Conector de carga lleno de pelusa y suciedad',
      altB: 'Conector limpio, con los contactos en buen estado'
    },
    agua: {
      antes: 'assets/img/ejemplo-agua-antes.svg',
      despues: 'assets/img/ejemplo-agua-despues.svg',
      altA: 'Placa base con corrosión y restos de sales por daño de agua',
      altB: 'Placa base limpia tras el tratamiento'
    }
  };

  var pestanas = document.querySelectorAll('.ba-tab');
  if (pestanas.length) {
    var imgA = document.getElementById('baAntes');
    var imgB = document.getElementById('baDespues');
    var caja = document.getElementById('ba1');

    // Precargamos para que el cambio sea instantáneo
    Object.keys(REPARACIONES).forEach(function (k) {
      [REPARACIONES[k].antes, REPARACIONES[k].despues].forEach(function (u) {
        var i = new Image(); i.src = u;
      });
    });

    pestanas.forEach(function (tab) {
      tab.addEventListener('click', function () {
        var clave = tab.getAttribute('data-ba');
        var r = REPARACIONES[clave];
        if (!r) return;

        pestanas.forEach(function (t) {
          var on = (t === tab);
          t.classList.toggle('is-on', on);
          t.setAttribute('aria-selected', on ? 'true' : 'false');
        });
        document.querySelectorAll('.ba-panel').forEach(function (p) {
          p.classList.toggle('is-on', p.getAttribute('data-panel') === clave);
        });

        caja.classList.add('is-swap');
        setTimeout(function () {
          imgA.src = r.antes;  imgA.alt = r.altA;
          imgB.src = r.despues; imgB.alt = r.altB;
          caja.style.setProperty('--pos', '50%');
          caja.classList.remove('is-swap');
          if (window.retraducir) window.retraducir();
        }, 300);
      });
    });
  }

  /* ── 10c. Calculadora de presupuesto ─────────────────────
     Asistente de 3 pasos que termina en un precio orientativo
     y un mensaje de WhatsApp ya redactado.                 */
  var calcMarcas = document.getElementById('calcMarcas');
  if (calcMarcas && CFG.tarifas) {
    var TAR = CFG.tarifas;
    var elegido = { marca: null, modelo: null, gama: null, averia: null };

    var avisoCalc = document.getElementById('calcAviso');
    if (avisoCalc && !TAR.preciosConfirmados) avisoCalc.hidden = false;

    function irAPaso(n) {
      document.querySelectorAll('.calc-pane').forEach(function (p) {
        p.classList.toggle('is-on', p.getAttribute('data-pane') === String(n));
      });
      document.querySelectorAll('.calc-step').forEach(function (s) {
        var i = parseInt(s.getAttribute('data-paso'), 10);
        s.classList.toggle('is-on', i === n);
        s.classList.toggle('is-done', i < n);
      });
      var caja = document.querySelector('.calc');
      var arriba = caja.getBoundingClientRect().top + window.scrollY - 110;
      if (window.scrollY > arriba) window.scrollTo({ top: arriba, behavior: 'smooth' });
    }

    // Paso 1: marcas
    calcMarcas.innerHTML = TAR.marcas.map(function (m) {
      return '<button class="calc-opt" data-marca="' + m.id + '"><i>' + m.icono + '</i>' + m.nombre + '</button>';
    }).join('');

    calcMarcas.addEventListener('click', function (e) {
      var b = e.target.closest('[data-marca]');
      if (!b) return;
      var m = TAR.marcas.filter(function (x) { return x.id === b.getAttribute('data-marca'); })[0];
      elegido.marca = m;
      document.getElementById('calcModelos').innerHTML = m.modelos.map(function (mo, i) {
        return '<button class="calc-opt" data-modelo="' + i + '"><i>📱</i><span>' + mo.n +
               '<small>' + (TAR.gamas[mo.g] || '') + '</small></span></button>';
      }).join('');
      irAPaso(2);
    });

    // Paso 2: modelos
    document.getElementById('calcModelos').addEventListener('click', function (e) {
      var b = e.target.closest('[data-modelo]');
      if (!b) return;
      var mo = elegido.marca.modelos[parseInt(b.getAttribute('data-modelo'), 10)];
      elegido.modelo = mo.n; elegido.gama = mo.g;
      document.getElementById('calcAverias').innerHTML = TAR.averias.map(function (a) {
        return '<button class="calc-opt" data-averia="' + a.id + '"><i>' + a.icono + '</i>' + a.nombre + '</button>';
      }).join('');
      irAPaso(3);
    });

    // Paso 3: avería → resultado
    document.getElementById('calcAverias').addEventListener('click', function (e) {
      var b = e.target.closest('[data-averia]');
      if (!b) return;
      var a = TAR.averias.filter(function (x) { return x.id === b.getAttribute('data-averia'); })[0];
      elegido.averia = a;
      pintarResultado();
      irAPaso(4);
    });

    function pintarResultado() {
      var a = elegido.averia;
      var rango = a.rangos ? a.rangos[elegido.gama] : null;
      var msg = 'Hola! Vengo de la calculadora de la web. Mi móvil es un ' +
                elegido.marca.nombre + ' ' + elegido.modelo + ' y ' +
                a.nombre.toLowerCase() + '.';

      var precioHtml = rango
        ? '<div class="calc-precio">' + rango[0] + ' € – ' + rango[1] + ' €</div>' +
          '<p style="color:var(--muted); font-size:.92rem; margin-bottom:18px">' +
          'Precio orientativo para ' + (TAR.gamas[elegido.gama] || '') .toLowerCase() +
          '. El precio cerrado te lo damos al ver el terminal.</p>'
        : '<div class="calc-precio calc-precio--consultar">Hay que verlo antes</div>' +
          '<p style="color:var(--muted); font-size:.92rem; margin-bottom:18px">' +
          'Esta avería no tiene precio cerrado de antemano.</p>';

      document.getElementById('calcRes').innerHTML =
        '<div class="calc-res__top">' +
          '<span class="calc-res__ico">' + a.icono + '</span>' +
          '<span class="calc-res__what"><b>' + elegido.marca.nombre + ' ' + elegido.modelo + '</b>' +
          '<span>' + a.nombre + '</span></span>' +
        '</div>' +
        precioHtml +
        '<span class="calc-res__plazo">🕐 ' + a.plazo + '</span>' +
        (a.nota ? '<div class="calc-res__nota">' + a.nota + '</div>' : '') +
        '<div class="calc-res__acciones">' +
          '<a class="btn btn--wa btn--lg" target="_blank" rel="noopener" href="' + waUrl(msg) + '">' +
            'Confirmar precio por WhatsApp</a>' +
          '<a class="btn btn--ghost btn--lg" href="contacto.html#como-llegar">Cómo llegar a la tienda</a>' +
        '</div>';
      if (window.retraducir) window.retraducir();
    }

    document.querySelectorAll('.calc-back').forEach(function (b) {
      b.addEventListener('click', function () { irAPaso(parseInt(b.getAttribute('data-volver'), 10)); });
    });
  }

  /* ── 10d. ¿Qué móvil me compro? ──────────────────────────
     No recomendamos modelos concretos a propósito: el stock
     cambia. Recomendamos QUÉ BUSCAR, que es lo que de verdad
     ayuda, y el cliente pregunta por WhatsApp qué hay.      */
  var qmPresu = document.getElementById('qmPresu');
  if (qmPresu) {
    var qmSalida = document.getElementById('qmSalida');
    var qmUsos   = document.getElementById('qmUsos');
    var qmRes    = document.getElementById('qmResultado');

    function pintarSlider() {
      var pct = ((qmPresu.value - qmPresu.min) / (qmPresu.max - qmPresu.min)) * 100;
      qmPresu.style.setProperty('--fill', pct + '%');
      qmSalida.textContent = qmPresu.value + ' €';
    }

    function perfil(p) {
      if (p < 200)  return { id:'basica', nom:'Gama básica',      rango:'150 – 200 €' };
      if (p < 350)  return { id:'media',  nom:'Gama media',       rango:'200 – 350 €' };
      if (p < 600)  return { id:'media+', nom:'Gama media alta',  rango:'350 – 600 €' };
      return              { id:'alta',   nom:'Gama alta',        rango:'600 € en adelante' };
    }

    var CONSEJOS = {
      basica: {
        titulo: 'Cumple de sobra para el día a día',
        texto: 'Para llamar, WhatsApp, fotos normales y redes sociales, un móvil de este precio va perfecto. Prioriza batería grande y 128 GB de memoria.',
        buscar: ['Batería de 5000 mAh o más', '128 GB de almacenamiento', 'Marca conocida con recambios fáciles']
      },
      media: {
        titulo: 'El punto dulce de calidad y precio',
        texto: 'Aquí está la mayoría de la gente y con razón: rinde bien en todo, la cámara cumple y le sacas varios años. Es lo que más vendemos.',
        buscar: ['Pantalla AMOLED si puedes', '128 o 256 GB', 'Al menos 3 años de actualizaciones']
      },
      'media+': {
        titulo: 'Notarás el salto en cámara y pantalla',
        texto: 'A partir de aquí se nota sobre todo en fotos con poca luz, en vídeo y en acabados. Merece la pena si haces muchas fotos o lo usas para trabajar.',
        buscar: ['Buena cámara con estabilización', 'Carga rápida', '256 GB si haces muchas fotos o vídeo']
      },
      alta: {
        titulo: 'Lo mejor, pero pregúntate si lo necesitas',
        texto: 'Rinde de maravilla y dura más años actualizado. Pero sé honesto contigo: si no juegas ni haces fotos en serio, con menos dinero vas igual de bien.',
        buscar: ['Máximo rendimiento y cámara', 'Muchos años de actualizaciones', 'Resistencia al agua certificada']
      }
    };

    var POR_USO = {
      fotos:   { t:'📷 Como haces muchas fotos', d:'Fíjate más en la estabilización y en cómo queda de noche que en los megapíxeles. Y coge 256 GB: las fotos ocupan.' },
      juegos:  { t:'🎮 Como juegas', d:'Aquí sí importa el procesador y que el móvil disipe bien el calor. Mira también que tenga pantalla de 120 Hz.' },
      bateria: { t:'🔋 Como quieres que aguante', d:'Busca 5000 mAh o más. Y ojo: una pantalla muy grande y muy brillante gasta más, aunque la batería sea grande.' },
      video:   { t:'🎬 Como ves series', d:'Pantalla AMOLED y buen altavoz estéreo. Se nota mucho más que un procesador más potente.' },
      trabajo: { t:'💼 Como lo usas para trabajar', d:'Prioriza batería, que llegue al final del día, y años de actualizaciones de seguridad.' },
      basico:  { t:'💬 Como es para lo básico', d:'No te dejes convencer para gastar de más. Con gama media vas sobrado y te durará igual.' }
    };

    function recomendar() {
      var p = parseInt(qmPresu.value, 10);
      var perf = perfil(p);
      var c = CONSEJOS[perf.id];
      var usos = [].slice.call(qmUsos.querySelectorAll('input:checked')).map(function (i) { return i.value; });

      document.getElementById('qmTitulo').textContent = c.titulo;
      document.getElementById('qmSub').textContent =
        'Con unos ' + p + ' € estás en ' + perf.nom.toLowerCase() + '. Esto es lo que miraríamos nosotros.';

      var tarjetas = [
        '<div class="qm-card qm-card--top">' +
          '<span class="qm-card__badge">Tu perfil</span>' +
          '<h4>' + perf.nom + '</h4>' +
          '<div class="qm-card__precio">' + perf.rango + '</div>' +
          '<p>' + c.texto + '</p>' +
          '<ul class="ticks">' + c.buscar.map(function (b) { return '<li>' + b + '</li>'; }).join('') + '</ul>' +
        '</div>'
      ];

      // Consejos según el uso marcado (máximo 2 para no abrumar)
      usos.slice(0, 2).forEach(function (u) {
        var o = POR_USO[u];
        if (!o) return;
        tarjetas.push(
          '<div class="qm-card">' +
            '<span class="qm-card__badge">Por tu uso</span>' +
            '<h4>' + o.t + '</h4>' +
            '<p>' + o.d + '</p>' +
          '</div>');
      });

      // Si no ha marcado nada, damos un consejo general útil
      if (usos.length === 0) {
        tarjetas.push(
          '<div class="qm-card">' +
            '<span class="qm-card__badge">Consejo</span>' +
            '<h4>🤝 Marca arriba para qué lo usas</h4>' +
            '<p>Así afinamos la recomendación. Y si tienes dudas, tráete el móvil viejo y lo vemos juntos en la tienda.</p>' +
          '</div>');
      }
      if (tarjetas.length === 2) {
        tarjetas.push(
          '<div class="qm-card">' +
            '<span class="qm-card__badge">Siempre</span>' +
            '<h4>🛡️ Piensa en la funda desde el día uno</h4>' +
            '<p>Una funda y un protector cuestan una fracción de lo que cuesta cambiar una pantalla. Es el mejor dinero que vas a gastar.</p>' +
          '</div>');
      }

      document.getElementById('qmCards').innerHTML = tarjetas.join('');

      var msg = 'Hola! Estoy mirando móviles. Mi presupuesto es de unos ' + p + ' €' +
                (usos.length ? ' y lo quiero sobre todo para: ' + usos.map(function (u) {
                  return { fotos:'fotos', juegos:'juegos', bateria:'que dure la batería',
                           video:'ver series', trabajo:'trabajo', basico:'lo básico' }[u];
                }).join(', ') : '') + '. ¿Qué tenéis disponible?';
      document.getElementById('qmWa').href = waUrl(msg);

      qmRes.hidden = false;
      if (window.retraducir) window.retraducir();
    }

    pintarSlider();
    qmPresu.addEventListener('input', function () { pintarSlider(); recomendar(); });
    qmUsos.addEventListener('change', recomendar);
    recomendar();
  }

  /* ── 11. Barra de progreso de lectura ─────────────────── */
  var progreso = document.createElement('div');
  progreso.className = 'progress';
  progreso.innerHTML = '<span></span>';
  document.body.appendChild(progreso);
  var barra = progreso.firstChild;

  function pintarProgreso() {
    var alto = document.documentElement.scrollHeight - window.innerHeight;
    var pct = alto > 0 ? (window.scrollY / alto) * 100 : 0;
    barra.style.width = Math.min(100, Math.max(0, pct)) + '%';
  }
  pintarProgreso();
  window.addEventListener('scroll', pintarProgreso, { passive: true });
  window.addEventListener('resize', pintarProgreso);

  /* ── 12. Contadores que suben al aparecer ──────────────── */
  var contadores = document.querySelectorAll('[data-contador]');
  if (contadores.length && 'IntersectionObserver' in window) {
    var ioNum = new IntersectionObserver(function (entradas) {
      entradas.forEach(function (en) {
        if (!en.isIntersecting) return;
        ioNum.unobserve(en.target);
        var el = en.target;
        var destino = parseFloat(el.getAttribute('data-contador'));
        var decimales = (el.getAttribute('data-decimales') | 0);
        var sufijo = el.getAttribute('data-sufijo') || '';
        var dur = 1400, ini = performance.now();

        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
          el.textContent = destino.toFixed(decimales).replace('.', ',') + sufijo;
          return;
        }
        (function paso(ahora) {
          var t = Math.min(1, (ahora - ini) / dur);
          var suave = 1 - Math.pow(1 - t, 3);   // desacelera al final
          el.textContent = (destino * suave).toFixed(decimales).replace('.', ',') + sufijo;
          if (t < 1) requestAnimationFrame(paso);
        })(ini);
      });
    }, { threshold: 0.5 });
    contadores.forEach(function (c) { ioNum.observe(c); });
  }

  /* ── 11b. Fondo temático según la página ─────────────────
     Cada página reparte por el fondo iconos relacionados con
     su contenido. Son decorativos y muy tenues.            */
  var TEMAS = {
    'index':        ['📱','🔧','🌐','🎮','🎧','📦','⚡','💬'],
    'servicios':    ['📱','🎧','🔌','💳','🎮','🧳','🎨','🎒'],
    'reparaciones': ['🔧','🔩','⚙️','🔋','📵','🪛','💡','🧰'],
    'fibra':        ['🌐','📶','📡','💶','🔗','📊','🏠','📞'],
    'vinted':       ['📦','🏷️','✉️','📬','🛍️','🚚','📮','🎁'],
    'tienda':       ['🏬','🛍️','🎧','🧳','📱','✨','🎮','🎒'],
    'consejos':     ['💡','🔋','💧','📵','🌐','📖','✅','⭐'],
    'preguntas':    ['❓','💬','📖','✅','🤔','💡','📋','🔍'],
    'contacto':     ['📍','🚗','🚌','🚶','🕐','📞','💬','🗺️'],
    'error':        ['🔧','❓','📵','🔍','💬','🧭','📱','⚠️']
  };

  function detectarTema() {
    var p = (location.pathname.split('/').pop() || 'index.html').toLowerCase();
    if (p.indexOf('reparar') === 0 || p.indexOf('cambiar') === 0 || p.indexOf('reparaciones') === 0) return 'reparaciones';
    if (p.indexOf('fibra') === 0) return 'fibra';
    if (p.indexOf('vinted') === 0) return 'vinted';
    if (p.indexOf('tienda') === 0) return 'tienda';
    if (p.indexOf('consejos') === 0) return 'consejos';
    if (p.indexOf('preguntas') === 0) return 'preguntas';
    if (p.indexOf('contacto') === 0) return 'contacto';
    if (p.indexOf('servicios') === 0) return 'servicios';
    if (p.indexOf('404') === 0) return 'error';
    return 'index';
  }

  if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    var iconos = TEMAS[detectarTema()] || TEMAS.index;
    var semilla = 7;
    function az() { semilla = (semilla * 9301 + 49297) % 233280; return semilla / 233280; }

    document.querySelectorAll('.section, .phero').forEach(function (sec, idx) {
      if (sec.querySelector('.tema')) return;
      var capa = document.createElement('div');
      capa.className = 'tema';
      capa.setAttribute('aria-hidden', 'true');
      var cuantos = 5;
      var html = '';
      for (var i = 0; i < cuantos; i++) {
        var ic = iconos[(idx * 3 + i) % iconos.length];
        var top = 6 + az() * 80;
        var left = 3 + az() * 92;
        var size = 34 + az() * 62;
        var rot = -22 + az() * 44;
        var dur = 16 + az() * 14;
        var del = -az() * 12;
        html += '<span style="top:' + top.toFixed(1) + '%; left:' + left.toFixed(1) + '%;' +
                ' font-size:' + size.toFixed(0) + 'px; --rot:' + rot.toFixed(0) + 'deg;' +
                ' --dur:' + dur.toFixed(1) + 's; --del:' + del.toFixed(1) + 's">' + ic + '</span>';
      }
      capa.innerHTML = html;
      sec.insertBefore(capa, sec.firstChild);
    });
  }

  /* ── 11c. Inclinación suave de las tarjetas ───────────── */
  if (window.matchMedia('(hover: hover)').matches &&
      !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    document.querySelectorAll('.svc, .post-card, .fact, .vstep').forEach(function (t) {
      t.classList.add('tilt');
      t.addEventListener('pointermove', function (e) {
        var r = t.getBoundingClientRect();
        var x = (e.clientX - r.left) / r.width - 0.5;
        var y = (e.clientY - r.top) / r.height - 0.5;
        t.style.transform = 'perspective(760px) rotateY(' + (x * 5).toFixed(2) + 'deg) rotateX(' +
                            (-y * 5).toFixed(2) + 'deg) translateY(-7px)';
      });
      t.addEventListener('pointerleave', function () { t.style.transform = ''; });
    });
  }

  /* ── 11d. Botón de volver arriba ─────────────────────── */
  var arriba = document.createElement('button');
  arriba.className = 'top-btn';
  arriba.setAttribute('aria-label', 'Volver arriba');
  arriba.innerHTML = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 8l6 6H6z"/></svg>';
  document.body.appendChild(arriba);
  arriba.addEventListener('click', function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
  window.addEventListener('scroll', function () {
    arriba.classList.toggle('is-in', window.scrollY > 700);
  }, { passive: true });

  /* ── 12a. Cinta de compromisos ───────────────────────────
     Basta con poner <div class="marquee" data-marquee></div>
     en cualquier página y aquí se rellena sola.            */
  var COMPROMISOS = [
    ['🛡️', 'Garantía por escrito', 'en cada reparación'],
    ['🕐', 'Muchas averías', 'en el mismo día'],
    ['📝', 'Presupuesto cerrado', 'antes de tocar nada'],
    ['🆓', 'Diagnóstico gratis', 'sin compromiso'],
    ['🏬', 'Tienda física', 'en Benalmádena'],
    ['⭐', '4,9 en Google', 'con 223 opiniones'],
    ['💳', 'Pago en efectivo', 'o con tarjeta'],
    ['📦', 'Punto Vinted Go', 'entrega y recogida']
  ];

  document.querySelectorAll('[data-marquee]').forEach(function (m) {
    var grupo = COMPROMISOS.map(function (c) {
      return '<span class="marquee__item"><i>' + c[0] + '</i>' + c[1] +
             ' <em>' + c[2] + '</em></span><span class="marquee__sep"></span>';
    }).join('');
    // Se duplica el grupo para que el bucle no tenga costuras
    m.innerHTML = '<div class="marquee__track">' +
                  '<div class="marquee__group">' + grupo + '</div>' +
                  '<div class="marquee__group" aria-hidden="true">' + grupo + '</div>' +
                  '</div>';
  });

  /* ── 12b. Índice del blog: marca el artículo que se lee ── */
  var indice = document.querySelectorAll('.post-nav a');
  if (indice.length && 'IntersectionObserver' in window) {
    var ioPost = new IntersectionObserver(function (entradas) {
      entradas.forEach(function (en) {
        if (!en.isIntersecting) return;
        var id = en.target.id;
        indice.forEach(function (a) {
          a.classList.toggle('is-current', a.getAttribute('href') === '#' + id);
        });
      });
    }, { rootMargin: '-15% 0px -70% 0px' });
    document.querySelectorAll('.post[id]').forEach(function (p) { ioPost.observe(p); });
  }

  /* ── 13. Banner de ofertas (se configura en config.js) ─── */
  var oferta = CFG.oferta;
  if (oferta && oferta.activa) {
    var yaCerrado = false;
    var clave = 'oferta:' + (oferta.id || 'x');
    try { yaCerrado = localStorage.getItem(clave) === '1'; } catch (e) {}

    if (!yaCerrado) {
      var b = document.createElement('div');
      b.className = 'promo';
      b.innerHTML =
        '<div class="promo__in">' +
          '<span class="promo__tag">' + (oferta.etiqueta || 'Oferta') + '</span>' +
          '<span class="promo__txt">' + oferta.texto + '</span>' +
          (oferta.textoBoton ? '<a class="promo__btn" target="_blank" rel="noopener" href="' +
              waUrl(oferta.mensajeWhatsapp || oferta.texto) + '">' + oferta.textoBoton + '</a>' : '') +
          '<button class="promo__x" aria-label="Cerrar aviso de oferta">&times;</button>' +
        '</div>';
      document.body.insertBefore(b, document.body.firstChild);
      requestAnimationFrame(function () { b.classList.add('is-in'); });

      b.querySelector('.promo__x').addEventListener('click', function (e) {
        e.stopPropagation();
        b.classList.remove('is-in');
        setTimeout(function () { b.remove(); }, 400);
        try { localStorage.setItem(clave, '1'); } catch (e2) {}
      });

      // En móvil el botón se oculta para ahorrar espacio, así que
      // toda la barra hace de enlace.
      b.addEventListener('click', function (e) {
        if (e.target.closest('.promo__x') || e.target.closest('.promo__btn')) return;
        window.open(waUrl(oferta.mensajeWhatsapp || oferta.texto), '_blank', 'noopener');
      });
    }
  }
})();
