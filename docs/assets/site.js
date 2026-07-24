document.addEventListener('DOMContentLoaded', function() {
  const modal = document.getElementById('modal');
  const modalFrame = document.getElementById('modal-frame');
  const modalClose = document.getElementById('modal-close');
  const buttons = document.querySelectorAll('.link-button');

  if (modal && modalFrame && modalClose && buttons.length) {
    buttons.forEach(function(button) {
      button.addEventListener('click', function() {
        const target = this.getAttribute('data-target');
        modalFrame.src = target;
        modal.classList.add('active');
      });
    });

    modalClose.addEventListener('click', function() {
      modal.classList.remove('active');
      modalFrame.src = '';
    });

    modal.addEventListener('click', function(e) {
      if (e.target === modal) {
        modal.classList.remove('active');
        modalFrame.src = '';
      }
    });

    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape' && modal.classList.contains('active')) {
        modal.classList.remove('active');
        modalFrame.src = '';
      }
    });
  }

  // Explicit loading / failure for embedded demos (never empty white panel).
  const embeds = document.querySelectorAll('[data-demo-embed]');
  embeds.forEach(function(wrap) {
    const frame = wrap.querySelector('[data-demo-frame]');
    const loading = wrap.querySelector('[data-demo-state="loading"]');
    const failure = wrap.querySelector('[data-demo-state="failure"]');
    if (!frame || !loading || !failure) {
      return;
    }

    let settled = false;
    const LOAD_TIMEOUT_MS = 12000;

    function markReady() {
      if (settled) {
        return;
      }
      settled = true;
      wrap.classList.add('is-ready');
      wrap.classList.remove('is-failed');
      loading.classList.remove('is-active');
      loading.hidden = true;
      failure.hidden = true;
      failure.classList.remove('is-active');
    }

    function markFailed() {
      if (settled) {
        return;
      }
      settled = true;
      wrap.classList.add('is-failed');
      wrap.classList.remove('is-ready');
      loading.classList.remove('is-active');
      loading.hidden = true;
      failure.hidden = false;
      failure.classList.add('is-active');
    }

    frame.addEventListener('load', markReady);
    frame.addEventListener('error', markFailed);
    window.setTimeout(function() {
      if (!settled) {
        markFailed();
      }
    }, LOAD_TIMEOUT_MS);
  });
});
