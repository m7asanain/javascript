const addMovieModel = document.getElementById('add-modal');
// const addMovieModel = document.querySelector('#add-modal');
// const addMovieModel = document.body.children[1];

const startAddMovieButton = document.querySelector('header').lastElementChild;
// const startAddMovieButton = document.querySelector('header button');

const backdrop = document.getElementById('backdrop');
// const backdrop = document.body.firstElementChild;

const cancelAddMovieButton = addMovieModel.querySelector('.btn--passive');
const confirmAddMovieButton = cancelAddMovieButton.nextElementSibling;

const userInputs = addMovieModel.querySelectorAll('input');
// const userInputs = addMovieModel.getElementsByTagName('input');

const entryTexSection = document.getElementById('entry-text');

const movies = [];

const updateUI = () => {
    if (movies.length === 0) {
        entryTexSection.style.display = 'block';
    } else {
        entryTexSection.style.display = 'none';
    }
};

const toogleBackdrop = () => {
    backdrop.classList.toggle('visible');
};

const addNewMovieElement = (title, imageUrl, rating) => {
    const newMovieElement = document.createElement('li');
    newMovieElement.className = 'movie-element';
    newMovieElement.innerHTML = `
        <div class="movie-element__image">
            <img src="${imageUrl}" alt="${title}">
        </div>
        <div class="movie-element__info">
            <h2>${title}</h2>
            <p>${rating}/5 stars</p>
        </div>
    `;
    const listRoot = document.getElementById('movie-list');
    listRoot.append(newMovieElement);
};

const toggleMovieModel = () => {  // function() {}
    addMovieModel.classList.toggle('visible');
    toogleBackdrop();
};

const clearMovieInputs = () => {
    for (const userInput of userInputs) {
        userInput.value = '';
    }
};

const cancelAddMovieHandler = () => {
    toggleMovieModel();
    clearMovieInputs();
};

const addMovieHandler = () => {
    const titleValue = userInputs[0].value;
    const imageUrlValue = userInputs[1].value;
    const ratingValue = userInputs[2].value;

    if (titleValue.trim() === '' || imageUrlValue.trim() === '' || ratingValue.trim() === '' || +ratingValue < 1 || +ratingValue > 5) {
        alert('Please enter valid value (between 1 and 5)');
        return;
    }

    const newMovie = {
        title: titleValue,
        image: imageUrlValue,
        rating: ratingValue
    };
    movies.push(newMovie);
    console.log(movies);
    toggleMovieModel();
    clearMovieInputs();
    addNewMovieElement(newMovie.title, newMovie.image, newMovie.rating);
    updateUI();
};

const backdropClickHandler = () => {
    toggleMovieModel();
};

startAddMovieButton.addEventListener('click', toggleMovieModel);
backdrop.addEventListener('click', backdropClickHandler);
cancelAddMovieButton.addEventListener('click', cancelAddMovieHandler);
confirmAddMovieButton.addEventListener('click', addMovieHandler);