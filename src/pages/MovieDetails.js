import { SingleMovieCard } from 'components/SingleMovieCard/SingleMovieCard';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieById } from 'services/serviceAPI';

export const MovieDetails = () => {
  const [movie, setMovie] = useState({});
  const { id } = useParams();

  useEffect(() => {
    setMovie({});
    getMovieById(id)
      .then(data => setMovie(data))
      .catch();
  }, [id]);

  return (
    <main>
      <SingleMovieCard movie={movie} />
    </main>
  );
};
