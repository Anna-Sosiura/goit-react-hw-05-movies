import axios from 'axios';

const API_KEY = '5353ffa6d3e8c52fad3e3fb7502c3b42';
axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

axios.defaults.params = {
  api_key: API_KEY,
};

export const getTrending = async () => {
  const { data } = await axios.get(`/trending/movie/day`);
  return data.results;
};
export const searchMovies = async query => {
  const { data } = await axios.get(`search/movie?${query}`);
  return data;
};
export const getMovieDetails = async movieId => {
  const { data } = await axios.get(`movie/${movieId}`);
  return data;
};
export const getMovieCredits = async movieId => {
  const { data } = await axios.get(`movie/${movieId}/credits`);
  return data;
};
export const getMovieReviews = async movieId => {
  const { data } = await axios.get(`movie/${movieId}/reviews`);
  return data;
};

// /trending/get-trending список найпопулярніших фільмів на сьогодні для створення колекції на головній сторінці.
// /search/search-movies пошук фільму за ключовим словом на сторінці фільмів.
// /movies/get-movie-details запит повної інформації про фільм для сторінки кінофільму.
// /movies/get-movie-credits запит інформації про акторський склад для сторінки кінофільму.
// /movies/get-movie-reviews запит оглядів для сторінки кінофільму.
