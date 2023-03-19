import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getReviewsById } from 'services/serviceAPI';
import { errorToast } from '../Toasts/Toasts';
import { ReviewList } from 'components/ReviewList/RewiewList';

export const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [error, setError] = useState('');
  const { id } = useParams();
  useEffect(() => {
    getReviewsById(id)
      .then(data => {
        if (data.length === 0) {
          return errorToast('Unfortunately nobody reviewed this movie');
        }
        setReviews(data);
      })
      .catch(error => setError(error));
  }, [id]);

  return (
    <>
      {error && <div>smth went wrong</div>}
      {reviews.length > 0 && <ReviewList reviews={reviews} />}
    </>
  );
};
