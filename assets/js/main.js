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
    if (abierto) {
      txt.textContent = 'Abierto ahora · cerramos a las ' + cierra;
    } else {
      // Buscamos la siguiente apertura
      var prox = null;
      for (var i = 0; i < 7 && !prox; i++) {
        var d = (hoy + i) % 7;
        var dia = H[d];
        if (!dia || !dia.tramos.length) continue;
        for (var j = 0; j < dia.tramos.length; j++) {
          var ini = dia.tramos[j][0];
          if (i > 0 || minutos(ini) > min) {
            prox = (i === 0 ? 'hoy' : i === 1 ? 'mañana' : 'el ' + dia.etiqueta.toLowerCase()) + ' a las ' + ini;
            break;
          }
        }
      }
      txt.textContent = 'Cerrado ahora' + (prox ? ' · abrimos ' + prox : '') + ' — escríbenos por WhatsApp';
      if (dot) dot.classList.add('is-closed');
    }
  }

  /* ── 4. Menú móvil ───────────────────────────────────── */
  var burger = document.getElementById('burger');
  var nav = document.getElementById('nav');
  var header = document.getElementById('header');

  function posicionaNav() {
    if (header) document.documentElement.style.setProperty('--navtop', header.getBoundingClientRect().bottom + 'px');
  }
  posicionaNav();
  window.addEventListener('resize', posicionaNav);
  window.addEventListener('scroll', posicionaNav, { passive: true });

  if (burger && nav) {
    burger.addEventListener('click', function () {
      var abiertoNav = nav.classList.toggle('is-open');
      burger.setAttribute('aria-expanded', abiertoNav ? 'true' : 'false');
    });
    nav.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () {
        nav.classList.remove('is-open');
        burger.setAttribute('aria-expanded', 'false');
      });
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
})();
