import { SingleMovieCard } from 'components/SingleMovieCard/SingleMovieCard';
import { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { getMovieById } from 'services/serviceAPI';

export const MovieDetails = () => {
  const [movie, setMovie] = useState({});
  const { id } = useParams();
  const location = useLocation();

  console.log(location);

  useEffect(() => {
    setMovie({});
    getMovieById(id)
      .then(data => setMovie(data))
      .catch();
  }, [id]);

  return (
    <main>
      <SingleMovieCard movie={movie} location={location} />
    </main>
  );
};
