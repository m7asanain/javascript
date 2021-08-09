const storBtn = document.getElementById('store-btn');
const retrBtn = document.getElementById('retrieve-btn');

storBtn.addEventListener('click', () => {
  const userId = 'u123';
  document.cookie =  `uid = ${userId}`;
});

retrBtn.addEventListener('click', () => {
  console.log(document.cookie);
});