/* Vito Taxi by Charbel — interactions and motion.
   Motion is progressive: without JavaScript (or with reduced motion) every word and photo is simply there.
   Bookings go to WhatsApp and nothing is stored or sent anywhere else. */
(function () {
  'use strict';
  var VT = window.VT || {}, t = VT.t || {};
  var d = document, root = d.documentElement;
  var reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  var fine = matchMedia('(hover:hover) and (pointer:fine)').matches;
  var rtl = root.dir === 'rtl';
  var G = window.gsap, ST = window.ScrollTrigger;
  var motion = !reduce && G && ST;
  if (motion) G.registerPlugin(ST);

  /* ── Preloader: once per visit ── */
  var loader = d.querySelector('.loader');
  var seen = false; try { seen = sessionStorage.getItem('vt-seen') === '1'; sessionStorage.setItem('vt-seen', '1'); } catch (e) {}
  function hideLoader() { if (loader) loader.classList.add('done'); intro(); }
  if (loader) {
    if (seen || reduce) { loader.style.display = 'none'; intro(); }
    else { var go = function () { setTimeout(hideLoader, 1500); }; if (d.readyState === 'complete') go(); else addEventListener('load', go); setTimeout(hideLoader, 3500); }
  } else intro();

  /* ── Smooth scroll ── */
  var lenis = null;
  if (motion && window.Lenis && fine) {
    lenis = new Lenis({ duration: 1.15, smoothWheel: true });
    lenis.on('scroll', ST.update);
    G.ticker.add(function (tm) { lenis.raf(tm * 1000); });
    G.ticker.lagSmoothing(0);
    d.querySelectorAll('a[href^="#"]').forEach(function (a) {
      a.addEventListener('click', function (e) {
        var id = a.getAttribute('href'); if (id.length < 2) return;
        var el = d.querySelector(id); if (!el) return;
        e.preventDefault(); lenis.scrollTo(el, { offset: -90 });
      });
    });
  }

  /* ── Navigation pill ── */
  var nav = d.querySelector('.nav');
  function onScroll() { if (nav) nav.classList.toggle('scrolled', (window.scrollY || 0) > 40); }
  addEventListener('scroll', onScroll, { passive: true }); onScroll();

  /* ── Hero intro ── */
  var introDone = false;
  function intro() {
    if (introDone) return; introDone = true;
    if (!motion) return;
    var h = d.querySelector('[data-split]');
    if (h && window.SplitText) {
      var split = new SplitText(h, { type: 'lines,words', linesClass: 'line', wordsClass: 'w' });
      G.set(h.querySelectorAll('.line'), { overflow: 'hidden', paddingBottom: '0.08em' });
      G.from(split.words, { yPercent: 110, opacity: 0, duration: 1.2, ease: 'expo.out', stagger: 0.06, delay: 0.1 });
    }
    G.from('[data-intro]', { y: 30, opacity: 0, duration: 1.1, ease: 'expo.out', stagger: 0.1, delay: 0.35, clearProps: 'all' });
  }

  if (motion) {
    /* Reveal blocks as they enter. */
    G.utils.toArray('[data-rv]').forEach(function (el) {
      G.from(el, { y: 50, opacity: 0, duration: 1.2, ease: 'expo.out', scrollTrigger: { trigger: el, start: 'top 88%', once: true } });
    });
    G.utils.toArray('[data-stagger]').forEach(function (grp) {
      G.from(grp.children, { y: 60, opacity: 0, duration: 1.2, ease: 'expo.out', stagger: 0.09, scrollTrigger: { trigger: grp, start: 'top 85%', once: true } });
    });
    /* Parallax photos. */
    G.utils.toArray('[data-par]').forEach(function (img) {
      var amt = parseFloat(img.getAttribute('data-par')) || 12;
      G.fromTo(img, { yPercent: -amt / 2 }, { yPercent: amt / 2, ease: 'none', scrollTrigger: { trigger: img.parentNode, start: 'top bottom', end: 'bottom top', scrub: true } });
    });
    /* The hero photo sinks and dims as you leave it. */
    var hm = d.querySelector('.hero .hero-media');
    if (hm) G.to(hm, { yPercent: 18, opacity: .35, ease: 'none', scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: true } });
    /* Giant outline words drift sideways. */
    G.utils.toArray('[data-drift]').forEach(function (el) {
      G.fromTo(el, { xPercent: rtl ? -6 : 6 }, { xPercent: rtl ? 6 : -6, ease: 'none', scrollTrigger: { trigger: el.parentNode, start: 'top bottom', end: 'bottom top', scrub: true } });
    });
    /* Counters. */
    G.utils.toArray('[data-count]').forEach(function (el) {
      var to = parseFloat(el.getAttribute('data-count')), dec = (el.getAttribute('data-count').split('.')[1] || '').length, o = { v: 0 };
      var fmt = el.getAttribute('data-ar') ? function (n) { return n.toFixed(dec).replace('.', '٫').replace(/\d/g, function (x) { return '٠١٢٣٤٥٦٧٨٩'[x]; }); } : function (n) { return n.toFixed(dec); };
      el.textContent = fmt(0);
      G.to(o, { v: to, duration: 2, ease: 'power3.out', scrollTrigger: { trigger: el, start: 'top 90%', once: true }, onUpdate: function () { el.textContent = fmt(o.v); } });
    });

    /* Destinations: pinned horizontal travel on large screens. */
    var mm = G.matchMedia();
    mm.add('(min-width: 1060px)', function () {
      var sec = d.querySelector('.dest'), track = d.querySelector('.dest-track'), bar = d.querySelector('.dest-bar .prog i');
      if (!sec || !track) return;
      sec.classList.add('pinned');
      var dist = function () { return Math.max(0, track.scrollWidth - innerWidth); };
      var tw = G.to(track, { x: function () { return (rtl ? 1 : -1) * dist(); }, ease: 'none',
        scrollTrigger: { trigger: sec, start: 'top top', end: function () { return '+=' + dist(); }, pin: true, scrub: 1, invalidateOnRefresh: true,
          onUpdate: function (s) { if (bar) bar.style.width = (12 + s.progress * 88) + '%'; } } });
      return function () { sec.classList.remove('pinned'); tw.kill(); G.set(track, { clearProps: 'all' }); };
    });
  }
  /* Small screens: the progress bar follows the swipe. */
  var trk = d.querySelector('.dest-track'), pb = d.querySelector('.dest-bar .prog i');
  if (trk && pb) trk.addEventListener('scroll', function () {
    var m = trk.scrollWidth - trk.clientWidth; if (m > 0) pb.style.width = (12 + Math.abs(trk.scrollLeft) / m * 88) + '%';
  }, { passive: true });

  /* ── Cursor and magnetic buttons (desktop only) ── */
  if (fine && !reduce) {
    root.classList.add('has-cursor');
    var c = d.createElement('div'), cd = d.createElement('div'); c.className = 'cursor'; cd.className = 'cursor-dot';
    d.body.appendChild(c); d.body.appendChild(cd);
    var mx = -100, my = -100, cx = mx, cy = my, first = true;
    addEventListener('pointermove', function (e) { mx = e.clientX; my = e.clientY; if (first) { cx = mx; cy = my; first = false; } cd.style.transform = 'translate(' + mx + 'px,' + my + 'px)'; }, { passive: true });
    (function loop() { cx += (mx - cx) * .18; cy += (my - cy) * .18; c.style.transform = 'translate(' + cx + 'px,' + cy + 'px)'; requestAnimationFrame(loop); })();
    d.querySelectorAll('a,button,summary,input,select,textarea').forEach(function (el) {
      el.addEventListener('pointerenter', function () { c.classList.add('hover'); });
      el.addEventListener('pointerleave', function () { c.classList.remove('hover'); });
    });
    d.querySelectorAll('.btn,.circle-link,.wa-fab').forEach(function (b) {
      b.addEventListener('pointermove', function (e) {
        var r = b.getBoundingClientRect(), x = e.clientX - r.left - r.width / 2, y = e.clientY - r.top - r.height / 2;
        b.style.transform = 'translate(' + x * .18 + 'px,' + y * .28 + 'px)';
      });
      b.addEventListener('pointerleave', function () { b.style.transform = ''; });
    });
  }

  /* ── WhatsApp: the button opens up, and a greeting appears once per visit ── */
  var fab = d.querySelector('.wa-fab'), bub = d.querySelector('.wa-bubble');
  if (fab && bub) {
    var closed = false; try { closed = sessionStorage.getItem('vt-bubble') === '1'; } catch (e) {}
    if (!closed) setTimeout(function () { bub.classList.add('show'); fab.classList.add('open'); }, 9000);
    var shut = function () { bub.classList.remove('show'); fab.classList.remove('open'); try { sessionStorage.setItem('vt-bubble', '1'); } catch (e) {} };
    bub.querySelector('.x').addEventListener('click', shut);
    bub.querySelectorAll('a').forEach(function (a) { a.addEventListener('click', shut); });
    fab.addEventListener('click', shut);
  }

  /* ── Real photos dropped in photos/ are appended to the gallery ── */
  var gal = d.querySelector('.gallery');
  if (gal && VT.photos) VT.photos.forEach(function (p) {
    var img = new Image();
    img.onload = function () { var f = d.createElement('figure'); img.alt = p.alt || ''; f.appendChild(img); gal.appendChild(f); gal.hidden = false; };
    img.src = (VT.base || '') + 'photos/' + p.file;
  });

  /* ── Booking ── */
  function wa(text) { window.open('https://wa.me/' + VT.wa + '?text=' + encodeURIComponent(text), '_blank', 'noopener'); }
  function line(k, v) { return v ? '• ' + k + ': ' + v : null; }

  var quick = d.getElementById('quickform');
  if (quick) quick.addEventListener('submit', function (e) {
    e.preventDefault();
    var f = quick.elements;
    wa([t.hello, line(t.from, f.from.value.trim()), line(t.to, f.to.value.trim()), line(t.when, f.when.value || t.now), line(t.pax, f.pax.value), '', t.price].filter(function (x) { return x !== null; }).join('\n'));
  });

  var form = d.getElementById('bookform');
  if (!form) return;
  var trip = 'ride';
  d.querySelectorAll('[data-trip]').forEach(function (b) {
    b.addEventListener('click', function () {
      trip = b.getAttribute('data-trip');
      d.querySelectorAll('[data-trip]').forEach(function (o) { o.setAttribute('aria-pressed', o === b ? 'true' : 'false'); });
      var fl = d.getElementById('f-flight-wrap'); if (fl) fl.hidden = trip !== 'airport';
      if (trip === 'airport' && !form.elements.to.value) form.elements.to.value = t.airport;
      if (motion && ST) ST.refresh();
    });
  });
  var date = form.elements.date;
  if (date) { var n = new Date(), p2 = function (x) { return (x < 10 ? '0' : '') + x; }; date.min = n.getFullYear() + '-' + p2(n.getMonth() + 1) + '-' + p2(n.getDate()); }
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    var v = function (k) { var el = form.elements[k]; return el && el.value ? el.value.trim() : ''; };
    wa([t.hello, line(t.type, (t.trips || {})[trip]), line(t.from, v('from')), line(t.to, v('to')),
        line(t.when, [v('date'), v('time')].filter(Boolean).join(' ') || t.now), line(t.pax, v('pax')), line(t.bags, v('bags')),
        trip === 'airport' ? line(t.flight, v('flight')) : null, line(t.name, v('name')), line(t.notes, v('notes')), '', t.price]
      .filter(function (x) { return x !== null; }).join('\n'));
  });
})();
