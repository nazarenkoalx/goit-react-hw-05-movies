import { SearchForm } from 'components/SearchForm/SearchForm';
import { useEffect, useState } from 'react';
import { searchMovies } from 'services/serviceAPI';
import { FilmList } from 'components/FilmList/FilmList';
import { errorToast } from '../Toasts/Toasts';

export const MoviesSearch = () => {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState('');
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
      <SearchForm setSearchQuery={setQuery} />
      {movies.length > 0 && <FilmList movies={movies} />}
      {error && <div>smth went wrong</div>}
    </>
  );
};
