let currentSlide = 0;
const totalSlides = 10; // How many "sections" of background you have


window.addEventListener('keydown', (event) => {
    const title = document.querySelector('h1');
    const name = document.querySelector('h3');
    const pageNumber = document.querySelector('h4');
    const title1 = document.querySelector('.title1')
    const text1 = document.querySelector('.text1')
    const inkscape = document.querySelector('.inkscape')
  if (event.key === 'ArrowRight') {
    if (currentSlide < totalSlides - 1) {
      currentSlide++;
    }
  } else if (event.key === 'ArrowLeft') {
    if (currentSlide > 0) {
      currentSlide--;
    }
  }

  // Update minimized state based on current slide
  if (currentSlide > 0) {
    title.classList.add('minimized');
    name.classList.add('minimized');
    pageNumber.classList.add('onscreen');
  } else {
    title.classList.remove('minimized');
    title2.classList.remove('minimized');
    pageNumber.classList.remove('onscreen');
  }

  if (currentSlide == 1) {
    title1.classList.add('ontoscreen')
    text1.classList.add('ontoscreen')
    inkscape.classList.add('ontoscreen')
  } else {
    title1.classList.remove('ontoscreen')
    text1.classList.remove('ontoscreen')
    inkscape.classList.remove('ontoscreen')
  }
 
  // Update page number
  pageNumber.textContent = `${currentSlide + 1}`;

  // Calculate the percentage to shift (e.g., 0%, -10%, -20%, etc.)
  const offset = -(currentSlide * (100 / totalSlides));
  document.documentElement.style.setProperty('--bg-offset', `${offset}%`);
});

