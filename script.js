'use strict';
//querySelector has limitation
// const btn1 = document.querySelector('.show-modal');
// btn1.addEventListener('click', () => {
//   console.log('clicked button');
// });
const modelOpenHandler = () => {
  console.log(`Button ${i} is clicked`);
  modal.classList.remove('hidden');
  overLay.classList.remove('hidden');
};

const modal = document.querySelector('.modal');
const overLay = document.querySelector('.overlay');
const showModalBtn = document.querySelectorAll('.show-modal');
console.log(showModalBtn);
for (let i = 0; i < showModalBtn.length; i++) {
  showModalBtn[i].addEventListener('click', modelOpenHandler);
}
