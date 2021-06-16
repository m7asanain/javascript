const button = document.querySelector('button');
const output = document.querySelector('p');


function trackUserHandler() {
  navigator.geolocation.getCurrentPosition(postData => {
    setTimeout(() => {
      console.log('The location is: ', postData);
    }, 2000);
  }, error => {
    console.log('couldn\'t get the location.', error);
  });
  setTimeout(() => {
    console.log('Timer done!');
  }, 0);
  console.log('Getting location...');
}

button.addEventListener('click', trackUserHandler);

let result = 0;

// for (let i = 0; i < 100000000; i++) {
//   result += i;
// }

// console.log(result);


// const greet = () => {
//   console.log('Hi');
// }

// const showAlert = () => {
//   console.log('Danger!');
// }

// setTimeout(showAlert, 2000);

// greet();