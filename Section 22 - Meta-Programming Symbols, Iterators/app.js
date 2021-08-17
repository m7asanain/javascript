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