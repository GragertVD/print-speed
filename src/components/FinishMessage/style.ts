import styled from 'styled-components';

export const FinishMessageContainer = styled.div`
  width: 480px;
  background-color: ${props => props.theme.theme === "light" ? props.theme.colors.white : props.theme.colors.darkGrey};
  background-color: ${props => props.theme.theme === "light" ? props.theme.colors.darkBlue : props.theme.colors.grow};
  border-radius: 5px;
  padding: 32px;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;

  max-width: 90%;
`;

export const Background = styled.div`
  /* background-color: black; */
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  
  transition: all 0.35s;
  background-color: rgba(0, 0, 0,  0.35);
  pointer-events: all;

`;
