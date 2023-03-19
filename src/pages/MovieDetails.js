import { SingleMovieCard } from 'components/SingleMovieCard/SingleMovieCard';
import { useEffect, useState } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { getMovieById } from 'services/serviceAPI';
import { Loader } from 'components/Loader/Loader';
import { errorToast } from 'components/Toasts/Toasts';

const MovieDetails = () => {
  const [movie, setMovie] = useState({});
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    setMovie({});
    setError('');
    setLoading(true);
    getMovieById(id)
      .then(data => {
        if (data.length === 0) {
          return errorToast('Unfortunately no details with this movie');
        }
        setMovie(data);
      })
      .catch(error => setError(error))
      .finally(() => setLoading(false));
  }, [id]);

  useEffect(() => {
    if (error !== '') {
      errorToast(
        'smth went wrong, redirecting to the main page, wait a second pls'
      );
      setTimeout(() => {
        navigate(`/`);
      }, 2000);
    }
  }, [error, navigate]);

  return (
    <main>
      {loading && <Loader />}
      <SingleMovieCard movie={movie} location={location} />
    </main>
  );
};

export default MovieDetails;
