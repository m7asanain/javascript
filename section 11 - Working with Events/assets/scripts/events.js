const button = document.querySelector('button');

// button.onclick = function() {

// };

const buttonClickHandler = event => {
  // event.target.disabled = true;
  console.log(event);
};

const anotherButtonClickHandler = () => {
  console.log('This was clicked!');
};

// button.onclick = buttonClickHandler;
// button.onclick = anotherButtonClickHandler;

const boundFn = buttonClickHandler.bind(this);

// button.addEventListener('click', buttonClickHandler);

// setTimeout(() => {
//   button.removeEventListener('click', buttonClickHandler);
// }, 2000);

// buttons.forEach(btn => {
//   btn.addEventListener('mouseenter', buttonClickHandler);
// });


// window.addEventListener('scroll', event => {
//   console.log(event);
// });

const form = document.querySelector('form');

form.addEventListener('submit', event => {
  event.preventDefault();
  console.log(event);
});

const div = document.querySelector('div');

div.addEventListener('click', event => {
  console.log('CLICKED DIV');
  console.log(event);
}); // true make the div clicked first (false is defelt)

button.addEventListener('click', function(event) {
  event.stopPropagation();  // prevents further propagation of the current event in the capturing and bubbling phases.
  // event.stopImmediatePropagation(); // prevents other listeners of the same event from being called.
  console.log('CLICKED BUTTON');
  console.log(event);
  console.log(this);
});

const listItems = document.querySelectorAll('li');  // method 1*
const list = document.querySelector('ul');

// method 1*
// listItems.forEach(listItem => {
  // listItem.addEventListener('click', event => {
  //   event.target.classList.toggle('highlight');
  // });
// });

list.addEventListener('click', function(event) {
  // console.log(event.currentTarget);
  // event.target.classList.toggle('highlight');
  event.target.closest('li').classList.toggle('highlight');
  // form.submit();   this will submit the when click any item
  button.click();
  console.log(this);
});