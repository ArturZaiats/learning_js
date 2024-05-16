'use strict';

const numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
    count: numberOfFilms, 
    movies: {}, 
    actors: {}, 
    genres: [],
    privat: false
};

const a = prompt('Один из последних просмотренных фильмов?', ''),
      b = prompt('Ha сколько оцените ero?'),
      c = prompt('Один из последних просмотренных фильмов?', ''),
      d = prompt('Ha сколько оцените ero?');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);