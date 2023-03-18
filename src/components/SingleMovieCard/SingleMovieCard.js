import { Link, Outlet } from 'react-router-dom';
import noPhoto from '../../images/no-photo.png';

export const SingleMovieCard = ({ movie }) => {
  const { poster_path, original_title, overview, vote_average } = movie;

  const posterBaseUrl = 'https://www.themoviedb.org/t/p/w500';
  const posterPath =
    poster_path === null ? `${noPhoto}` : `${posterBaseUrl}${poster_path}`;

  return (
    <article>
      <div>
        <img
          src={posterPath}
          loading="lazy"
          alt={original_title}
          height="100"
        />
        <h2>{original_title}</h2>
        <p>{overview}</p>
        <p>{vote_average}</p>
      </div>
      <div>
        <Link to={`cast`}>Cast</Link>
        <Link to={`reviews`}>Reviews</Link>
      </div>
      <Outlet />
    </article>
  );
};
