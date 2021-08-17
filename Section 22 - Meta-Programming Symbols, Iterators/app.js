// Library land
const uid = Symbol();  // identifier: only for logging purposes
console.log(uid);

const user = {
  // id: 'p1',
  [uid]: 'p1',  // this make the value not touchable!
  name: 'Mustafa',
  age: 20,
  [Symbol.toStringTag]: 'User'  // [Symbol.toStringTag] => will give: [object User]*
};

user[uid] = 'p3'; // the change only inside of the liabrary, not possible outside

// App land => Using the library

user.id = 'p2'; // this should not be possible!

console.log(user[Symbol('uid')]);  // undefined
console.log(Symbol('uid') === Symbol('uid'));
console.log(user.toString()); // .toString() => will give: [object Object]*

const company = {
  curEmployee: 0,
  employees: ['Mustafa', 'Abbas', 'Abdullah'],
  next() {
    if (this.curEmployee >= this.employees.length) {
      return { value: this.curEmployee, done: true };
    }
    const returnValue = { value: this.employees[this.curEmployee], done: false }; // [this.curEmployee]: return list of names
    this.curEmployee++;
    return returnValue;
  }
};

// console.log(company.next());  // {value: "Mustafa", done: false} 
// console.log(company.next());  // {value: "Abbas", done: false}
// console.log(company.next());  // {value: "Abdullah", done: false}
// console.log(company.next());  // {value: 3, done: true}
// console.log(company.next());  // {value: 3, done: true}

let employee = company.next();

while (!employee.done) {
  console.log(employee.value);
  employee = company.next();
}
console.log('That\'s it!');