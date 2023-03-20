import { SearchForm } from 'components/SearchForm/SearchForm';
import { useEffect, useState } from 'react';
import { searchMovies } from 'services/serviceAPI';
import { FilmList } from 'components/FilmList/FilmList';
import { errorToast } from '../components/Toasts/Toasts';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { Loader } from 'components/Loader/Loader';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';
  const navigate = useNavigate();
  useEffect(() => {
    if (!query) return;
    setMovies([]);
    setError('');
    setLoading(true);
    searchMovies(query)
      .then(normalisedMovies => {
        if (normalisedMovies.length === 0) {
          return errorToast('There are no matches with your query(');
        }
        setMovies(normalisedMovies);
      })
      .catch(error => setError(error))
      .finally(() => setLoading(false));
  }, [query]);

  useEffect(() => {
    if (error !== '') {
      errorToast(
        'smth went wrong, redirecting to the main page, wait a second pls'
      );
      setTimeout(() => {
        navigate('/');
      }, 2000);
    }
  }, [error, navigate]);

  return (
    <main>
      <SearchForm setSearchQuery={setSearchParams} query={query} />
      {loading && <Loader />}
      {movies.length > 0 && <FilmList movies={movies} />}
    </main>
  );
};

export default Movies;
