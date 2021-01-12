// const numbers = [1, 2, 3];
// console.log(numbers);

// // const moreNumbers = Array(5, 2);
// // console.log(moreNumbers);

// // const yetMoreNumbers = Array.of(1, 2);
// // console.log(yetMoreNumbers);

// const listItems = document.querySelectorAll('li');
// console.log(listItems);

// const arrayListItems = Array.from(listItems);
// console.log(arrayListItems);

// const hobbies = ['Cooking', 'Sports'];
// const personalData = [30, 'Max', {moreDetail: []}];

// const analyticsData = [[1, 1.6], [-5.4, 2.1]];

// for (const data of analyticsData) {
//   for (const dataPoint of data) {
//     console.log(dataPoint);
//   }
// }

// console.log(personalData[1]);

// const hobbies = ['Sports', 'Cooking'];
// hobbies.push('Reading');
// hobbies.unshift('Coding');
// const poppedValue = hobbies.pop();
// hobbies.shift();
// console.log(hobbies);

// hobbies[1] = 'Coding';
// // hobbies[5] = 'Reading'; // rarely used
// console.log(hobbies, hobbies[4]);

// hobbies.splice(1, 0, 'Good Food');
// console.log(hobbies);

// const removedElements = hobbies.splice(-2, 1);
// console.log(hobbies);

// 

// const testResults = [1, 5.3, 1.5, 10.99, 1.5, -5, 10];
// // const storedResults = testResults.slice(2);
// const storedResults = testResults.concat([3.99, 2]);

// testResults.push(5.91);

// console.log(storedResults, testResults);
// console.log(testResults.indexOf(1.5));

// console.log(testResults.includes(10.99));
// console.log(testResults.indexOf(10.99) !== -1);

// const personData = [{ name: 'Max' }, { name: 'Manuel' }];
// console.log(personData.indexOf({ name: 'Manuel' }));

// const manuel = personData.find((person, idx, persons) => {
//   return person.name === 'Manuel';
// });

// manuel.name = 'Anna';

// console.log(manuel, personData);

// const maxIndex = personData.findIndex((person, idx, persons) => {
//   return person.name === 'Max';
// });

// console.log(maxIndex);

// 194

// const prices = [10.99, 5.99, 3.99, 5.59];
// const tax = 0.19;
// const taxAdjustedPrace = [];

// // for (const price of prices) {
// //   taxAdjustedPrace.push(price * (1 + tax));
// // }

// prices.forEach((price, idx, prices) => {
//   const priceObj = { index: idx, taxAdjustedPrace: price * (1 + tax) };
//   taxAdjustedPrace.push(priceObj)
// });

// console.log(taxAdjustedPrace);

// 195 + 196 + 197

const prices = [10.99, 5.99, 3.99, 6.59];
const tax = 0.19;

const taxAdjustedPrace = prices.map((price, idx, prices) => {
  const priceObj = { index: idx, taxAdjustedPrace: price * (1 + tax) };
  return priceObj;
});

// console.log(taxAdjustedPrace);

const sortedPrices = prices.sort((a, b) => {
  if (a > b) {
    return 1; // -1
  } else if (a === b) {
    return 0;
  } else {
    return -1; // 1
  }
});
// console.log(sortedPrices.reverse());
console.log(sortedPrices);

// const filteredArray = prices.filter((price, index, prices) => {
//   return price > 6;
// });

const filteredArray = prices.filter(price => price > 6);

console.log(filteredArray);

// 199

// method 1

// let sum = 0;

// prices.forEach((prices) => {
//   sum += prices;
// });

// console.log(sum);

// method 2

const sum = prices.reduce((prevValue, CurValue) => {
  return prevValue + CurValue;
});

console.log(sum);