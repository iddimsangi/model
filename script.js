'use strict';
const modelOpenHandler = () => {
  modal.classList.remove('hidden');
  overLay.classList.remove('hidden');
};

const modelCloseHandler = () => {
  modal.classList.add('hidden');
  overLay.classList.add('hidden');
};
const closeButn = document.querySelector('.close-modal');
const modal = document.querySelector('.modal');
const overLay = document.querySelector('.overlay');
const showModalBtn = document.querySelectorAll('.show-modal');
console.log(showModalBtn);
for (let i = 0; i < showModalBtn.length; i++) {
  showModalBtn[i].addEventListener('click', modelOpenHandler);
}
closeButn.addEventListener('click', modelCloseHandler);
