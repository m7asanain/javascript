const button = document.querySelector('button');
const output = document.querySelector('p');

const getPosition = (opts) => {
  const promis = new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(success => {
      resolve(success);
    }, error => {
      reject(error);
    }, opts);
  });
  return promis;
};

const setTimer = (duration) => {
  const promis = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Done!');
    }, duration);
  });
  return promis;
};

async function trackUserHandler() {
  // let positionData;

  let posData;
  let timerData;

  try {
    posData = await getPosition();
    timerData = await setTimer(2000);
  } catch (error) {
    console.log(error);
  }
  console.log(timerData, posData);  // always run

    // .then(posData => {
    //   positionData = posData;
    //   return setTimer(2000);
    // })
    //   .catch(err => {
    //     console.log(err);
    //     return 'on we go...';
    //   })
    //   .then(data => {
    //     console.log(data, positionData);
    //   });

  // setTimer(1000).then(() => {
  //   console.log('Timer done!');
  // });
  // console.log('Getting location...');
}

button.addEventListener('click', trackUserHandler);

// Promise.race([getPosition(), setTimer(1000)]).then(data => {
//   console.log(data);
// });

// Promise.all([getPosition(), setTimer(1000)]).then(promiseData => {
//   console.log(promiseData);
// });

Promise.allSettled([getPosition(), setTimer(1000)]).then(promiseData => {
  console.log(promiseData);
});