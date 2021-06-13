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

function createTaxCalculater(tax) {     // factory function
    function calculateTax(amount) {
        return amount * tax;
    }
    return calculateTax;
}

const calculateVatAmount = createTaxCalculater(0.19);
const calculateIncomeAmount = createTaxCalculater(0.25);


console.log(calculateVatAmount(100));
console.log(calculateVatAmount(200));

console.log('-'.repeat(10));

let userName = 'Mustafa';

function greetUser() {
    // let name = userName;
    let name = 'Rola';  // function priority
    console.log('Hi ' + name);
}

let name = 'Hasanain';  // second priority

userName = 'M7asanain';

greetUser();


console.log('-'.repeat(10));

// function powerOf(x, n) {     // normal way
//     let result = 1;

//     for (let i = 0; i < n; i++) {
//         result *= x;
//     }

//     return result;
// }

function powerOf(x, n) {
    // if (n === 1) {  // without check it return an error
    //     return x;
    // }
    // return x * powerOf(x, n - 1);

    return n === 1 ? x : x * powerOf(x, n - 1);
}

console.log(powerOf(2, 3));     // 2 * 2 * 2

 
console.log('-'.repeat(10));


const myself = {
    name: 'Mustafa',
    friends: [
        {
            name: 'Abdullah',
            friends: [
                {
                    name: 'Muhammed',
                    friends: [
                        {
                            name: 'Abdullrahman',
                        }
                    ]
                }
            ]
        },
        {
            name: 'Abbas',
            friends: [
                {
                    name: 'Ibrahim',
                }
            ]
        }
    ],
};

function getFriendName(person) {
    const collectedNames = [];

    if (!person.friends) {
        return [];
    }

    for (const friend of person.friends) {
        collectedNames.push(friend.name);
        collectedNames.push(...getFriendName(friend));
    };

    return collectedNames;
}

console.log(getFriendName(myself));