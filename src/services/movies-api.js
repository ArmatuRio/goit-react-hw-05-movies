import axios from 'axios';

const API_KEY = '26f0b87a7e5dd8e602a6eac9520f212b';

const fetchTrendingMovies = () => {
  return axios
    .get(`https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}`)
    .then(({ data }) => data.results);
};

const fetchMoviesByQuery = query => {
  return axios
    .get(
      `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${query}&page=1`,
    )
    .then(({ data }) => data.results);
};

const fetchMovies = movieId => {
  return axios
    .get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}`)
    .then(({ data }) => data);
};

const fetchAboutActors = movieId => {
  return axios
    .get(
      `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${API_KEY}`,
    )
    .then(({ data }) => data);
};

const fetchReviews = movieId => {
  return axios
    .get(
      `https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=${API_KEY}&page=1`,
    )
    .then(({ data }) => data);
};

export {
  fetchTrendingMovies,
  fetchMoviesByQuery,
  fetchMovies,
  fetchAboutActors,
  fetchReviews,
};
