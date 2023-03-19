import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const MovieInfo = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 20px;
`;

export const Image = styled.img`
  max-width: 350px;
`;

export const MovieTitle = styled.h2`
  margin-bottom: 20px;
`;

export const Overview = styled.p`
  margin-bottom: 20px;
`;

export const Votes = styled.p`
  margin-bottom: 20px;
`;

export const LinkWrapper = styled.div`
  display: flex;
  gap: 20px;
  margin-bottom: 20px;
`;

export const StyledLink = styled(Link)`
  padding: 20px;
  border: 1px solid black;
  border-radius: 4px;
  &:hover,
  &:focus {
    scale: 1.2;
    background-color: orange;
  }
`;
