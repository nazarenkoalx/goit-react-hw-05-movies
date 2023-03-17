import { useEffect, useState } from 'react';
import { getTrendingMovies } from 'services/serviceAPI';
import { FilmList } from 'components/FilmList/FilmList';

export const TrendingMovies = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    setError('');
    getTrendingMovies()
      .then(normalisedMovies => {
        setMovies(normalisedMovies);
      })
      .catch(error => setError(error));
  }, []);

  return (
    <>
      {movies.length > 0 && <FilmList movies={movies} />}
      {error && <div>smth went wrong</div>}
    </>
  );
};
