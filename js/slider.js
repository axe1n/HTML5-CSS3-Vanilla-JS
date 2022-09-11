'use strict';

// // Реализация через функцию
const slider = () => {
  const sliderEl = document.querySelector('.b-slider');

  let slideIdx = 0;
  const slides = sliderEl.querySelectorAll('.b-slider__text');

  const prevSlide = () => {
    slides[slideIdx].classList.add('b-slider__text_hidden');
    if (slideIdx === 0) {
      slideIdx = slides.length - 1;
    } else {
      slideIdx--;
    }
    slides[slideIdx].classList.remove('b-slider__text_hidden');
  };

  const nextSlide = () => {
    slides[slideIdx].classList.add('b-slider__text_hidden');
    if (slideIdx === slides.length - 1) {
      slideIdx = 0;
    } else {
      slideIdx++;
    }
    slides[slideIdx].classList.remove('b-slider__text_hidden');
  };

  const sliderPrevEl = document.querySelector('.b-slider__prev');
  const sliderNextEl = document.querySelector('.b-slider__next');

  sliderPrevEl.addEventListener('click', () => prevSlide());
  sliderNextEl.addEventListener('click', () => nextSlide());
};

// Реализация через класс
// class Slider {
//   constructor() {
//     this.sliderEl = document.querySelector('.b-slider');
//     this.slides = this.sliderEl.querySelectorAll('.b-slider__text');
//     this.slideIdx = 0;
//   }

//   init() {
//     const sliderPrevEl = document.querySelector('.b-slider__prev');
//     const sliderNextEl = document.querySelector('.b-slider__next');

//     sliderPrevEl.addEventListener('click', () => this.prevSlide());
//     sliderNextEl.addEventListener('click', () => this.nextSlide());
//   }

//   prevSlide() {
//     this.slides[this.slideIdx].classList.add('b-slider__text_hidden');
//     if (this.slideIdx === 0) {
//       this.slideIdx = this.slides.length - 1;
//     } else {
//       this.slideIdx--;
//     }
//     this.slides[this.slideIdx].classList.remove('b-slider__text_hidden');
//   }

//   nextSlide() {
//     this.slides[this.slideIdx].classList.add('b-slider__text_hidden');
//     if (this.slideIdx === this.slides.length - 1) {
//       this.slideIdx = 0;
//     } else {
//       this.slideIdx++;
//     }
//     this.slides[this.slideIdx].classList.remove('b-slider__text_hidden');
//   }
// }
