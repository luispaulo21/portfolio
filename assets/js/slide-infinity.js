"use strict";

const enableInfiniteSlide = () => {
  const containerSlideList = document.querySelector('.section__benefits .benefits__container'),
        slideList = document.querySelector('.section__benefits .benefits__list'),
        allItemsList = slideList.querySelectorAll('li'),
        containerListWidth = containerSlideList.offsetWidth,
        referenceItem = slideList.querySelector('li:last-child').nextSibling;

  let slideListWidth = containerSlideList.clientWidth,
      sizeOfAllItems = 0,
      scrollLeft = 0;

  const addClonedItemsToList = () => {
    for(let i = 0; i < allItemsList.length; i++) {
      sizeOfAllItems += (allItemsList[i].offsetWidth + 56);
  
      if(sizeOfAllItems <= slideListWidth) {
        cloneItemList(allItemsList[i])
      } else {
        return;
      }
      
    }
  }

  function cloneItemList(itemList) {
    const itemListClone = itemList.cloneNode(true);
    slideList.appendChild(itemListClone);
  }

  const changeItemPosition = () => {
  
  }

  const scrollSlide = () => {
    
  }
  

  addClonedItemsToList();
}

enableInfiniteSlide();
window.addEventListener('resize', enableInfiniteSlide);