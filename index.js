'use sctrict';

//Смена стиля при наведении на пункт меню
const navEls = document.querySelectorAll('.b-nav');

navEls.forEach((el) => {
  el.addEventListener('mouseover', (e) => {
    if (!e.target.closest('.b-nav__menuItem')) {
      return;
    }
    e.target.classList.add('b-nav__menuItem_accent');
  });

  el.addEventListener('mouseout', (e) => {
    if (!e.target.closest('.b-nav__menuItem')) {
      return;
    }
    e.target.classList.remove('b-nav__menuItem_accent');
  });
});

// Открытие/закрытие бургер меню
const burgerEl = document.querySelector('.b-burger');
const openBurgerEl = document.querySelector('.b-openBurger');

burgerEl.addEventListener('click', () => {
  openBurgerEl.classList.toggle('hidden');

  const isBurgerOpen = !openBurgerEl.classList.contains('hidden');

  if (isBurgerOpen) {
    return (burgerEl.querySelector('.b-burger__icon').src =
      './img/close-burger.svg');
  }
  burgerEl.querySelector('.b-burger__icon').src = './img/burger.svg';
});

// Слайдер
const slider = new Slider('.b-slider');
slider.init();
