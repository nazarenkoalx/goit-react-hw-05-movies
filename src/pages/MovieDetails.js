import { SingleMovieCard } from 'components/SingleMovieCard/SingleMovieCard';
import { useParams } from 'react-router-dom';
import { getMovieById } from 'services/serviceAPI';

export const MovieDetails = () => {
  const { id } = useParams();
  const { singleMovie } = getMovieById(id);
  // console.log(movieId);
  return (
    <main>
      <SingleMovieCard movie={singleMovie} />
    </main>
  );
};
