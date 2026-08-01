/* ═══════════════════════════════════════════════════════════
   TRADUCCIÓN DE LA WEB  ·  español · English · français · Deutsch
   ═══════════════════════════════════════════════════════════
   Cómo funciona: el español es el idioma original de la web.
   Aquí solo se listan las traducciones, usando la frase en
   español como clave. Al cambiar de idioma se recorren los
   textos de la página y se sustituyen.

   PARA AÑADIR UNA TRADUCCIÓN NUEVA:
   busca el bloque del idioma y añade una línea con la frase
   en español a la izquierda y su traducción a la derecha.
   Lo que no esté traducido se queda en español, sin romper nada.
   ═══════════════════════════════════════════════════════════ */
(function () {
  'use strict';

  /* ── Banderas (SVG, sin imágenes externas) ─────────────── */
  var BANDERAS = {
    es: '<svg viewBox="0 0 60 40" aria-hidden="true"><rect width="60" height="40" fill="#AA151B"/><rect y="10" width="60" height="20" fill="#F1BF00"/></svg>',
    en: '<svg viewBox="0 0 60 40" aria-hidden="true">' +
        '<clipPath id="ukc"><path d="M30,20 h30 v20 z v20 h-30 z h-30 v-20 z v-20 h30 z"/></clipPath>' +
        '<rect width="60" height="40" fill="#012169"/>' +
        '<path d="M0,0 L60,40 M60,0 L0,40" stroke="#fff" stroke-width="8"/>' +
        '<path d="M0,0 L60,40 M60,0 L0,40" clip-path="url(#ukc)" stroke="#C8102E" stroke-width="5"/>' +
        '<path d="M30,0 v40 M0,20 h60" stroke="#fff" stroke-width="13"/>' +
        '<path d="M30,0 v40 M0,20 h60" stroke="#C8102E" stroke-width="8"/></svg>',
    fr: '<svg viewBox="0 0 60 40" aria-hidden="true"><rect width="60" height="40" fill="#fff"/><rect width="20" height="40" fill="#002395"/><rect x="40" width="20" height="40" fill="#ED2939"/></svg>',
    de: '<svg viewBox="0 0 60 40" aria-hidden="true"><rect width="60" height="40" fill="#000"/><rect y="13.33" width="60" height="13.33" fill="#DD0000"/><rect y="26.66" width="60" height="13.34" fill="#FFCE00"/></svg>'
  };

  var IDIOMAS = [
    { cod: 'es', nombre: 'Español',  corto: 'ES', htmlLang: 'es' },
    { cod: 'en', nombre: 'English',  corto: 'EN', htmlLang: 'en' },
    { cod: 'fr', nombre: 'Français', corto: 'FR', htmlLang: 'fr' },
    { cod: 'de', nombre: 'Deutsch',  corto: 'DE', htmlLang: 'de' }
  ];

  /* ═══ TRADUCCIONES ═══════════════════════════════════════ */
  var T = {
    en: {
      /* Menú y cabecera */
      'Servicios': 'Services', 'Reparaciones': 'Repairs', 'Fibra': 'Internet',
      'Fibra y tarifas': 'Internet & plans', 'Tienda': 'Our shop', 'Consejos': 'Tips',
      'Preguntas': 'FAQ', 'Contacto': 'Contact', 'Inicio': 'Home',
      'Punto Vinted Go · Reparaciones en el día': 'Vinted Go point · Same-day repairs',
      'Comprobando horario…': 'Checking opening hours…',
      'Abierto ahora': 'Open now', 'Cerrado ahora': 'Closed now',

      /* Portada */
      'Tienda física': 'Local shop',
      'Móviles · Reparación · Fibra · Gaming': 'Phones · Repairs · Internet · Gaming',
      'Tu móvil, en': 'Your phone, in',
      'las mejores manos': 'the best hands',
      'Venta de móviles, fundas y accesorios, reparaciones con garantía, contratación de fibra y tarifas móviles, tarjetas prepago y videojuegos. Todo en un mismo sitio y con trato de persona a persona.':
        'Phone sales, cases and accessories, guaranteed repairs, home internet and mobile plans, prepaid SIM cards and video games. All in one place, with someone who actually talks to you.',
      'Escríbenos por WhatsApp': 'Message us on WhatsApp',
      'Ver reparaciones': 'See repairs',
      'Mismo día': 'Same day', 'en averías comunes': 'for common faults',
      'Garantía': 'Warranty', 'en cada reparación': 'on every repair',
      'Presupuesto': 'Free quote', 'gratis y sin compromiso': 'no obligation',
      'Consulta rápida': 'Quick enquiry',
      '¿Qué necesitas hoy?': 'What do you need today?',
      'Pantalla rota': 'Broken screen', 'Batería': 'Battery',
      'Comprar móvil': 'Buy a phone', 'Fibra / tarifas': 'Internet / plans',
      'Funda / accesorio': 'Case / accessory', 'Videojuegos': 'Video games',
      'Te respondemos por WhatsApp con el presupuesto y el plazo.': 'We reply on WhatsApp with the price and how long it takes.',
      'Trabajamos con': 'We work with',
      'opiniones en Google': 'Google reviews',

      /* Servicios */
      'Qué ofrecemos': 'What we offer',
      'Todo lo que tu móvil necesita,': 'Everything your phone needs,',
      'en una sola tienda': 'all in one shop',
      'Cada servicio tiene su propia página con todos los detalles. Elige el que te interesa.':
        'Each service has its own page with full details. Pick the one you need.',
      'Venta de móviles': 'Phone sales',
      'Terminales nuevos y reacondicionados de las principales marcas, con asesoramiento honesto.':
        'New and refurbished handsets from the main brands, with honest advice.',
      'Ver la tienda de móviles →': 'See phones →',
      'Reparación de móviles': 'Phone repairs',
      'Pantallas, baterías, conectores, cámaras y más. Diagnóstico gratuito y garantía por escrito.':
        'Screens, batteries, charging ports, cameras and more. Free diagnosis and written warranty.',
      'Ver averías y proceso →': 'See faults and process →',
      'Fundas y accesorios': 'Cases and accessories',
      'Fundas, protectores, cargadores, auriculares, powerbanks y accesorios gaming en stock.':
        'Cases, screen protectors, chargers, headphones, power banks and gaming accessories in stock.',
      'Ver accesorios →': 'See accessories →',
      'Fibra y tarifas móviles': 'Home internet and mobile plans',
      'Comparamos operadores y gestionamos tu portabilidad. Traes tu factura, la revisamos contigo.':
        'We compare providers and handle the switch for you. Bring your bill and we will go through it together.',
      'Comparar mi tarifa →': 'Compare my plan →',
      'Tarjetas prepago': 'Prepaid SIM cards',
      'Altas al momento y recargas de todos los operadores, sin permanencia.':
        'Instant activation and top-ups for all providers, no contract.',
      'Ver prepago →': 'See prepaid →',
      'Juegos, mandos y accesorios gaming. Novedades y clásicos en tienda física.':
        'Games, controllers and gaming accessories. New releases and classics in store.',
      'Visitar la tienda →': 'Visit the shop →',

      /* Por qué nosotros */
      'Por qué nosotros': 'Why us',
      'Tienda de barrio,': 'A local shop,',
      'servicio de primera': 'with first-class service',
      'Te atendemos nosotros': 'You deal with us',
      'Nada de call centers. Hablas con la persona que va a reparar o vender tu móvil.':
        'No call centres. You speak to the person who will actually repair or sell you the phone.',
      'Presupuesto cerrado': 'Fixed price',
      'Sabes lo que vas a pagar antes de dejar el terminal. Sin ampliaciones raras.':
        'You know what you will pay before leaving your phone. No surprise extras.',
      'Garantía por escrito': 'Written warranty',
      'Cada reparación sale con su garantía. Si algo falla, vuelves y lo resolvemos.':
        'Every repair comes with a warranty. If something fails, come back and we sort it.',
      'Estamos aquí mañana, pasado y el año que viene. Puedes venir a mirarnos a la cara.':
        'We will be here tomorrow, next week and next year. You can come and look us in the eye.',

      /* Opiniones */
      'Opiniones': 'Reviews',
      'Lo que dicen nuestros clientes': 'What our customers say',
      'sobre 5': 'out of 5',
      'reseñas verificadas en Google': 'verified Google reviews',

      /* Reparaciones */
      'Dinos qué le pasa': 'Tell us what is wrong',
      'y te decimos qué cuesta': 'and we will tell you the price',
      'Mándanos una foto por WhatsApp con la marca y el modelo. Te contestamos con precio y plazo reales, sin sorpresas al recoger el móvil.':
        'Send us a photo on WhatsApp with the make and model. We reply with a real price and timeframe, no surprises when you collect it.',
      'Averías más comunes': 'Most common faults',
      'Toca la tuya y cuéntanos el modelo': 'Tap yours and tell us your model',
      'Batería que no dura': 'Battery does not last',
      'No carga / conector': 'Not charging / port',
      'Cámara': 'Camera', 'Mojado': 'Water damage',
      'Altavoz / micro': 'Speaker / microphone',
      'Software / no arranca': 'Software / will not start',
      'Recuperar datos': 'Data recovery',
      'Cómo funciona': 'How it works',
      'De la avería al móvil arreglado': 'From fault to fixed phone',
      'Nos escribes': 'You message us',
      'Diagnóstico y presupuesto': 'Diagnosis and quote',
      'Reparado y con garantía': 'Repaired, with warranty',
      'Antes y después': 'Before and after',
      'De pantalla destrozada': 'From smashed screen',
      'a móvil como nuevo': 'to a phone like new',
      'Arrastra la barra para ver la diferencia. Así queda un terminal que entra por la puerta hecho añicos.':
        'Drag the bar to see the difference. This is how a phone that arrives in pieces ends up.',
      'Antes': 'Before', 'Después': 'After',
      'Arrastra para comparar': 'Drag to compare',
      'Toda reparación sale con garantía por escrito': 'Every repair comes with a written warranty',
      'Meses': 'Months', 'de garantía': 'warranty',
      'Ver condiciones →': 'See conditions →',
      'Confianza': 'Trust',
      'Reparamos las marcas que ya conoces': 'We repair the brands you know',

      /* Contacto */
      'Escríbenos o pásate': 'Message us or drop by',
      'por la tienda': 'the shop',
      'Dirección': 'Address', 'Teléfono': 'Phone', 'Horario': 'Opening hours', 'Redes': 'Social',
      'Cómo llegar en Google Maps →': 'Get directions on Google Maps →',
      'Abrir WhatsApp': 'Open WhatsApp',
      'Cómo llegar': 'Getting here',
      'Estamos fáciles de encontrar': 'We are easy to find',
      'En coche': 'By car', 'En autobús': 'By bus', 'Andando': 'On foot',
      'Abrir ruta en coche →': 'Open driving route →',
      'Ver ruta en transporte →': 'Open transit route →',
      'Ver ruta a pie →': 'Open walking route →',
      'Lunes': 'Monday', 'Martes': 'Tuesday', 'Miércoles': 'Wednesday',
      'Jueves': 'Thursday', 'Viernes': 'Friday', 'Sábado': 'Saturday', 'Domingo': 'Sunday',
      'Cerrado': 'Closed',

      /* Vinted Go */
      'Entrega y recogida': 'Drop-off and pick-up',
      'Sin cita previa': 'No appointment needed',
      'Sin coste para ti': 'Free for you',
      'Enviar un paquete': 'Sending a parcel',
      'Recoger un paquete': 'Collecting a parcel',
      'para recoger tu paquete': 'to collect your parcel',
      'Sin cita': 'No appointment', 'entras y te atendemos': 'just walk in',
      'Gratis': 'Free', 'el servicio no te cuesta nada': 'the service costs you nothing',

      /* Común */
      'Preguntas frecuentes': 'Frequently asked questions',
      'Lo que más nos preguntáis': 'What you ask us most',
      'Información': 'Information',
      'Todos los derechos reservados.': 'All rights reserved.',
      'Aviso legal': 'Legal notice', 'Privacidad': 'Privacy', 'Cookies': 'Cookies',
      'Tienda física de móviles, fundas y accesorios. Reparación, fibra, prepago, videojuegos y punto Vinted Go.':
        'Local shop for phones, cases and accessories. Repairs, home internet, prepaid SIMs, video games and Vinted Go point.',
      'Tienda física de móviles, fundas y accesorios. Reparación, fibra, prepago y videojuegos.':
        'Local shop for phones, cases and accessories. Repairs, internet, prepaid SIMs and video games.',
      'Punto Vinted Go': 'Vinted Go point',
      'La tienda': 'Our shop',
      'Accesorios': 'Accessories',
      'Preguntar por WhatsApp': 'Ask on WhatsApp',
      '¿Hablamos por WhatsApp?': 'Shall we talk on WhatsApp?',
      'Cuéntanos qué necesitas y te respondemos con presupuesto y plazo, sin compromiso.':
        'Tell us what you need and we will reply with a price and timeframe, no obligation.',
      'Ver las': 'See all', 'reseñas en Google': 'Google reviews',
      'Oferta de agosto': 'August offer',
      'Protector de pantalla de regalo al cambiar la pantalla de tu móvil':
        'Free screen protector when you replace your phone screen',
      'Lo quiero': 'I want it',
      /* Cinta de compromisos */
      'Muchas averías': 'Most faults', 'en el mismo día': 'same day',
      'antes de tocar nada': 'before we touch anything',
      'Diagnóstico gratis': 'Free diagnosis', 'sin compromiso': 'no obligation',
      'en Benalmádena': 'in Benalmádena',
      '4,9 en Google': '4.9 on Google', 'con 223 opiniones': 'with 223 reviews',
      'Pago en efectivo': 'Cash payment', 'o con tarjeta': 'or card',
      'entrega y recogida': 'drop-off and pick-up',
      '¿Dudas con tu móvil? Escríbenos,': 'Questions about your phone? Message us,',
      'te respondemos en minutos': 'we reply within minutes',

      /* Consejos */
      'Consejos que de verdad': 'Advice that actually',
      'te ahorran dinero': 'saves you money',
      'Lo que aprendemos reparando móviles todos los días, contado sin tecnicismos. Nada de trucos milagrosos: solo lo que funciona y lo que conviene evitar.':
        'What we learn repairing phones every day, explained without jargon. No miracle tricks: just what works and what to avoid.',
      'Cuatro consejos': 'Four tips',
      'Elige por dónde empezar': 'Pick where to start',
      'Batería': 'Battery', 'Emergencia': 'Emergency', 'Reparación': 'Repair', 'Ahorro': 'Saving',
      'min de lectura': 'min read',
      'Cómo alargar la vida de la batería de tu móvil': 'How to make your phone battery last longer',
      'Por qué se estropea, qué costumbres la matan antes de tiempo y cuándo toca cambiarla en vez de seguir sufriendo.':
        'Why it degrades, which habits kill it early, and when to replace it instead of putting up with it.',
      'Se me ha mojado el móvil: qué hacer y qué no': 'My phone got wet: what to do and what not to do',
      'Los primeros diez minutos deciden si el móvil se salva. El truco del arroz no es uno de ellos, y te contamos por qué.':
        'The first ten minutes decide whether the phone survives. The rice trick is not one of them, and we explain why.',
      'Pantalla rota: ¿compensa repararla o comprar otro móvil?': 'Broken screen: repair it or buy a new phone?',
      'La cuenta que hacemos nosotros antes de recomendarte nada, para que decidas con criterio y no por impulso.':
        'The maths we do before recommending anything, so you decide with judgement and not on impulse.',
      'Cómo pagar menos en tu factura de fibra y móvil': 'How to pay less on your internet and mobile bill',
      'Dónde se esconde el dinero que pagas de más y las preguntas exactas que debes hacerle a tu compañía.':
        'Where the money you overpay is hiding, and the exact questions to ask your provider.',
      'Leer el consejo →': 'Read the tip →',
      'En esta página': 'On this page',
      '¿Te ha surgido una duda leyendo?': 'Any questions while reading?',
      'Escríbenos y te respondemos sin compromiso. Preguntar es gratis.':
        'Message us and we will reply, no obligation. Asking is free.',
      'Los artículos completos están en español. Si necesitas que te lo expliquemos en tu idioma, escríbenos por WhatsApp.':
        'The full articles are in Spanish. If you need it explained in your language, just message us on WhatsApp.'
    },

    fr: {
      'Servicios': 'Services', 'Reparaciones': 'Réparations', 'Fibra': 'Internet',
      'Fibra y tarifas': 'Internet et forfaits', 'Tienda': 'La boutique', 'Consejos': 'Conseils',
      'Preguntas': 'FAQ', 'Contacto': 'Contact', 'Inicio': 'Accueil',
      'Punto Vinted Go · Reparaciones en el día': 'Point Vinted Go · Réparations le jour même',
      'Comprobando horario…': 'Vérification des horaires…',
      'Abierto ahora': 'Ouvert maintenant', 'Cerrado ahora': 'Fermé actuellement',

      'Tienda física': 'Boutique physique',
      'Móviles · Reparación · Fibra · Gaming': 'Téléphones · Réparation · Internet · Gaming',
      'Tu móvil, en': 'Votre téléphone, entre',
      'las mejores manos': 'les meilleures mains',
      'Venta de móviles, fundas y accesorios, reparaciones con garantía, contratación de fibra y tarifas móviles, tarjetas prepago y videojuegos. Todo en un mismo sitio y con trato de persona a persona.':
        'Vente de téléphones, coques et accessoires, réparations garanties, abonnements internet et mobiles, cartes prépayées et jeux vidéo. Tout au même endroit, avec un vrai contact humain.',
      'Escríbenos por WhatsApp': 'Écrivez-nous sur WhatsApp',
      'Ver reparaciones': 'Voir les réparations',
      'Mismo día': 'Le jour même', 'en averías comunes': 'pour les pannes courantes',
      'Garantía': 'Garantie', 'en cada reparación': 'sur chaque réparation',
      'Presupuesto': 'Devis', 'gratis y sin compromiso': 'gratuit et sans engagement',
      'Consulta rápida': 'Demande rapide',
      '¿Qué necesitas hoy?': 'De quoi avez-vous besoin ?',
      'Pantalla rota': 'Écran cassé', 'Batería': 'Batterie',
      'Comprar móvil': 'Acheter un téléphone', 'Fibra / tarifas': 'Internet / forfaits',
      'Funda / accesorio': 'Coque / accessoire', 'Videojuegos': 'Jeux vidéo',
      'Te respondemos por WhatsApp con el presupuesto y el plazo.': 'Nous répondons sur WhatsApp avec le prix et le délai.',
      'Trabajamos con': 'Nous travaillons avec',
      'opiniones en Google': 'avis Google',

      'Qué ofrecemos': 'Nos services',
      'Todo lo que tu móvil necesita,': 'Tout ce dont votre téléphone a besoin,',
      'en una sola tienda': 'dans une seule boutique',
      'Cada servicio tiene su propia página con todos los detalles. Elige el que te interesa.':
        'Chaque service a sa propre page détaillée. Choisissez celui qui vous intéresse.',
      'Venta de móviles': 'Vente de téléphones',
      'Terminales nuevos y reacondicionados de las principales marcas, con asesoramiento honesto.':
        'Téléphones neufs et reconditionnés des grandes marques, avec des conseils honnêtes.',
      'Ver la tienda de móviles →': 'Voir les téléphones →',
      'Reparación de móviles': 'Réparation de téléphones',
      'Pantallas, baterías, conectores, cámaras y más. Diagnóstico gratuito y garantía por escrito.':
        'Écrans, batteries, connecteurs, caméras et plus. Diagnostic gratuit et garantie écrite.',
      'Ver averías y proceso →': 'Voir les pannes et le процessus →',
      'Fundas y accesorios': 'Coques et accessoires',
      'Fundas, protectores, cargadores, auriculares, powerbanks y accesorios gaming en stock.':
        'Coques, protections d\'écran, chargeurs, écouteurs, batteries externes et accessoires gaming en stock.',
      'Ver accesorios →': 'Voir les accessoires →',
      'Fibra y tarifas móviles': 'Internet et forfaits mobiles',
      'Comparamos operadores y gestionamos tu portabilidad. Traes tu factura, la revisamos contigo.':
        'Nous comparons les opérateurs et gérons votre portabilité. Apportez votre facture, nous la regardons ensemble.',
      'Comparar mi tarifa →': 'Comparer mon forfait →',
      'Tarjetas prepago': 'Cartes prépayées',
      'Altas al momento y recargas de todos los operadores, sin permanencia.':
        'Activation immédiate et recharges de tous les opérateurs, sans engagement.',
      'Ver prepago →': 'Voir le prépayé →',
      'Juegos, mandos y accesorios gaming. Novedades y clásicos en tienda física.':
        'Jeux, manettes et accessoires gaming. Nouveautés et classiques en boutique.',
      'Visitar la tienda →': 'Visiter la boutique →',

      'Por qué nosotros': 'Pourquoi nous',
      'Tienda de barrio,': 'Boutique de quartier,',
      'servicio de primera': 'service de premier ordre',
      'Te atendemos nosotros': 'Nous vous recevons nous-mêmes',
      'Nada de call centers. Hablas con la persona que va a reparar o vender tu móvil.':
        'Pas de centre d\'appels. Vous parlez à la personne qui va réparer ou vous vendre le téléphone.',
      'Presupuesto cerrado': 'Prix fixe',
      'Sabes lo que vas a pagar antes de dejar el terminal. Sin ampliaciones raras.':
        'Vous savez ce que vous allez payer avant de laisser l\'appareil. Sans suppléments surprises.',
      'Garantía por escrito': 'Garantie écrite',
      'Cada reparación sale con su garantía. Si algo falla, vuelves y lo resolvemos.':
        'Chaque réparation est garantie. Si quelque chose ne va pas, revenez et on règle ça.',
      'Estamos aquí mañana, pasado y el año que viene. Puedes venir a mirarnos a la cara.':
        'Nous serons là demain, après-demain et l\'an prochain. Vous pouvez venir nous voir en personne.',

      'Opiniones': 'Avis',
      'Lo que dicen nuestros clientes': 'Ce que disent nos clients',
      'sobre 5': 'sur 5',
      'reseñas verificadas en Google': 'avis vérifiés sur Google',

      'Dinos qué le pasa': 'Dites-nous ce qui ne va pas',
      'y te decimos qué cuesta': 'et nous vous donnons le prix',
      'Mándanos una foto por WhatsApp con la marca y el modelo. Te contestamos con precio y plazo reales, sin sorpresas al recoger el móvil.':
        'Envoyez-nous une photo sur WhatsApp avec la marque et le modèle. Nous répondons avec un vrai prix et un vrai délai, sans surprise à la récupération.',
      'Averías más comunes': 'Pannes les plus courantes',
      'Toca la tuya y cuéntanos el modelo': 'Choisissez la vôtre et indiquez votre modèle',
      'Batería que no dura': 'Batterie qui ne tient pas',
      'No carga / conector': 'Ne charge plus / connecteur',
      'Cámara': 'Caméra', 'Mojado': 'Dégât des eaux',
      'Altavoz / micro': 'Haut-parleur / micro',
      'Software / no arranca': 'Logiciel / ne démarre pas',
      'Recuperar datos': 'Récupération de données',
      'Cómo funciona': 'Comment ça marche',
      'De la avería al móvil arreglado': 'De la panne au téléphone réparé',
      'Nos escribes': 'Vous nous écrivez',
      'Diagnóstico y presupuesto': 'Diagnostic et devis',
      'Reparado y con garantía': 'Réparé et garanti',
      'Antes y después': 'Avant et après',
      'De pantalla destrozada': 'D\'un écran en miettes',
      'a móvil como nuevo': 'à un téléphone comme neuf',
      'Arrastra la barra para ver la diferencia. Así queda un terminal que entra por la puerta hecho añicos.':
        'Faites glisser la barre pour voir la différence. Voilà le résultat sur un téléphone arrivé en morceaux.',
      'Antes': 'Avant', 'Después': 'Après',
      'Arrastra para comparar': 'Glissez pour comparer',
      'Toda reparación sale con garantía por escrito': 'Chaque réparation est couverte par une garantie écrite',
      'Meses': 'Mois', 'de garantía': 'de garantie',
      'Ver condiciones →': 'Voir les conditions →',
      'Confianza': 'Confiance',
      'Reparamos las marcas que ya conoces': 'Nous réparons les marques que vous connaissez',

      'Escríbenos o pásate': 'Écrivez-nous ou passez',
      'por la tienda': 'à la boutique',
      'Dirección': 'Adresse', 'Teléfono': 'Téléphone', 'Horario': 'Horaires', 'Redes': 'Réseaux',
      'Cómo llegar en Google Maps →': 'Itinéraire sur Google Maps →',
      'Abrir WhatsApp': 'Ouvrir WhatsApp',
      'Cómo llegar': 'Comment venir',
      'Estamos fáciles de encontrar': 'Nous sommes faciles à trouver',
      'En coche': 'En voiture', 'En autobús': 'En bus', 'Andando': 'À pied',
      'Abrir ruta en coche →': 'Itinéraire en voiture →',
      'Ver ruta en transporte →': 'Itinéraire en transport →',
      'Ver ruta a pie →': 'Itinéraire à pied →',
      'Lunes': 'Lundi', 'Martes': 'Mardi', 'Miércoles': 'Mercredi',
      'Jueves': 'Jeudi', 'Viernes': 'Vendredi', 'Sábado': 'Samedi', 'Domingo': 'Dimanche',
      'Cerrado': 'Fermé',

      'Entrega y recogida': 'Dépôt et retrait',
      'Sin cita previa': 'Sans rendez-vous',
      'Sin coste para ti': 'Gratuit pour vous',
      'Enviar un paquete': 'Envoyer un colis',
      'Recoger un paquete': 'Retirer un colis',
      'para recoger tu paquete': 'pour retirer votre colis',
      'Sin cita': 'Sans rendez-vous', 'entras y te atendemos': 'entrez, on s\'occupe de vous',
      'Gratis': 'Gratuit', 'el servicio no te cuesta nada': 'le service ne vous coûte rien',

      'Preguntas frecuentes': 'Questions fréquentes',
      'Lo que más nos preguntáis': 'Ce que vous nous demandez le plus',
      'Información': 'Informations',
      'Todos los derechos reservados.': 'Tous droits réservés.',
      'Aviso legal': 'Mentions légales', 'Privacidad': 'Confidentialité', 'Cookies': 'Cookies',
      'Tienda física de móviles, fundas y accesorios. Reparación, fibra, prepago, videojuegos y punto Vinted Go.':
        'Boutique de téléphones, coques et accessoires. Réparation, internet, prépayé, jeux vidéo et point Vinted Go.',
      'Tienda física de móviles, fundas y accesorios. Reparación, fibra, prepago y videojuegos.':
        'Boutique de téléphones, coques et accessoires. Réparation, internet, prépayé et jeux vidéo.',
      'Punto Vinted Go': 'Point Vinted Go',
      'La tienda': 'La boutique',
      'Accesorios': 'Accessoires',
      'Preguntar por WhatsApp': 'Demander sur WhatsApp',
      '¿Hablamos por WhatsApp?': 'On en parle sur WhatsApp ?',
      'Cuéntanos qué necesitas y te respondemos con presupuesto y plazo, sin compromiso.':
        'Dites-nous ce dont vous avez besoin et nous répondons avec un devis et un délai, sans engagement.',
      'Ver las': 'Voir les', 'reseñas en Google': 'avis Google',
      'Oferta de agosto': 'Offre d\'août',
      'Protector de pantalla de regalo al cambiar la pantalla de tu móvil':
        'Protection d\'écran offerte pour tout remplacement d\'écran',
      'Lo quiero': 'J\'en profite',
      'Muchas averías': 'La plupart des pannes', 'en el mismo día': 'le jour même',
      'antes de tocar nada': 'avant toute intervention',
      'Diagnóstico gratis': 'Diagnostic gratuit', 'sin compromiso': 'sans engagement',
      'en Benalmádena': 'à Benalmádena',
      '4,9 en Google': '4,9 sur Google', 'con 223 opiniones': 'avec 223 avis',
      'Pago en efectivo': 'Paiement en espèces', 'o con tarjeta': 'ou par carte',
      'entrega y recogida': 'dépôt et retrait',
      '¿Dudas con tu móvil? Escríbenos,': 'Une question sur votre téléphone ? Écrivez-nous,',
      'te respondemos en minutos': 'nous répondons en quelques minutes',

      /* Conseils */
      'Consejos que de verdad': 'Des conseils qui vous font',
      'te ahorran dinero': 'vraiment économiser',
      'Lo que aprendemos reparando móviles todos los días, contado sin tecnicismos. Nada de trucos milagrosos: solo lo que funciona y lo que conviene evitar.':
        'Ce que nous apprenons en réparant des téléphones tous les jours, expliqué simplement. Pas de remèdes miracles : seulement ce qui marche et ce qu\'il faut éviter.',
      'Cuatro consejos': 'Quatre conseils',
      'Elige por dónde empezar': 'Choisissez par où commencer',
      'Batería': 'Batterie', 'Emergencia': 'Urgence', 'Reparación': 'Réparation', 'Ahorro': 'Économies',
      'min de lectura': 'min de lecture',
      'Cómo alargar la vida de la batería de tu móvil': 'Comment prolonger la vie de la batterie de votre téléphone',
      'Por qué se estropea, qué costumbres la matan antes de tiempo y cuándo toca cambiarla en vez de seguir sufriendo.':
        'Pourquoi elle s\'use, quelles habitudes l\'abîment plus vite et quand il vaut mieux la remplacer.',
      'Se me ha mojado el móvil: qué hacer y qué no': 'Mon téléphone est mouillé : ce qu\'il faut faire et ne pas faire',
      'Los primeros diez minutos deciden si el móvil se salva. El truco del arroz no es uno de ellos, y te contamos por qué.':
        'Les dix premières minutes décident si le téléphone sera sauvé. L\'astuce du riz n\'en fait pas partie, et on vous explique pourquoi.',
      'Pantalla rota: ¿compensa repararla o comprar otro móvil?': 'Écran cassé : réparer ou acheter un autre téléphone ?',
      'La cuenta que hacemos nosotros antes de recomendarte nada, para que decidas con criterio y no por impulso.':
        'Le calcul que nous faisons avant de vous conseiller quoi que ce soit, pour décider avec discernement.',
      'Cómo pagar menos en tu factura de fibra y móvil': 'Comment payer moins sur votre facture internet et mobile',
      'Dónde se esconde el dinero que pagas de más y las preguntas exactas que debes hacerle a tu compañía.':
        'Où se cache l\'argent que vous payez en trop et les questions exactes à poser à votre opérateur.',
      'Leer el consejo →': 'Lire le conseil →',
      'En esta página': 'Sur cette page',
      '¿Te ha surgido una duda leyendo?': 'Une question vous est venue en lisant ?',
      'Escríbenos y te respondemos sin compromiso. Preguntar es gratis.':
        'Écrivez-nous, nous répondons sans engagement. Demander est gratuit.',
      'Los artículos completos están en español. Si necesitas que te lo expliquemos en tu idioma, escríbenos por WhatsApp.':
        'Les articles complets sont en espagnol. Si vous souhaitez qu\'on vous l\'explique dans votre langue, écrivez-nous sur WhatsApp.',

      /* ── Página de turistas (original en inglés) ──────── */
      'Broken your phone': 'Téléphone cassé',
      'on holiday?': 'en vacances ?',
      'Checking opening hours…': 'Vérification des horaires…',
      'Walk-ins welcome · No appointment needed': 'Sans rendez-vous · Entrez directement',
      'Google reviews': 'avis Google',
      'English spoken': 'On parle anglais',
      'Wir sprechen Deutsch': 'Nous parlons allemand',
      'On parle français': 'Nous parlons français',
      'Same-day repairs': 'Réparations le jour même',
      'Message us on WhatsApp': 'Écrivez-nous sur WhatsApp',
      '📍 Find us on the map': '📍 Nous trouver sur la carte',
      'Google rating': 'note Google',
      'customer reviews': 'avis clients',
      'years in Benalmádena': 'ans à Benalmádena',
      'if you decide not to repair': 'si vous renoncez à la réparation',
      'What we fix': 'Ce que nous réparons',
      'Most repairs done': 'La plupart des réparations',
      'while you enjoy the beach': 'pendant que vous êtes à la plage',
      'Cracked screen': 'Écran fissuré', 'Battery dies fast': 'Batterie qui lâche',
      'Won\'t charge': 'Ne charge plus', 'Dropped in water': 'Tombé dans l\'eau',
      'Camera broken': 'Caméra cassée', 'Need a charger': 'Besoin d\'un chargeur',
      'Spanish SIM card': 'Carte SIM espagnole', 'Case / protector': 'Coque / protection',
      'Get a price': 'Voir le prix', 'Urgent': 'Urgent', 'In stock': 'En stock', 'Same day': 'Le jour même',
      'For visitors': 'Pour les visiteurs',
      'We know you are on a schedule': 'Nous savons que votre temps est compté',
      'No appointment': 'Sans rendez-vous',
      'We speak your language': 'Nous parlons votre langue',
      'Fixed price, told upfront': 'Prix fixe, annoncé à l\'avance',
      'Card accepted': 'Carte acceptée',
      'Sea or pool water?': 'Eau de mer ou de piscine ?',
      'Read this before you do anything': 'Lisez ceci avant toute chose',
      'My phone got wet — help': 'Mon téléphone est mouillé — au secours',
      'Find us': 'Nous trouver',
      'By car': 'En voiture', 'By bus': 'En bus', 'On foot': 'À pied',
      'Open driving route →': 'Itinéraire en voiture →',
      'Open transit route →': 'Itinéraire en transport →',
      'Open walking route →': 'Itinéraire à pied →',
      'Not sure if we can fix it?': 'Vous ne savez pas si c\'est réparable ?',
      'Send us a photo': 'Envoyez-nous une photo',
      'All rights reserved.': 'Tous droits réservés.'
    },

    de: {
      'Servicios': 'Leistungen', 'Reparaciones': 'Reparaturen', 'Fibra': 'Internet',
      'Fibra y tarifas': 'Internet & Tarife', 'Tienda': 'Der Laden', 'Consejos': 'Tipps',
      'Preguntas': 'FAQ', 'Contacto': 'Kontakt', 'Inicio': 'Startseite',
      'Punto Vinted Go · Reparaciones en el día': 'Vinted-Go-Station · Reparatur am selben Tag',
      'Comprobando horario…': 'Öffnungszeiten werden geprüft…',
      'Abierto ahora': 'Jetzt geöffnet', 'Cerrado ahora': 'Derzeit geschlossen',

      'Tienda física': 'Ladengeschäft',
      'Móviles · Reparación · Fibra · Gaming': 'Handys · Reparatur · Internet · Gaming',
      'Tu móvil, en': 'Dein Handy, in',
      'las mejores manos': 'den besten Händen',
      'Venta de móviles, fundas y accesorios, reparaciones con garantía, contratación de fibra y tarifas móviles, tarjetas prepago y videojuegos. Todo en un mismo sitio y con trato de persona a persona.':
        'Handyverkauf, Hüllen und Zubehör, Reparaturen mit Garantie, Internet- und Mobilfunkverträge, Prepaid-Karten und Videospiele. Alles an einem Ort, mit persönlicher Beratung.',
      'Escríbenos por WhatsApp': 'Schreib uns auf WhatsApp',
      'Ver reparaciones': 'Reparaturen ansehen',
      'Mismo día': 'Am selben Tag', 'en averías comunes': 'bei häufigen Defekten',
      'Garantía': 'Garantie', 'en cada reparación': 'auf jede Reparatur',
      'Presupuesto': 'Kostenvoranschlag', 'gratis y sin compromiso': 'kostenlos und unverbindlich',
      'Consulta rápida': 'Schnelle Anfrage',
      '¿Qué necesitas hoy?': 'Was brauchst du heute?',
      'Pantalla rota': 'Display kaputt', 'Batería': 'Akku',
      'Comprar móvil': 'Handy kaufen', 'Fibra / tarifas': 'Internet / Tarife',
      'Funda / accesorio': 'Hülle / Zubehör', 'Videojuegos': 'Videospiele',
      'Te respondemos por WhatsApp con el presupuesto y el plazo.': 'Wir antworten auf WhatsApp mit Preis und Dauer.',
      'Trabajamos con': 'Wir arbeiten mit',
      'opiniones en Google': 'Google-Bewertungen',

      'Qué ofrecemos': 'Unser Angebot',
      'Todo lo que tu móvil necesita,': 'Alles, was dein Handy braucht,',
      'en una sola tienda': 'in einem Laden',
      'Cada servicio tiene su propia página con todos los detalles. Elige el que te interesa.':
        'Jede Leistung hat eine eigene Seite mit allen Details. Wähle aus, was dich interessiert.',
      'Venta de móviles': 'Handyverkauf',
      'Terminales nuevos y reacondicionados de las principales marcas, con asesoramiento honesto.':
        'Neue und generalüberholte Geräte der wichtigsten Marken, mit ehrlicher Beratung.',
      'Ver la tienda de móviles →': 'Handys ansehen →',
      'Reparación de móviles': 'Handyreparatur',
      'Pantallas, baterías, conectores, cámaras y más. Diagnóstico gratuito y garantía por escrito.':
        'Displays, Akkus, Ladebuchsen, Kameras und mehr. Kostenlose Diagnose und schriftliche Garantie.',
      'Ver averías y proceso →': 'Defekte und Ablauf ansehen →',
      'Fundas y accesorios': 'Hüllen und Zubehör',
      'Fundas, protectores, cargadores, auriculares, powerbanks y accesorios gaming en stock.':
        'Hüllen, Displayschutz, Ladegeräte, Kopfhörer, Powerbanks und Gaming-Zubehör vorrätig.',
      'Ver accesorios →': 'Zubehör ansehen →',
      'Fibra y tarifas móviles': 'Internet und Mobilfunktarife',
      'Comparamos operadores y gestionamos tu portabilidad. Traes tu factura, la revisamos contigo.':
        'Wir vergleichen Anbieter und übernehmen den Wechsel. Bring deine Rechnung mit, wir schauen sie gemeinsam an.',
      'Comparar mi tarifa →': 'Meinen Tarif vergleichen →',
      'Tarjetas prepago': 'Prepaid-Karten',
      'Altas al momento y recargas de todos los operadores, sin permanencia.':
        'Sofortige Aktivierung und Aufladungen aller Anbieter, ohne Vertragsbindung.',
      'Ver prepago →': 'Prepaid ansehen →',
      'Juegos, mandos y accesorios gaming. Novedades y clásicos en tienda física.':
        'Spiele, Controller und Gaming-Zubehör. Neuheiten und Klassiker im Laden.',
      'Visitar la tienda →': 'Laden besuchen →',

      'Por qué nosotros': 'Warum wir',
      'Tienda de barrio,': 'Laden um die Ecke,',
      'servicio de primera': 'erstklassiger Service',
      'Te atendemos nosotros': 'Wir bedienen dich persönlich',
      'Nada de call centers. Hablas con la persona que va a reparar o vender tu móvil.':
        'Keine Callcenter. Du sprichst mit der Person, die dein Handy repariert oder verkauft.',
      'Presupuesto cerrado': 'Festpreis',
      'Sabes lo que vas a pagar antes de dejar el terminal. Sin ampliaciones raras.':
        'Du weißt, was du zahlst, bevor du das Gerät abgibst. Ohne versteckte Zusatzkosten.',
      'Garantía por escrito': 'Schriftliche Garantie',
      'Cada reparación sale con su garantía. Si algo falla, vuelves y lo resolvemos.':
        'Jede Reparatur hat Garantie. Wenn etwas nicht stimmt, komm vorbei und wir lösen es.',
      'Estamos aquí mañana, pasado y el año que viene. Puedes venir a mirarnos a la cara.':
        'Wir sind morgen, übermorgen und nächstes Jahr noch da. Du kannst uns persönlich aufsuchen.',

      'Opiniones': 'Bewertungen',
      'Lo que dicen nuestros clientes': 'Was unsere Kunden sagen',
      'sobre 5': 'von 5',
      'reseñas verificadas en Google': 'verifizierte Google-Bewertungen',

      'Dinos qué le pasa': 'Sag uns, was los ist',
      'y te decimos qué cuesta': 'und wir nennen dir den Preis',
      'Mándanos una foto por WhatsApp con la marca y el modelo. Te contestamos con precio y plazo reales, sin sorpresas al recoger el móvil.':
        'Schick uns ein Foto per WhatsApp mit Marke und Modell. Wir antworten mit echtem Preis und Termin, ohne Überraschungen bei der Abholung.',
      'Averías más comunes': 'Häufigste Defekte',
      'Toca la tuya y cuéntanos el modelo': 'Wähle deinen aus und nenne uns dein Modell',
      'Batería que no dura': 'Akku hält nicht',
      'No carga / conector': 'Lädt nicht / Ladebuchse',
      'Cámara': 'Kamera', 'Mojado': 'Wasserschaden',
      'Altavoz / micro': 'Lautsprecher / Mikrofon',
      'Software / no arranca': 'Software / startet nicht',
      'Recuperar datos': 'Datenrettung',
      'Cómo funciona': 'So läuft es ab',
      'De la avería al móvil arreglado': 'Vom Defekt zum reparierten Handy',
      'Nos escribes': 'Du schreibst uns',
      'Diagnóstico y presupuesto': 'Diagnose und Kostenvoranschlag',
      'Reparado y con garantía': 'Repariert und mit Garantie',
      'Antes y después': 'Vorher und nachher',
      'De pantalla destrozada': 'Vom zersplitterten Display',
      'a móvil como nuevo': 'zum Handy wie neu',
      'Arrastra la barra para ver la diferencia. Así queda un terminal que entra por la puerta hecho añicos.':
        'Zieh den Regler, um den Unterschied zu sehen. So sieht ein Gerät aus, das in Scherben ankam.',
      'Antes': 'Vorher', 'Después': 'Nachher',
      'Arrastra para comparar': 'Zum Vergleichen ziehen',
      'Toda reparación sale con garantía por escrito': 'Jede Reparatur kommt mit schriftlicher Garantie',
      'Meses': 'Monate', 'de garantía': 'Garantie',
      'Ver condiciones →': 'Bedingungen ansehen →',
      'Confianza': 'Vertrauen',
      'Reparamos las marcas que ya conoces': 'Wir reparieren die Marken, die du kennst',

      'Escríbenos o pásate': 'Schreib uns oder komm',
      'por la tienda': 'im Laden vorbei',
      'Dirección': 'Adresse', 'Teléfono': 'Telefon', 'Horario': 'Öffnungszeiten', 'Redes': 'Social Media',
      'Cómo llegar en Google Maps →': 'Route in Google Maps öffnen →',
      'Abrir WhatsApp': 'WhatsApp öffnen',
      'Cómo llegar': 'Anfahrt',
      'Estamos fáciles de encontrar': 'Du findest uns leicht',
      'En coche': 'Mit dem Auto', 'En autobús': 'Mit dem Bus', 'Andando': 'Zu Fuß',
      'Abrir ruta en coche →': 'Route mit dem Auto →',
      'Ver ruta en transporte →': 'Route mit Öffentlichen →',
      'Ver ruta a pie →': 'Route zu Fuß →',
      'Lunes': 'Montag', 'Martes': 'Dienstag', 'Miércoles': 'Mittwoch',
      'Jueves': 'Donnerstag', 'Viernes': 'Freitag', 'Sábado': 'Samstag', 'Domingo': 'Sonntag',
      'Cerrado': 'Geschlossen',

      'Entrega y recogida': 'Abgabe und Abholung',
      'Sin cita previa': 'Ohne Termin',
      'Sin coste para ti': 'Für dich kostenlos',
      'Enviar un paquete': 'Ein Paket versenden',
      'Recoger un paquete': 'Ein Paket abholen',
      'para recoger tu paquete': 'um dein Paket abzuholen',
      'Sin cita': 'Ohne Termin', 'entras y te atendemos': 'einfach reinkommen',
      'Gratis': 'Kostenlos', 'el servicio no te cuesta nada': 'der Service kostet dich nichts',

      'Preguntas frecuentes': 'Häufige Fragen',
      'Lo que más nos preguntáis': 'Was ihr uns am meisten fragt',
      'Información': 'Informationen',
      'Todos los derechos reservados.': 'Alle Rechte vorbehalten.',
      'Aviso legal': 'Impressum', 'Privacidad': 'Datenschutz', 'Cookies': 'Cookies',
      'Tienda física de móviles, fundas y accesorios. Reparación, fibra, prepago, videojuegos y punto Vinted Go.':
        'Ladengeschäft für Handys, Hüllen und Zubehör. Reparatur, Internet, Prepaid, Videospiele und Vinted-Go-Station.',
      'Tienda física de móviles, fundas y accesorios. Reparación, fibra, prepago y videojuegos.':
        'Ladengeschäft für Handys, Hüllen und Zubehör. Reparatur, Internet, Prepaid und Videospiele.',
      'Punto Vinted Go': 'Vinted-Go-Station',
      'La tienda': 'Der Laden',
      'Accesorios': 'Zubehör',
      'Preguntar por WhatsApp': 'Auf WhatsApp fragen',
      '¿Hablamos por WhatsApp?': 'Sollen wir auf WhatsApp reden?',
      'Cuéntanos qué necesitas y te respondemos con presupuesto y plazo, sin compromiso.':
        'Sag uns, was du brauchst, und wir antworten mit Preis und Termin, unverbindlich.',
      'Ver las': 'Alle', 'reseñas en Google': 'Google-Bewertungen ansehen',
      'Oferta de agosto': 'August-Angebot',
      'Protector de pantalla de regalo al cambiar la pantalla de tu móvil':
        'Displayschutz gratis beim Displaywechsel',
      'Lo quiero': 'Ich will es',
      'Muchas averías': 'Die meisten Defekte', 'en el mismo día': 'am selben Tag',
      'antes de tocar nada': 'bevor wir etwas anfassen',
      'Diagnóstico gratis': 'Kostenlose Diagnose', 'sin compromiso': 'unverbindlich',
      'en Benalmádena': 'in Benalmádena',
      '4,9 en Google': '4,9 bei Google', 'con 223 opiniones': 'mit 223 Bewertungen',
      'Pago en efectivo': 'Barzahlung', 'o con tarjeta': 'oder mit Karte',
      'entrega y recogida': 'Abgabe und Abholung',
      '¿Dudas con tu móvil? Escríbenos,': 'Fragen zu deinem Handy? Schreib uns,',
      'te respondemos en minutos': 'wir antworten in Minuten',

      /* Tipps */
      'Consejos que de verdad': 'Tipps, die dir wirklich',
      'te ahorran dinero': 'Geld sparen',
      'Lo que aprendemos reparando móviles todos los días, contado sin tecnicismos. Nada de trucos milagrosos: solo lo que funciona y lo que conviene evitar.':
        'Was wir beim täglichen Reparieren von Handys lernen, verständlich erklärt. Keine Wundermittel: nur das, was funktioniert, und das, was man lassen sollte.',
      'Cuatro consejos': 'Vier Tipps',
      'Elige por dónde empezar': 'Wähle, womit du anfängst',
      'Batería': 'Akku', 'Emergencia': 'Notfall', 'Reparación': 'Reparatur', 'Ahorro': 'Sparen',
      'min de lectura': 'Min. Lesezeit',
      'Cómo alargar la vida de la batería de tu móvil': 'So hält der Akku deines Handys länger',
      'Por qué se estropea, qué costumbres la matan antes de tiempo y cuándo toca cambiarla en vez de seguir sufriendo.':
        'Warum er nachlässt, welche Gewohnheiten ihn vorzeitig ruinieren und wann sich ein Wechsel lohnt.',
      'Se me ha mojado el móvil: qué hacer y qué no': 'Handy nass geworden: was tun und was nicht',
      'Los primeros diez minutos deciden si el móvil se salva. El truco del arroz no es uno de ellos, y te contamos por qué.':
        'Die ersten zehn Minuten entscheiden, ob das Handy zu retten ist. Der Reis-Trick gehört nicht dazu, und wir erklären warum.',
      'Pantalla rota: ¿compensa repararla o comprar otro móvil?': 'Display kaputt: reparieren oder neues Handy kaufen?',
      'La cuenta que hacemos nosotros antes de recomendarte nada, para que decidas con criterio y no por impulso.':
        'Die Rechnung, die wir aufmachen, bevor wir dir etwas empfehlen, damit du überlegt entscheidest.',
      'Cómo pagar menos en tu factura de fibra y móvil': 'So zahlst du weniger für Internet und Handytarif',
      'Dónde se esconde el dinero que pagas de más y las preguntas exactas que debes hacerle a tu compañía.':
        'Wo das Geld steckt, das du zu viel zahlst, und welche Fragen du deinem Anbieter stellen solltest.',
      'Leer el consejo →': 'Tipp lesen →',
      'En esta página': 'Auf dieser Seite',
      '¿Te ha surgido una duda leyendo?': 'Ist beim Lesen eine Frage aufgekommen?',
      'Escríbenos y te respondemos sin compromiso. Preguntar es gratis.':
        'Schreib uns, wir antworten unverbindlich. Fragen kostet nichts.',
      'Los artículos completos están en español. Si necesitas que te lo expliquemos en tu idioma, escríbenos por WhatsApp.':
        'Die vollständigen Artikel sind auf Spanisch. Wenn du es in deiner Sprache erklärt haben möchtest, schreib uns einfach auf WhatsApp.',

      /* ── Touristenseite (Original auf Englisch) ───────── */
      'Broken your phone': 'Handy kaputt',
      'on holiday?': 'im Urlaub?',
      'Checking opening hours…': 'Öffnungszeiten werden geprüft…',
      'Walk-ins welcome · No appointment needed': 'Ohne Termin · Einfach vorbeikommen',
      'Google reviews': 'Google-Bewertungen',
      'English spoken': 'Wir sprechen Englisch',
      'Wir sprechen Deutsch': 'Wir sprechen Deutsch',
      'On parle français': 'Wir sprechen Französisch',
      'Same-day repairs': 'Reparatur am selben Tag',
      'Message us on WhatsApp': 'Schreib uns auf WhatsApp',
      '📍 Find us on the map': '📍 Auf der Karte finden',
      'Google rating': 'Google-Bewertung',
      'customer reviews': 'Kundenbewertungen',
      'years in Benalmádena': 'Jahre in Benalmádena',
      'if you decide not to repair': 'wenn du dich gegen die Reparatur entscheidest',
      'What we fix': 'Was wir reparieren',
      'Most repairs done': 'Die meisten Reparaturen',
      'while you enjoy the beach': 'während du am Strand bist',
      'Cracked screen': 'Display gesprungen', 'Battery dies fast': 'Akku hält nicht',
      'Won\'t charge': 'Lädt nicht mehr', 'Dropped in water': 'Ins Wasser gefallen',
      'Camera broken': 'Kamera defekt', 'Need a charger': 'Ladegerät gesucht',
      'Spanish SIM card': 'Spanische SIM-Karte', 'Case / protector': 'Hülle / Displayschutz',
      'Get a price': 'Preis anfragen', 'Urgent': 'Dringend', 'In stock': 'Vorrätig', 'Same day': 'Am selben Tag',
      'For visitors': 'Für Urlauber',
      'We know you are on a schedule': 'Wir wissen, dass deine Zeit knapp ist',
      'No appointment': 'Ohne Termin',
      'We speak your language': 'Wir sprechen deine Sprache',
      'Fixed price, told upfront': 'Festpreis, vorher genannt',
      'Card accepted': 'Kartenzahlung möglich',
      'Sea or pool water?': 'Meer- oder Poolwasser?',
      'Read this before you do anything': 'Lies das, bevor du etwas tust',
      'My phone got wet — help': 'Mein Handy ist nass — Hilfe',
      'Find us': 'So findest du uns',
      'By car': 'Mit dem Auto', 'By bus': 'Mit dem Bus', 'On foot': 'Zu Fuß',
      'Open driving route →': 'Route mit dem Auto →',
      'Open transit route →': 'Route mit Öffentlichen →',
      'Open walking route →': 'Route zu Fuß →',
      'Not sure if we can fix it?': 'Unsicher, ob wir es reparieren können?',
      'Send us a photo': 'Schick uns ein Foto',
      'All rights reserved.': 'Alle Rechte vorbehalten.'
    }
  };

  /* ── Motor de traducción ──────────────────────────────── */
  /* Casi toda la web está escrita en español, pero hay páginas
     (como la de turistas) escritas ya en inglés. Con
     data-idioma-base="en" en el <body> el motor sabe cuál es
     el idioma original de esa página.                        */
  var BASE = document.body.getAttribute('data-idioma-base') || 'es';
  var ORIGINALES = new WeakMap();   // guarda el texto original de cada nodo
  var actual = BASE;

  function guardarOriginal(nodo, valor) {
    if (!ORIGINALES.has(nodo)) ORIGINALES.set(nodo, valor);
    return ORIGINALES.get(nodo);
  }

  function traducirTexto(txt, dic) {
    var limpio = txt.trim();
    if (!limpio) return null;
    if (dic[limpio]) return txt.replace(limpio, dic[limpio]);
    return null;
  }

  function aplicar(cod) {
    var dic = T[cod] || {};
    var volverAlEspanol = (cod === BASE);   // volver al idioma original de la página

    // 1. Nodos de texto
    var it = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
      acceptNode: function (n) {
        var p = n.parentNode;
        if (!p) return NodeFilter.FILTER_REJECT;
        var tag = p.nodeName;
        if (tag === 'SCRIPT' || tag === 'STYLE' || tag === 'NOSCRIPT') return NodeFilter.FILTER_REJECT;
        if (p.closest && p.closest('.lang')) return NodeFilter.FILTER_REJECT; // el selector no se traduce
        return n.nodeValue.trim() ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT;
      }
    });
    var nodos = [], n;
    while ((n = it.nextNode())) nodos.push(n);

    nodos.forEach(function (nodo) {
      var original = guardarOriginal(nodo, nodo.nodeValue);
      if (volverAlEspanol) { nodo.nodeValue = original; return; }
      var trad = traducirTexto(original, dic);
      nodo.nodeValue = (trad !== null) ? trad : original;
    });

    // 2. Atributos visibles para lectores de pantalla y ayudas
    ['aria-label', 'title', 'placeholder', 'alt'].forEach(function (attr) {
      document.querySelectorAll('[' + attr + ']').forEach(function (el) {
        if (el.closest('.lang')) return;
        var clave = attr + '::' + attr;
        if (!el.dataset.i18nOrig) el.dataset.i18nOrig = '{}';
        var guard = JSON.parse(el.dataset.i18nOrig);
        if (guard[attr] === undefined) { guard[attr] = el.getAttribute(attr); el.dataset.i18nOrig = JSON.stringify(guard); }
        var orig = guard[attr];
        if (volverAlEspanol) { el.setAttribute(attr, orig); return; }
        var t = traducirTexto(orig, dic);
        el.setAttribute(attr, t !== null ? t : orig);
      });
    });

    // 3. Idioma del documento (importante para buscadores y lectores)
    var meta = IDIOMAS.filter(function (i) { return i.cod === cod; })[0];
    document.documentElement.lang = meta ? meta.htmlLang : 'es';

    // 4. Aviso de que los artículos largos siguen en español
    var aviso = document.getElementById('avisoIdioma');
    if (aviso) aviso.style.display = volverAlEspanol ? 'none' : 'flex';

    actual = cod;
    try { localStorage.setItem('idioma', cod); } catch (e) {}
    pintarSelector();
  }

  /* ── Selector de idioma ───────────────────────────────── */
  var caja, lista;

  function pintarSelector() {
    if (!caja) return;
    var meta = IDIOMAS.filter(function (i) { return i.cod === actual; })[0] || IDIOMAS[0];
    caja.querySelector('.lang__flag').innerHTML = BANDERAS[meta.cod];
    caja.querySelector('.lang__code').textContent = meta.corto;
    caja.setAttribute('aria-label', 'Idioma actual: ' + meta.nombre + '. Cambiar idioma');
    lista.querySelectorAll('button').forEach(function (b) {
      b.classList.toggle('is-current', b.dataset.lang === actual);
      b.setAttribute('aria-current', b.dataset.lang === actual ? 'true' : 'false');
    });
  }

  function crearSelector() {
    var cont = document.createElement('div');
    cont.className = 'lang';
    cont.innerHTML =
      '<button class="lang__btn" aria-haspopup="listbox" aria-expanded="false">' +
        '<span class="lang__flag"></span>' +
        '<span class="lang__code">ES</span>' +
        '<svg class="lang__caret" viewBox="0 0 24 24" aria-hidden="true"><path d="M7 10l5 5 5-5z" fill="currentColor"/></svg>' +
      '</button>' +
      '<div class="lang__list" role="listbox" aria-label="Elegir idioma">' +
        IDIOMAS.map(function (i) {
          return '<button role="option" data-lang="' + i.cod + '">' +
                   '<span class="lang__flag">' + BANDERAS[i.cod] + '</span>' +
                   '<span>' + i.nombre + '</span>' +
                 '</button>';
        }).join('') +
      '</div>';

    var cta = document.querySelector('.header__cta');
    var wa = cta ? cta.querySelector('.btn--wa') : null;
    if (cta && wa) cta.insertBefore(cont, wa); else if (cta) cta.appendChild(cont);

    caja = cont;
    lista = cont.querySelector('.lang__list');
    var boton = cont.querySelector('.lang__btn');

    boton.addEventListener('click', function (e) {
      e.stopPropagation();
      var abierto = cont.classList.toggle('is-open');
      boton.setAttribute('aria-expanded', abierto ? 'true' : 'false');
    });
    lista.querySelectorAll('button').forEach(function (b) {
      b.addEventListener('click', function () {
        aplicar(b.dataset.lang);
        cont.classList.remove('is-open');
        boton.setAttribute('aria-expanded', 'false');
      });
    });
    document.addEventListener('click', function () {
      cont.classList.remove('is-open');
      boton.setAttribute('aria-expanded', 'false');
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') {
        cont.classList.remove('is-open');
        boton.setAttribute('aria-expanded', 'false');
      }
    });
  }

  /* ── Arranque ─────────────────────────────────────────── */
  crearSelector();

  var guardado = null;
  try { guardado = localStorage.getItem('idioma'); } catch (e) {}

  if (!guardado) {
    // Primera visita: proponemos el idioma del navegador si lo tenemos
    var nav = (navigator.language || BASE).slice(0, 2).toLowerCase();
    if (T[nav] || nav === BASE) guardado = nav;
  }
  aplicar(guardado && (T[guardado] || guardado === BASE) ? guardado : BASE);

  // Por si otro script añade contenido más tarde
  window.retraducir = function () { if (actual !== 'es') aplicar(actual); };
})();
