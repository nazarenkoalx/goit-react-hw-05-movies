import axios from 'axios';

const API_KEY = 'd60997a7e23cda835c1c23368c69f903';

export async function getTrendingMovies() {
  try {
    const { data } = await axios.get(
      'https://api.themoviedb.org/3/trending/movie/week',
      {
        params: {
          api_key: API_KEY,
        },
      }
    );
    const normalisedMovies = data.results.map(
      ({ id, title, poster_path, vote_average }) => ({
        id,
        title,
        poster_path,
        vote_average,
      })
    );
    return normalisedMovies;
  } catch (error) {
    throw new Error(error);
  }
}

export async function searchMovies(searchQuery) {
  try {
    const { data } = await axios.get(
      'https://api.themoviedb.org/3/search/movie',
      {
        params: {
          api_key: API_KEY,
          language: 'en-US',
          page: 1,
          include_adult: false,
          query: searchQuery,
        },
      }
    );
    const normalisedMovies = data.results.map(
      ({ id, title, poster_path, vote_average }) => ({
        id,
        title,
        poster_path,
        vote_average,
      })
    );
    return normalisedMovies;
  } catch (error) {
    throw new Error(error);
  }
}

export async function getMovieById(id) {
  try {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}`,
      {
        params: {
          api_key: API_KEY,
          language: 'en-US',
        },
      }
    );

    return data;
  } catch (error) {
    throw new Error(error);
  }
}
