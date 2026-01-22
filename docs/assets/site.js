document.addEventListener('DOMContentLoaded', function() {
  const modal = document.getElementById('modal');
  const modalFrame = document.getElementById('modal-frame');
  const modalClose = document.getElementById('modal-close');
  const buttons = document.querySelectorAll('.link-button');

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
});
