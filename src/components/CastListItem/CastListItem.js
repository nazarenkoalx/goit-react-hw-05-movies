import {
  ActorCredits,
  ActorPortrait,
  CastItemStyled,
} from './CastListItem.styled';

export const CastListItem = ({ actorPhotoPath, name, character }) => {
  return (
    <CastItemStyled>
      <ActorPortrait src={actorPhotoPath} loading="lazy" alt={name} />
      <ActorCredits>
        <p>Actor: {name}</p>
        <p>Role: {character}</p>
      </ActorCredits>
    </CastItemStyled>
  );
};
