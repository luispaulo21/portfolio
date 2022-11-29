"use strict";

const enableInfiniteSlide = () => {
  const containerSlideList = document.querySelector('.section__benefits .benefits__container'),
        slideList = document.querySelector('.section__benefits .benefits__list');
  
  let cloneSlideList,
      slideListWidth = slideList.scrollWidth,
      scrollToLeft = 0;

  const copySlideList = () => {
    cloneSlideList = slideList.cloneNode(true);
    // containerSlideList.appendChild(cloneSlideList);
  }

  const activateScroll = () => {
    const elementLeftDistance = slideList.getBoundingClientRect().left;
    scrollToLeft += 2;
    // slideList.style.transform = `translate3d(-${scrollToLeft}px, -50%, 0)`;
    // (scrollToLeft >= (-scrollToLeft)) ? console.log('É maior') : console.log('É menor');
  }

  setInterval(() => {
    activateScroll();
  }, 20);

  console.log(-slideListWidth)



  copySlideList();
}

// enableInfiniteSlide();