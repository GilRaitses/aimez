(function () {
  var slides = Array.prototype.slice.call(document.querySelectorAll('.deck > .slide'));
  if (!slides.length) return;
  var i = 0;
  var countEl = document.getElementById('count');
  var progressEl = document.getElementById('progress');

  function show(n) {
    i = Math.max(0, Math.min(slides.length - 1, n));
    slides.forEach(function (s, k) {
      s.classList.toggle('active', k === i);
    });
    if (countEl) countEl.textContent = (i + 1) + ' / ' + slides.length;
    if (progressEl) {
      progressEl.style.width =
        slides.length > 1 ? (i / (slides.length - 1)) * 100 + '%' : '100%';
    }
    if (location.hash !== '#' + (i + 1)) {
      history.replaceState(null, '', '#' + (i + 1));
    }
  }

  function next() { show(i + 1); }
  function prev() { show(i - 1); }

  var nextBtn = document.getElementById('next');
  var prevBtn = document.getElementById('prev');
  if (nextBtn) nextBtn.addEventListener('click', next);
  if (prevBtn) prevBtn.addEventListener('click', prev);

  document.addEventListener('keydown', function (e) {
    if (e.key === 'ArrowRight' || e.key === 'PageDown' || e.key === ' ') {
      e.preventDefault();
      next();
    } else if (e.key === 'ArrowLeft' || e.key === 'PageUp') {
      e.preventDefault();
      prev();
    } else if (e.key === 'Home') {
      show(0);
    } else if (e.key === 'End') {
      show(slides.length - 1);
    }
  });

  var start = parseInt((location.hash || '').replace('#', ''), 10);
  show(isNaN(start) ? 0 : start - 1);
})();
