// The Proxy API and a First "Trap"

const course = {
  title: 'JavaScript - The Complete Guide'
};

Reflect.setPrototypeOf(course, {
  toString() {
    return this.title;
  }
});

// console.log(course);

const courseHandler = {
  get(obj, propertyName) {
    console.log(propertyName);
    // return 'Something'; // this will overwrite "pCourse.title"
    if (propertyName === 'length') {
      return 0
    }
    return obj[propertyName] || 'NOT FOUND!';
  },
  set(obj, propertyName, newValue) {
    console.log('Sending data...');
    if (propertyName === 'rating') {
      return; // block access
    }
    obj[propertyName] = newValue;
  }
}

const pCourse = new Proxy(course, courseHandler);
// console.log(pCourse.title);
// console.log(course, pCourse);

pCourse.rating = 5;
console.log(pCourse.title, '-' , pCourse.length, '-' , pCourse.rating);