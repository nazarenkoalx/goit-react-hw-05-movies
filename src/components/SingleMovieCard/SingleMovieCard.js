import { Outlet } from 'react-router-dom';
import noPhoto from '../../images/no-photo.png';
import {
  MovieInfo,
  Image,
  MovieTitle,
  Overview,
  Votes,
  LinkWrapper,
  StyledLink,
} from './SingleMovieCard.styled';

export const SingleMovieCard = ({ movie }) => {
  const { poster_path, original_title, overview, vote_average } = movie;

  const posterBaseUrl = 'https://www.themoviedb.org/t/p/w500';
  const posterPath =
    poster_path === null ? `${noPhoto}` : `${posterBaseUrl}${poster_path}`;

  return (
    <article>
      <MovieInfo>
        <Image src={posterPath} loading="lazy" alt={original_title} />
        <div>
          <MovieTitle>{original_title}</MovieTitle>
          <Overview>Overview: {overview}</Overview>
          <Votes>Votes: {vote_average}</Votes>
          <LinkWrapper>
            <StyledLink to={`cast`}>Cast</StyledLink>
            <StyledLink to={`reviews`}>Reviews</StyledLink>
          </LinkWrapper>
        </div>
      </MovieInfo>
      <Outlet />
    </article>
  );
};
