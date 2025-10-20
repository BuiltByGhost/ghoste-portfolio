document.addEventListener("DOMContentLoaded", () => {
  const fadeElements = document.querySelectorAll('.fade-in, .slide-up');
  fadeElements.forEach(el => {
    el.style.animationDelay = '0.3s';
  });
});
