/* Vito Taxi by Charbel — the only script on the site.
   Everything a non-programmer might change lives in window.VT (set in each page by tools/build.py).
   Nothing is stored, nothing is sent anywhere but WhatsApp, and the page works without this file. */
(function () {
  'use strict';
  var VT = window.VT || {};
  var d = document, root = d.documentElement;
  root.classList.add('js');
  var reduce = window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* Header turns to glass once the page moves; the mobile dock steps aside near the booking form. */
  var top = d.querySelector('.top'), dock = d.querySelector('.dock'), book = d.getElementById('book');
  function onScroll() {
    var y = window.scrollY || 0;
    if (top) top.classList.toggle('scrolled', y > 24);
    if (dock && book) {
      var r = book.getBoundingClientRect();
      dock.classList.toggle('away', r.top < innerHeight * .6 && r.bottom > innerHeight * .3);
    }
  }
  addEventListener('scroll', onScroll, { passive: true }); onScroll();

  /* Reveal on scroll. */
  var rv = d.querySelectorAll('.rv');
  if ('IntersectionObserver' in window && !reduce) {
    var io = new IntersectionObserver(function (es) {
      es.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
    }, { rootMargin: '0px 0px -8% 0px', threshold: .08 });
    rv.forEach(function (el) { io.observe(el); });
  } else rv.forEach(function (el) { el.classList.add('in'); });

  /* A soft light that follows the pointer across the cards (desktop only). */
  if (!reduce && matchMedia('(hover:hover)').matches) {
    d.querySelectorAll('.card').forEach(function (c) {
      c.addEventListener('pointermove', function (e) {
        var b = c.getBoundingClientRect();
        c.style.setProperty('--mx', (e.clientX - b.left) + 'px');
        c.style.setProperty('--my', (e.clientY - b.top) + 'px');
      });
    });
    /* The hero stage leans very slightly toward the pointer. */
    var stage = d.querySelector('.stage');
    if (stage) {
      var hero = d.querySelector('.hero');
      hero.addEventListener('pointermove', function (e) {
        var x = e.clientX / innerWidth - .5, y = e.clientY / innerHeight - .5;
        stage.style.transform = 'perspective(1200px) rotateY(' + (x * 5) + 'deg) rotateX(' + (-y * 4) + 'deg)';
      });
      hero.addEventListener('pointerleave', function () { stage.style.transform = ''; });
      stage.style.transition = 'transform .8s cubic-bezier(.2,.7,.1,1)';
    }
  }

  /* Real photos: the gallery appears only once at least one file in photos/ actually loads. */
  var gal = d.querySelector('.gallery');
  if (gal && VT.photos && VT.photos.length) {
    VT.photos.forEach(function (p) {
      var img = new Image();
      img.onload = function () {
        var f = d.createElement('figure'); img.alt = p.alt || ''; img.loading = 'lazy'; img.decoding = 'async';
        f.appendChild(img); gal.appendChild(f); gal.classList.add('on');
      };
      img.src = (VT.base || '') + 'photos/' + p.file;
    });
  }

  /* ── Booking: builds a WhatsApp message. Nothing is stored or sent anywhere else. ── */
  var form = d.getElementById('bookform');
  if (!form) return;
  var t = VT.t || {};
  var trip = 'ride';
  d.querySelectorAll('[data-trip]').forEach(function (b) {
    b.addEventListener('click', function () {
      trip = b.getAttribute('data-trip');
      d.querySelectorAll('[data-trip]').forEach(function (o) { o.setAttribute('aria-pressed', o === b ? 'true' : 'false'); });
      var fl = d.getElementById('f-flight-wrap');
      if (fl) fl.hidden = trip !== 'airport';
      var dest = form.elements.to;
      if (trip === 'airport' && dest && !dest.value) dest.value = t.airport || 'Beirut Airport';
    });
  });
  var date = form.elements.date;
  if (date) {
    var n = new Date(), p2 = function (x) { return (x < 10 ? '0' : '') + x; };
    date.min = n.getFullYear() + '-' + p2(n.getMonth() + 1) + '-' + p2(n.getDate());
  }
  function val(name) { var el = form.elements[name]; return el && el.value ? el.value.trim() : ''; }
  function message() {
    var L = [t.hello || 'Hello Charbel, I would like to book a ride.'];
    var tripLabel = (t.trips || {})[trip];
    if (tripLabel) L.push('• ' + (t.type || 'Type') + ': ' + tripLabel);
    if (val('from')) L.push('• ' + (t.from || 'From') + ': ' + val('from'));
    if (val('to')) L.push('• ' + (t.to || 'To') + ': ' + val('to'));
    if (val('date') || val('time')) L.push('• ' + (t.when || 'When') + ': ' + [val('date'), val('time')].filter(Boolean).join(' ') );
    else L.push('• ' + (t.when || 'When') + ': ' + (t.now || 'As soon as possible'));
    if (val('pax')) L.push('• ' + (t.pax || 'Passengers') + ': ' + val('pax'));
    if (val('bags')) L.push('• ' + (t.bags || 'Bags') + ': ' + val('bags'));
    if (trip === 'airport' && val('flight')) L.push('• ' + (t.flight || 'Flight') + ': ' + val('flight'));
    if (val('name')) L.push('• ' + (t.name || 'Name') + ': ' + val('name'));
    if (val('notes')) L.push('• ' + (t.notes || 'Notes') + ': ' + val('notes'));
    L.push('', t.price || 'Could you confirm the price and availability?');
    return L.join('\n');
  }
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    var url = 'https://wa.me/' + VT.wa + '?text=' + encodeURIComponent(message());
    window.open(url, '_blank', 'noopener');
  });
})();
