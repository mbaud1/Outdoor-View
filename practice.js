document.addEventListener('DOMContentLoaded', () => {
  const modal = document.getElementById('image-modal');
  const modalImg = document.getElementById('modal-img');
  const modalCaption = document.getElementById('modal-caption');
  const closeBtn = document.getElementById('modal-close');

  const closeModal = () => {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
  };

  document.querySelectorAll('img.expandable').forEach(img => {
    img.addEventListener('click', (e) => {
      e.stopPropagation();
      modalImg.src = img.src;
      modalImg.alt = img.alt;
      
      // Update the caption text with the image's alt attribute
      modalCaption.textContent = img.alt;

      modal.style.display = 'flex';
      document.body.style.overflow = 'hidden';
    });
  });

  closeBtn.addEventListener('click', closeModal);

  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      closeModal();
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.style.display === 'flex') {
      closeModal();
    }
  });
});