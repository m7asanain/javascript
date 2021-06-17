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
  
  const posData = await getPosition();
  const timerData = await setTimer(2000);
  console.log(timerData, posData);

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