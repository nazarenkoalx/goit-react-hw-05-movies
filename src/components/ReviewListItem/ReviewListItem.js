import {
  ReviewListItemStyled,
  ReviewAuthor,
  ReviewContent,
  ReviewDate,
} from './ReviewListItem.styled';

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
