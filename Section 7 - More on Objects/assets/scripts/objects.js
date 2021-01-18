"use strict";
const addMovieBtn = document.getElementById('add-movie-btn');
const searchBtn = document.getElementById('search-btn');

const movies = [];

const randerMovie = (filter = '') => {
  // display the result on the screen
  const movieList = document.getElementById('movie-list');
  if (movies.length === 0) {
    movieList.classList.remove('visible');
  } else {
    movieList.classList.add('visible');
  }
  movieList.innerHTML = '';
  const filterdMovies = !filter ? movies : movies.filter(movie => movie.info.title.includes(filter));
  filterdMovies.forEach((movie) => {
    const movieEl = document.createElement('li');
    const { info, ...otherProps } = movie;
    console.log(otherProps);
    // const { title: movieTitle } = info;
    let { getFormatedTitle } = movie;
    // getFormatedTitle = getFormatedTitle.bind(movie);
    let text = getFormatedTitle.call(movie) + ' - ';
    for (const key in info) {
      if (key !== 'title' && key !== '_title') {
        text = text + `${key}: ${info[key]}`;
      }
    }
    movieEl.textContent = text;
    movieList.append(movieEl);
  });
};

const addMovieHandler = () => {
//  // getting input here
  const title = document.getElementById('title').value;
  const exteraName = document.getElementById('extra-name').value;
  const exteraValue = document.getElementById('extra-value').value;
//
  if (
    // title.trim() === '' ||
    exteraName.trim() === '' ||
    exteraValue.trim() === ''
  ) {
    return;
  }
//
//  // set an object for the array
  const newMovie = {
    info: {
      // title,
      set title(val) {
        if (val.trim() === '') {
          this._title = 'DEFAULT';
          return;
        }
        this._title = val;
      },
      get title() {
        return this._title;
      },
      [exteraName]: exteraValue
    },
    id: Math.random().toString(),
    // getFormatedTitle: function() {
    getFormatedTitle() {
      return this.info.title.toUpperCase();
    }
  };

  newMovie.info.title = title;
  console.log(newMovie.info.title);

  movies.push(newMovie);
  randerMovie();
  console.log(movies);

};

const searchMovieHandler = () => {
  const filterTerm = document.getElementById('filter-title').value;
  randerMovie(filterTerm);
};

addMovieBtn.addEventListener('click', addMovieHandler);
searchBtn.addEventListener('click', searchMovieHandler);0