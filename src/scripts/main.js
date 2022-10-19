'use strict';

const arrRight = document.querySelector('.arrow__right');
const arrLeft = document.querySelector('.arrow__left');
const sliderLine = document.querySelector('.slider__line');
let offset = 0;

arrRight.addEventListener('click', () => {
  offset += 1167;

  if (offset > 2334) {
    offset = 0;
  }
  sliderLine.style.left = -offset + 'px';
});

arrLeft.addEventListener('click', () => {
  offset -= 1167;

  if (offset < 0) {
    offset = 2334;
  }
  sliderLine.style.left = -offset + 'px';
});
