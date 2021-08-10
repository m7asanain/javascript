const button = document.querySelector('button');
const textParagraph = document.querySelector('p');

button.addEventListener('click', () => {
  const text = textParagraph.textContent;
  if (navigator.clipboard) {
    navigator.clipboard
    .writeText(text)
    .then(result => {
      console.log('Copied!');
    })
    .catch(error => {
      console.log(error);
    });
  } else {
    alert('Feature does\'nt work with your browser version.')
  }

}); 