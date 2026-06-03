(function () {
  var deck = document.getElementById('deck');
  if (!deck) return;
  var slides = deck.querySelectorAll('.slide');
  var indicator = document.getElementById('slide-indicator');
  var prev = document.getElementById('slide-prev');
  var next = document.getElementById('slide-next');

  function currentIndex() {
    var y = deck.scrollTop;
    var best = 0;
    var bestDist = Infinity;
    for (var i = 0; i < slides.length; i++) {
      var d = Math.abs(slides[i].offsetTop - y);
      if (d < bestDist) {
        bestDist = d;
        best = i;
      }
    }
    return best;
  }

  function goTo(i) {
    i = Math.max(0, Math.min(slides.length - 1, i));
    slides[i].scrollIntoView({ behavior: 'smooth', block: 'start' });
    updateIndicator(i);
  }

  function updateIndicator(i) {
    if (indicator) indicator.textContent = (i + 1) + ' / ' + slides.length;
  }

  deck.addEventListener('scroll', function () {
    window.requestAnimationFrame(function () {
      updateIndicator(currentIndex());
    });
  }, { passive: true });

  if (prev) prev.addEventListener('click', function () { goTo(currentIndex() - 1); });
  if (next) next.addEventListener('click', function () { goTo(currentIndex() + 1); });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'ArrowDown' || e.key === 'ArrowRight' || e.key === ' ') {
      e.preventDefault();
      goTo(currentIndex() + 1);
    }
    if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') {
      e.preventDefault();
      goTo(currentIndex() - 1);
    }
  });

  updateIndicator(0);
})();
