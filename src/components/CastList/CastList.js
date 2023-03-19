import { CastListStyled } from './CastList.styled';
import { CastListItem } from 'components/CastListItem/CastListItem';
import noPhoto from '../../images/no-photo.png';

export const CastList = ({ cast }) => {
  return (
    cast.length > 0 && (
      <CastListStyled>
        {cast.map(({ id, character, name, profile_path }) => {
          const posterBaseUrl = 'https://www.themoviedb.org/t/p/w500';
          const actorPhotoPath =
            profile_path === null
              ? `${noPhoto}`
              : `${posterBaseUrl}${profile_path}`;
          return (
            <CastListItem
              key={id}
              character={character}
              name={name}
              actorPhotoPath={actorPhotoPath}
            />
          );
        })}
      </CastListStyled>
    )
  );
};
