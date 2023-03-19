import { GoBackBtn } from 'components/GoBackBtn/GoBackBtn';
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

export const SingleMovieCard = ({ movie, location }) => {
  const { poster_path, original_title, overview, vote_average } = movie;

  const posterBaseUrl = 'https://www.themoviedb.org/t/p/w500';
  const posterPath =
    poster_path === null ? `${noPhoto}` : `${posterBaseUrl}${poster_path}`;
  const goBackPath = location.state?.from ?? { pathname: '/' };
  return (
    <article>
      <GoBackBtn path={goBackPath} />
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
