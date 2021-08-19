// Reflect API

const course = {
  title: 'JavaScript - The Complete Guide'
};

Reflect.setPrototypeOf(course, {
  toString() {
    return this.title;
  }
});

Object.defineProperty   // older + 1- (fail reteren => return undefind / fail sailently) + some fetured are not available
Reflect.defineProperty  // newer + 1- (fail reteren => good error) + some added fetured

console.log(course.toString());