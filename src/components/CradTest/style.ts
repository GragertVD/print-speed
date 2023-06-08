import styled from 'styled-components';

export const CardTestContainer = styled.main`
  background: ${props => props.theme.theme === "light" ? props.theme.colors.white : props.theme.colors.grow};
  color: ${props => props.theme.theme === "light" ? props.theme.colors.black : props.theme.colors.lightGrey};
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
  justify-content: space-around;
  gap: 20px;

  font-weight: 700;

  text-align: center;

  h4{
    color: ${props => props.theme.colors.mediumGrey};
    font-size: 1.15em;
    margin-bottom: 8px;
  }

  span{
    color: ${props => props.theme.colors.lightBlue};
    font-size: 1.5em;
  }
`;

export const ButtonReload = styled.button`
  background: transparent;
  border: none;
  color: green;
  cursor: pointer;

  position: relative;
  display: flex;
  align-items: flex-start;
  gap: 5px;

  font-size: 1.15em;
  font-weight: 700;

`
