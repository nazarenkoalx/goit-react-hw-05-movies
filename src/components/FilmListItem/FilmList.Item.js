import noPhoto from '../../images/no-photo.png';
import { MovieCard } from './FilmListItem.styled';

export const FilmListItem = ({ id, title, poster_path, vote_average }) => {
  const posterBaseUrl = 'https://www.themoviedb.org/t/p/w500';
  const posterPath =
    poster_path === null ? `${noPhoto}` : `${posterBaseUrl}${poster_path}`;
  return (
    <MovieCard>
      <article>
        <img src={posterPath} loading="lazy" alt={title} />
        <h2>{title}</h2>
      </article>
    </MovieCard>
  );
};
