const storeBtn = document.getElementById('store-btn');
const retrieveBtn = document.getElementById('retrieve-btn');

const userId = 'u123';
const user = {
  name: 'Mustafa',
  age: 20,
  hobbies: ['Coding', 'Reading', 'Science']
}

storeBtn.addEventListener('click', () => {
  // localStorage.setItem('uid', userId);
  sessionStorage.setItem('uid', userId);
  localStorage.setItem('user', JSON.stringify(user)); // make it string with json format
});

retrieveBtn.addEventListener('click', () => {
  // const extractedId = localStorage.getItem('uid');
  const extractedId = sessionStorage.getItem('uid');

  const extractedUser = JSON.parse(localStorage.getItem('user')); // parse it so we could read the data

  console.table(extractedUser);

  if (extractedId) {
    console.log(`Got the id ${extractedId}`);
  } else {
    console.log('Couldn\'t get the id');
  }
});