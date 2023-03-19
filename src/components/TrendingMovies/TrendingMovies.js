import { useEffect, useState } from 'react';
import { getTrendingMovies } from 'services/serviceAPI';
import { FilmList } from 'components/FilmList/FilmList';
import { Loader } from 'components/Loader/Loader';
import { errorToast } from 'components/Toasts/Toasts';

export const TrendingMovies = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setMovies([]);
    setError('');
    setLoading(true);
    getTrendingMovies()
      .then(normalisedMovies => {
        if (normalisedMovies.length === 0) {
          return errorToast('There are no trending within today info(');
        }
        setMovies(normalisedMovies);
      })
      .catch(error => setError(error))
      .finally(() => setLoading(false));
  }, []);

  return (
    <>
      {movies.length > 0 && <FilmList movies={movies} />}
      {loading && <Loader />}
      {error && <div>smth went wrong</div>}
    </>
  );
};
