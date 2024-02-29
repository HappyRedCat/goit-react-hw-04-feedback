import styled from 'styled-components';

export const List = styled.ul`
  margin: 10;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
`;

export const BtnList = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 40px;
  font-weight: 500;
  font-size: 18px;
  border: transparent;
  border-radius: 2px;
`;

export const ListItem = styled.li`
  :hover,
  focus {
    background-color: red;
  }
`;
