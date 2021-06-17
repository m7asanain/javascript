const button = document.querySelector('button');
const output = document.querySelector('p');

const setTimer = (duration) => {
  const promis = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Done!');
    }, duration);
  });
  return promis;
};

function trackUserHandler() {
  navigator.geolocation.getCurrentPosition(postData => {
    setTimer(2000).then(date => {
      console.log(date, postData);
    });
  }, error => {
    console.log('couldn\'t get the location.', error);
  });
  setTimer(0).then(() => {
    console.log('Timer done!');
  });
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