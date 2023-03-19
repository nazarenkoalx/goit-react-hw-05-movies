import {
  ActorCredits,
  ActorPortrait,
  CastItemStyled,
} from './CastListItem.styled';
import PropTypes from 'prop-types';

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

CastListItem.propTypes = {
  actorPhotoPath: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  character: PropTypes.string.isRequired,
};
