import { styled } from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  margin: 24px;
  gap: 24px;
`;

export const List = styled.ul`
  display: inline-flex;
  gap: 12px;
  list-style: none;
  margin: 0;
  padding: 0;
  list-style-type: none;
`;

export const ListInfo = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 12px;
  list-style: none;
  margin: 0;
  padding: 0;
  list-style-type: none;
`;

export const LinkInfo = styled(Link)`
  text-decoration: none;
  font-weight: 600;
  font-size: 18px;
  color: #191d1e;
  margin-left: 25px;

  &:hover {
    color: tomato;
  }
`;

export const Button = styled.button`
  padding: 5px 30px;
  font: inherit;
  cursor: pointer;
  border: 2px solid #191d1e;
  font-weight: 600;
  font-size: 15px;
  border-radius: 5px;
  margin-left: 25px;

  &:hover {
    color: tomato;
    border: 3px solid tomato;
  }
`;
