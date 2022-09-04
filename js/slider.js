'use strict';

class Slider {
  constructor(selector) {
    this.sliderEl = document.querySelector(selector);
    if (!this.sliderEl) {
      throw new Error('wrong selector');
    }
    this.slides = this.sliderEl.querySelectorAll('.b-slider__text');
    this.slideIdx = 0;
  }
  init() {
    const sliderPrevEl = document.querySelector('.b-slider__prev');
    const sliderNextEl = document.querySelector('.b-slider__next');

    sliderPrevEl.addEventListener('click', () => this.prevSlide());
    sliderNextEl.addEventListener('click', () => this.nextSlide());
  }

  prevSlide() {
    this.slides[this.slideIdx].classList.add('b-slider__text_hidden');
    if (this.slideIdx === 0) {
      this.slideIdx = this.slides.length - 1;
    } else {
      this.slideIdx--;
    }
    this.slides[this.slideIdx].classList.remove('b-slider__text_hidden');
  }

  nextSlide() {
    this.slides[this.slideIdx].classList.add('b-slider__text_hidden');
    if (this.slideIdx === this.slides.length - 1) {
      this.slideIdx = 0;
    } else {
      this.slideIdx++;
    }
    this.slides[this.slideIdx].classList.remove('b-slider__text_hidden');
  }
}
