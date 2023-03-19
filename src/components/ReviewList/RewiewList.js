import { ReviewListStyled } from './ReviewList.styled';
import { ReviewListItem } from 'components/ReviewListItem/ReviewListItem';
import { nanoid } from 'nanoid';

export const ReviewList = ({ reviews }) => {
  return (
    <ReviewListStyled>
      {reviews.map(review => {
        const { author, content, created_at } = review;
        return (
          <ReviewListItem
            key={nanoid()}
            author={author}
            content={content}
            created_at={created_at}
          />
        );
      })}
    </ReviewListStyled>
  );
};
