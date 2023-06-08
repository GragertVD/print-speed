import styled from 'styled-components';

export const HeaderContainer = styled.header`
  width: 100%;
  font-weight: 700;
  background-color: ${props => props.theme.theme === "light" ? props.theme.colors.darkBlue : props.theme.colors.grow};

  border: none;
  border-radius: 10px;
  box-shadow: 4px 3px 3px 3px rgba(0, 0, 0, 0.1);
  margin: 20px auto 20px auto;
  padding: 18px 20px 17px;
  display: flex;
  justify-content: space-between;

`;

export const ButtonLanguageContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  button{
    cursor: pointer;
    border: none;
    background-color: transparent;
    font-style: italic;
    font-size: 1.1rem;
    color: ${props => props.theme.theme === "light" ? props.theme.colors.black : props.theme.colors.lightGrey};
    &:hover{
      transform: scale(1.1);
    }
  }
`;