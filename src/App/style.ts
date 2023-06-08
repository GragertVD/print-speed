import styled from 'styled-components';

export const AppContainer = styled.div`
  background-color: #55c5ff;
  background-color: ${props => props.theme.theme === "light" ? props.theme.colors.blue : props.theme.colors.veryDarkGrey};
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 25px;
`;

