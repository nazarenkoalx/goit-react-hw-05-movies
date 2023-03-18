import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getCastById } from 'services/serviceAPI';

export const Cast = () => {
  const [cast, setCast] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    getCastById(id)
      .then(data => setCast(data))
      .catch();
  }, [id]);

  console.log(cast);

  return <div> Cast page, bitch please</div>;
};
