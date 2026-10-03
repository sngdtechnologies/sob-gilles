// Vanilla effects (scroll reveal, count-up, cursor glow). Kept outside React so that
// server-rendered content is always visible and nothing depends on hydration.
const script = `
(function () {
  var root = document.documentElement;
  root.classList.add('js');
  var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  function count(el) {
    var target = parseFloat(el.getAttribute('data-count'));
    if (isNaN(target) || reduce) return;
    var suffix = el.getAttribute('data-suffix') || '';
    var start = null, duration = 1400;
    function tick(t) {
      if (start === null) start = t;
      var p = Math.min((t - start) / duration, 1);
      var eased = 1 - Math.pow(1 - p, 3);
      el.textContent = Math.round(target * eased) + suffix;
      if (p < 1) requestAnimationFrame(tick);
    }
    el.textContent = '0' + suffix;
    requestAnimationFrame(tick);
  }

  var io = 'IntersectionObserver' in window ? new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (!entry.isIntersecting) return;
      var el = entry.target;
      el.classList.add('is-visible');
      if (el.hasAttribute('data-count')) count(el);
      io.unobserve(el);
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -6% 0px' }) : null;

  function scan(node) {
    var list = (node.querySelectorAll ? node.querySelectorAll('[data-reveal],[data-count]') : []);
    var all = [].slice.call(list);
    if (node.matches && node.matches('[data-reveal],[data-count]')) all.push(node);
    all.forEach(function (el) {
      if (el.__seen) return;
      el.__seen = true;
      if (io) io.observe(el); else el.classList.add('is-visible');
    });
  }

  function init() {
    scan(document.body);
    new MutationObserver(function (mutations) {
      mutations.forEach(function (m) {
        m.addedNodes.forEach(function (n) { if (n.nodeType === 1) scan(n); });
      });
    }).observe(document.body, { childList: true, subtree: true });
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init); else init();

  document.addEventListener('pointermove', function (e) {
    var el = e.target && e.target.closest ? e.target.closest('[data-spotlight]') : null;
    if (!el) return;
    var r = el.getBoundingClientRect();
    el.style.setProperty('--mx', (e.clientX - r.left) + 'px');
    el.style.setProperty('--my', (e.clientY - r.top) + 'px');
  }, { passive: true });
})();
`

export function EffectsScript() {
  return <script dangerouslySetInnerHTML={{ __html: script }} />
}
