import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getCastById } from 'services/serviceAPI';
import { CastTitle } from './Cast.styled';
import { CastList } from 'components/CastList/CastList';

export const Cast = () => {
  const [cast, setCast] = useState([]);
  const { id } = useParams();
  const [error, setError] = useState('');

  useEffect(() => {
    getCastById(id)
      .then(data => setCast(data))
      .catch(error => setError(error));
  }, [id]);

  return (
    <>
      {error && <div>smth went wrong</div>}
      {cast.length && (
        <>
          <CastTitle>Cast list:</CastTitle>
          <CastList cast={cast} />
        </>
      )}
    </>
  );
};
