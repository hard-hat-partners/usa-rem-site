// Scroll progress bar in brand orange, pinned across the top of every page.
(function () {
  function mount() {
    if (document.getElementById('scroll-progress')) return;
    var b = document.createElement('div');
    b.id = 'scroll-progress';
    b.setAttribute('aria-hidden', 'true');
    b.style.cssText = 'position:fixed;top:0;left:0;height:4px;width:100%;background:var(--brand,#B4531F);transform-origin:0 50%;transform:scaleX(0);z-index:9999;pointer-events:none';
    document.body.appendChild(b);
    var raf = 0;
    function update() {
      raf = 0;
      var d = document.documentElement, max = d.scrollHeight - window.innerHeight;
      b.style.transform = 'scaleX(' + (max > 0 ? Math.min(1, window.scrollY / max) : 0) + ')';
    }
    function req() { if (!raf) raf = requestAnimationFrame(update); }
    window.addEventListener('scroll', req, { passive: true });
    window.addEventListener('resize', req);
    new ResizeObserver(req).observe(document.body);
    update();
  }
  if (document.body) mount(); else document.addEventListener('DOMContentLoaded', mount);
})();
// Subtle scroll reveals. Headings and [data-reveal] items fade up once as they enter view.
(function () {
  if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  if (!('IntersectionObserver' in window)) return;
  var io = new IntersectionObserver(function (es) {
    es.forEach(function (e) {
      if (!e.isIntersecting) return;
      var el = e.target;
      el.style.opacity = '1';
      el.style.transform = 'none';
      io.unobserve(el);
    });
  }, { rootMargin: '0px 0px -8% 0px', threshold: 0.01 });
  function prep(el, delay) {
    if (el.__rv) return;
    el.__rv = 1;
    var r = el.getBoundingClientRect();
    if (r.top < window.innerHeight * 0.9) return; // already visible on load: leave alone
    el.style.opacity = '0';
    el.style.transform = 'translateY(16px)';
    el.style.transition = 'opacity .7s ease ' + delay + 'ms, transform .7s cubic-bezier(.2,.7,.2,1) ' + delay + 'ms';
    io.observe(el);
  }
  function scan() {
    document.querySelectorAll('section h2').forEach(function (el) { prep(el, 0); });
    document.querySelectorAll('[data-reveal]').forEach(function (el) {
      prep(el, +(el.getAttribute('data-reveal') || 0));
    });
  }
  var t;
  function queue() { clearTimeout(t); t = setTimeout(scan, 120); }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', queue); else queue();
  new MutationObserver(queue).observe(document.documentElement, { childList: true, subtree: true });
})();
