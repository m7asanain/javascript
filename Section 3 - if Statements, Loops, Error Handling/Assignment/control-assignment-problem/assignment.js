const randomNumber = Math.random(); // produces random number between 0 (including) and 1 (excluding)

// task 1
if (randomNumber > 0.7) {
    alert("The random number is greatr than 0.7!");
} else {
    alert("The random number is not greatr than 0.7!");
}

// task 2
const numbers = [1, 2, 3, 4, 5, 6, 7];

// Method one
for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}

// Method 2
for (const num of numbers) {
    console.log(num);
}

// Method 3
let counter = 0;
while (counter < numbers.length) {
    console.log(numbers[counter]);
    counter++;
}

// task 3
// for loop => backwards
for (let i = numbers.length -1; i >= 0; i--) {
    console.log(numbers[i]);
}

// task 4
const randomNumber2 = Math.random();

console.log(randomNumber);
console.log(randomNumber2);

if ((randomNumber > 0.7 && randomNumber2 > 0.7) || randomNumber <= 0.2 && randomNumber2 <= 0.2) {
    alert("Greater than 0.7 or smaller than 0.2");
}