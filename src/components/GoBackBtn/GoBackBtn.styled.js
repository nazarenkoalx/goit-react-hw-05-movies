import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const BackLink = styled(Link)`
  display: block;
  padding: 10px;
  border: 1px solid black;
  border-radius: 4px;
  width: 65px;
  text-align: center;
  &:hover,
  &:focus {
    background-color: orange;
    scale: 1.1;
  }
`;
