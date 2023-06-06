import styled from 'styled-components';

export const CardTestContainer = styled.main`
  background-color: white;
  width: 70vw;
  overflow: hidden;
  padding: 20px;
  border-radius: 10px;
  user-select: none;
  display: grid;
  grid-template-columns: 4fr 1fr;
`;

export const CardTestInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

export const ButtonReload = styled.button`
  background: transparent;
  border: none;
  color: green;
  cursor: pointer;

  position: relative;
  display: flex;
  align-items: center;
  &::before{
    content: 'X';
    display: inline-block;
    width: 15px;
    height: 15px;

  }
`
