import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Header = styled.header`
  padding-top: 20px;
  padding-bottom: 20px;
  border-bottom: 1px solid black;
  display: flex;
  gap: 30px;
`;

export const Link = styled(NavLink)`
  color: black;
  padding: 10px;
  border: 1px solid black;
  border-radius: 4px;

  &.active {
    background-color: orange;
  }
`;
