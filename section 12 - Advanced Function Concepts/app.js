function add(number1, number2) {       // pure function
    return number1 + number2;
}

console.log(add(1, 5));         // 6
console.log(add(12, 15));       // 27

function addRandom(number1) {
    return number1 + Math.random();
}

console.log(addRandom(5));

let previousResult = 0;

function addMoreNumbers(number1, number2) {     // impure function
    const sum = number1 + number2;
    previousResult = sum;
    return sum;
}

console.log(addMoreNumbers(1, 5));

const hobbies = ['Sports', 'Cooking'];

function printHobbies(h) {
    h.push('NEW HOBBY');
    console.log(h);
}

printHobbies(hobbies);

console.log('-'.repeat(10));

// function calculateTax(amount, tax) {
//     return amount * tax;
// }

// const vatAmount = calculateTax(100, 0.19);
// const incomeAmount = calculateTax(100, 0.25);

function createTaxCalculater(tax) {
    function calculateTax(amount) {
        return amount * tax;
    }
    return calculateTax;
}

const calculateVatAmount = createTaxCalculater(0.19);
const calculateIncomeAmount = createTaxCalculater(0.25);


console.log(calculateVatAmount(100));
console.log(calculateVatAmount(200));