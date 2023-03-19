import {
  ReviewListItemStyled,
  ReviewAuthor,
  ReviewContent,
  ReviewDate,
} from './ReviewListItem.styled';
import PropTypes from 'prop-types';

export const ReviewListItem = ({ author, content, created_at }) => {
  return (
    <ReviewListItemStyled>
      <article>
        <ReviewAuthor>{author}</ReviewAuthor>
        <ReviewDate>{created_at}</ReviewDate>
        <ReviewContent>{content}</ReviewContent>
      </article>
    </ReviewListItemStyled>
  );
};

ReviewListItem.propTypes = {
  author: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  created_at: PropTypes.string.isRequired,
};
