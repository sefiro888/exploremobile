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
})();
