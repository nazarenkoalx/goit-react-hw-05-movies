import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getReviewsById } from 'services/serviceAPI';
import { errorToast } from '../Toasts/Toasts';
import { ReviewList } from 'components/ReviewList/RewiewList';
import { Loader } from 'components/Loader/Loader';

export const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    setReviews([]);
    setError('');
    setLoading(true);
    getReviewsById(id)
      .then(data => {
        if (data.length === 0) {
          return errorToast('Unfortunately nobody reviewed this movie');
        }
        setReviews(data);
      })
      .catch(error => setError(error))
      .finally(() => setLoading(false));
  }, [id]);

  useEffect(() => {
    if (error !== '') {
      errorToast(
        'smth went wrong, redirecting to the movie page, wait a second pls'
      );
      setTimeout(() => {
        navigate(`/movies/${id}`);
      }, 1000);
    }
  }, [error, id, navigate]);

  return (
    <>
      {loading && <Loader />}
      {error && <div>smth went wrong</div>}
      {reviews.length > 0 && <ReviewList reviews={reviews} />}
    </>
  );
};
