import { SearchForm } from 'components/SearchForm/SearchForm';
import { useEffect, useState } from 'react';
import { searchMovies } from 'services/serviceAPI';
import { FilmList } from 'components/FilmList/FilmList';

export const Movies = () => {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    searchMovies(query)
      .then(normalisedMovies => {
        setMovies(normalisedMovies);
      })
      .catch(error => setError(error));
  }, [query]);

  return (
    <>
      <div> search for some stuff</div>
      <SearchForm setSearchQuery={setQuery} />
      {movies.length > 0 && <FilmList movies={movies} />}
      {error && <div>smth went wrong</div>}
    </>
  );
};
