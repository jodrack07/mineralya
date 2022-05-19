const links = document.querySelectorAll('.link');

document.querySelector('.menu-btn').addEventListener('click', () => {
  document.querySelector('.main-menu').classList.toggle('display');
});

links.forEach((link) => {
  link.addEventListener('click', () => {
    document.querySelector('.main-menu').classList.remove('display');
  });
});

// slides
const slides = document.querySelectorAll('.slide');
const buttons = document.querySelectorAll('.btn');
let currentSlide = 1;

const manualNavigation = (manual) => {
  slides.forEach((slide) => {
    slide.classList.remove('active');
  });

  buttons.forEach((button) => {
    button.classList.remove('active');
  });

  slides[manual].classList.add('active');
  buttons[manual].classList.add('active');
};

buttons.forEach((button, i) => {
  button.addEventListener('click', () => {
    manualNavigation(i);
    currentSlide = i;
  });
});
