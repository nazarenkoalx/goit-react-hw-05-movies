import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getCastById } from 'services/serviceAPI';
import { CastTitle } from './Cast.styled';
import { CastList } from 'components/CastList/CastList';
import { errorToast } from '../Toasts/Toasts';
import { Loader } from 'components/Loader/Loader';

const Cast = () => {
  const [cast, setCast] = useState([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    setCast([]);
    setError('');
    setLoading(true);
    getCastById(id)
      .then(data => {
        if (data.length === 0) {
          return errorToast('Unfortunately there is no info about movie cast');
        }
        setCast(data);
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
        navigate(`/movies/${id}`);
      }, 2000);
    }
  }, [error, id, navigate]);

  return (
    <>
      {error && <div>smth went wrong</div>}
      {loading && <Loader />}
      {cast.length && (
        <>
          <CastTitle>Cast list:</CastTitle>
          <CastList cast={cast} />
        </>
      )}
    </>
  );
};

export default Cast;
