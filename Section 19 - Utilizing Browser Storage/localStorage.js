const storBtn = document.getElementById('store-btn');
const retrBtn = document.getElementById('retrieve-btn');

const userId = 'u123';
const user = {
  name: 'Mustafa',
  age: 20,
  hobbies: ['coding', 'reading']
}

storBtn.addEventListener('click', () => {
  sessionStorage.setItem('uid', userId);
  localStorage.setItem('user', JSON.stringify(user));
});

retrBtn.addEventListener('click', () => {
  const exractedId = sessionStorage.getItem('uid');
  const extrectedUser = JSON.parse(localStorage.getItem('user'));
  console.log(extrectedUser);

  if (exractedId) {
    console.log(`Id founded - ${exractedId}`); 
  } else {
    console.log('Could\'nt get the the Id.');
  }
});