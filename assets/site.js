// Small enhancements only. The site works without JavaScript.
(function () {
  document.documentElement.classList.remove('no-js');

  // Header border once the page scrolls
  var nav = document.querySelector('.nav');
  var onScroll = function () { if (nav) nav.classList.toggle('scrolled', window.scrollY > 8); };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // Mobile menu
  var btn = document.querySelector('.menu-btn');
  var menu = document.querySelector('.nav nav');
  if (btn && menu) {
    btn.addEventListener('click', function () {
      var open = menu.classList.toggle('open');
      btn.setAttribute('aria-expanded', open ? 'true' : 'false');
      btn.textContent = open ? '✕' : '☰';
    });
    menu.addEventListener('click', function (e) {
      if (e.target.tagName === 'A') { menu.classList.remove('open'); btn.setAttribute('aria-expanded', 'false'); btn.textContent = '☰'; }
    });
  }

  // Reveal sections as they scroll into view
  var items = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) { if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); } });
    }, { rootMargin: '0px 0px -8% 0px' });
    items.forEach(function (el) { io.observe(el); });
  } else {
    items.forEach(function (el) { el.classList.add('in'); });
  }

  // 3D tilt on the portrait (pointer devices only, respects reduced motion)
  var p = document.querySelector('.portrait');
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var fine = window.matchMedia('(pointer: fine)').matches;
  if (p && !reduce && fine) {
    var stage = document.querySelector('.hero');
    stage.addEventListener('mousemove', function (e) {
      var r = p.getBoundingClientRect();
      var x = (e.clientX - (r.left + r.width / 2)) / window.innerWidth;
      var y = (e.clientY - (r.top + r.height / 2)) / window.innerHeight;
      p.style.transform = 'rotateY(' + (x * 14).toFixed(2) + 'deg) rotateX(' + (-y * 10).toFixed(2) + 'deg)';
    });
    stage.addEventListener('mouseleave', function () { p.style.transform = ''; });
  }

  // Year in footer
  var y = document.querySelector('[data-year]');
  if (y) y.textContent = new Date().getFullYear();

  // Project filters
  var fb = document.querySelectorAll('.filters button');
  var cards = document.querySelectorAll('.works .work');
  fb.forEach(function (b) {
    b.addEventListener('click', function () {
      var f = b.getAttribute('data-f');
      fb.forEach(function (x) { x.setAttribute('aria-pressed', x === b ? 'true' : 'false'); });
      cards.forEach(function (c) {
        var show = f === 'all' || (' ' + c.getAttribute('data-cat') + ' ').indexOf(' ' + f + ' ') > -1;
        c.hidden = !show; if (show) c.classList.add('in');
      });
    });
  });

  // Company logos: show initials if the logo did not load
  var checkLogos = function () {
    document.querySelectorAll('.logo-wrap img').forEach(function (im) {
      if (!im.complete || im.naturalWidth < 2) im.parentNode.classList.add('failed');
    });
  };
  window.addEventListener('load', function () { setTimeout(checkLogos, 3000); });
})();
