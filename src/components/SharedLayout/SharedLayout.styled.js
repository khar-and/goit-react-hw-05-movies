import { styled } from 'styled-components';

import { NavLink } from 'react-router-dom';

export const Header = styled.header`
  border-bottom: solid 1px grey;
  margin-bottom: 20px;
`;

export const Link = styled(NavLink)`
  display: inline-block;
  text-decoration: none;
  padding: 14px;
  margin-left: 10px;
  font-weight: 600;
  font-size: 22px;
  color: #191d1e;

  &:hover {
    color: tomato;
  }
`;
