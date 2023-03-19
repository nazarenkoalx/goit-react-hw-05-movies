import { FilmListItem } from 'components/FilmListItem/FilmList.Item';
import { MovieList } from './FilmList.styled';
import PropTypes from 'prop-types';

export const FilmList = ({ movies }) => {
  return (
    <MovieList>
      {movies.map(movie => {
        const { id, title, poster_path } = movie;

        return (
          <FilmListItem
            key={id}
            id={id}
            title={title}
            poster_path={poster_path}
          />
        );
      })}
    </MovieList>
  );
};

FilmList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      poster_path: PropTypes.string.isRequired,
    })
  ).isRequired,
};
