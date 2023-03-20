import { GoBackBtn } from 'components/GoBackBtn/GoBackBtn';
import { Outlet, useLocation } from 'react-router-dom';
import noPhoto from '../../images/no-photo.png';
import {
  MovieInfo,
  Image,
  MovieTitle,
  Overview,
  Votes,
  LinkWrapper,
  StyledLink,
  MovieArticle,
} from './SingleMovieCard.styled';
import PropTypes from 'prop-types';

export const SingleMovieCard = ({ movie }) => {
  const { poster_path, original_title, overview, vote_average } = movie;

  const location = useLocation();

  const posterBaseUrl = 'https://www.themoviedb.org/t/p/w500';
  const posterPath =
    poster_path === null ? `${noPhoto}` : `${posterBaseUrl}${poster_path}`;
  const goBackPath = location.state?.from ?? { pathname: '/' };
  return (
    <MovieArticle>
      <GoBackBtn path={goBackPath} />
      <MovieInfo>
        <Image src={posterPath} loading="lazy" alt={original_title} />
        <div>
          <MovieTitle>{original_title}</MovieTitle>
          <Overview>Overview: {overview}</Overview>
          <Votes>Votes: {vote_average}</Votes>

          <LinkWrapper>
            <StyledLink to={`cast`} state={{ from: goBackPath }}>
              Cast
            </StyledLink>
            <StyledLink to={`reviews`} state={{ from: goBackPath }}>
              Reviews
            </StyledLink>
          </LinkWrapper>
        </div>
      </MovieInfo>
      <Outlet />
    </MovieArticle>
  );
};

SingleMovieCard.propTypes = {
  movie: PropTypes.shape({
    poster_path: PropTypes.string,
    original_title: PropTypes.string,
    overview: PropTypes.string,
    vote_average: PropTypes.number,
  }).isRequired,
};
