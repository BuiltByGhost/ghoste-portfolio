const overlay = document.querySelector('.dark-overlay');

document.addEventListener('mousemove', e => {
  overlay.style.setProperty('--x', `${e.clientX}px`);
  overlay.style.setProperty('--y', `${e.clientY}px`);
});
