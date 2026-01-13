let currentSlide = 0;
const totalSlides = 3; // How many "sections" of background you have


window.addEventListener('keydown', (event) => {
    const title = document.querySelector('h1');
    const title2 = document.querySelector('h3');
  if (event.key === 'ArrowRight') {
    if (currentSlide < totalSlides - 1) {
      currentSlide++;
      title.classList.add('minimized')
      title2.classList.add('minimized')
    }
  } else if (event.key === 'ArrowLeft') {
    if (currentSlide > 0) {
      currentSlide--;
        title.classList.remove('minimized')
        title2.classList.remove('minimized')
    }
  }

  // Calculate the percentage to shift (e.g., 0%, -33.3%, -66.6%)
  const offset = -(currentSlide * (100 / totalSlides));
  document.documentElement.style.setProperty('--bg-offset', `${offset}%`);
});
