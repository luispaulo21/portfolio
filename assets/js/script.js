/* 
==============================
====== FORMATTING DATES ======
==============================
*/

const yearElementInTheDOM = document.querySelector('.section__footer .year'),
      currentYear = new Date().getFullYear();

yearElementInTheDOM.innerText = currentYear;

/* 
==============================
======== LAZY LOADING ========
==============================
*/

const allImages = document.querySelectorAll('img');

allImages.forEach(img => img.setAttribute('loading', 'lazy'));