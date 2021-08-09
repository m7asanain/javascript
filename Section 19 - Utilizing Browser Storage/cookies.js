const storeBtn = document.getElementById('store-btn');
const retrieveBtn = document.getElementById('retrieve-btn');

storeBtn.addEventListener('click', () => {
  const userId = 'u123';
  const user = {name: 'Mustafa', age: 20};
  document.cookie = `uid=${userId}; max-age=2`;
  document.cookie = `user=${JSON.stringify(user)}`;
});

retrieveBtn.addEventListener('click', () => {
  // console.log(document.cookie.split(';'));
  console.log(document.cookie);

  // to get rid with white space
  const cookieData = document.cookie.split(';');
  const data = cookieData.map(i => {
    return i.trim();
  });

  // console.log(data);
  console.log(data[1].split('=')[1]);
});