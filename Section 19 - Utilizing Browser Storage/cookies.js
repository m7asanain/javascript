const storBtn = document.getElementById('store-btn');
const retrBtn = document.getElementById('retrieve-btn');

storBtn.addEventListener('click', () => {
  const userId = 'u123';
  const user = {name: 'Mustafa', age: 20};

  document.cookie =  `uid = ${userId}; max-age=360`;
  document.cookie =  `user = ${JSON.stringify(user)}`;
});

retrBtn.addEventListener('click', () => {
  const cookieData = document.cookie.split(';');
  const data = cookieData.map(i => {
    return i.trim();
  });
  console.log(data[1].split('=')[1]); // user value
});