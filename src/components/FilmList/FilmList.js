import { FilmListItem } from 'components/FilmListItem/FilmList.Item';
import { MovieList } from './FilmList.styled';

export const FilmList = ({ movies }) => {
  return (
    <MovieList>
      {movies.map(movie => {
        const { id, title, poster_path, vote_average } = movie;
        return (
          <FilmListItem
            key={id}
            title={title}
            poster_path={poster_path}
            vote_average={vote_average}
          />
        );
      })}
    </MovieList>
  );
};
