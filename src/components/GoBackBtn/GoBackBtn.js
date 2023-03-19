import { BackLink } from './GoBackBtn.styled';

export const GoBackBtn = ({ path }) => {
  return <BackLink to={path}> Go back </BackLink>;
};
