const qrImg = document.querySelector('.qr-code');
const modal = document.getElementById('qrModal');
const overlay = modal.querySelector('.modal__overlay');

qrImg.addEventListener('click', () => {
  modal.classList.add('active');
});

overlay.addEventListener('click', () => {
  modal.classList.remove('active');
});

const orientationBtn = document.querySelector('.orientation');
const siteWrapper = document.querySelector('.container'); // оберни весь контент в div.container

orientationBtn.addEventListener('click', () => {
  siteWrapper.classList.toggle('landscape');
  orientationBtn.classList.toggle('active');
});
