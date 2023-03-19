import { SearchForm } from 'components/SearchForm/SearchForm';
import { useEffect, useState } from 'react';
import { searchMovies } from 'services/serviceAPI';
import { FilmList } from 'components/FilmList/FilmList';
import { errorToast } from '../Toasts/Toasts';
import { useSearchParams } from 'react-router-dom';

export const MoviesSearch = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';
  useEffect(() => {
    setMovies([]);
    setError('');
    if (!query) return;
    searchMovies(query).then(normalisedMovies => {
      if (normalisedMovies.length === 0) {
        return errorToast('There are no matches with your query(');
      }
      setMovies(normalisedMovies);
    });
  }, [query]);

  return (
    <>
      <SearchForm setSearchQuery={setSearchParams} query={query} />
      {movies.length > 0 && <FilmList movies={movies} />}
      {error && <div>smth went wrong</div>}
    </>
  );
};
