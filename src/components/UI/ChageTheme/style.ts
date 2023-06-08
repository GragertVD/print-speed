import styled from 'styled-components';


export const ChangeThemeContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;

  svg{
    cursor: pointer;
    path{
      fill: ${props => props.theme.theme === "light" ? props.theme.colors.darkGrey : props.theme.colors.mediumGrey};
      &:hover{
        fill: ${props => props.theme.theme === "light" ? props.theme.colors.mediumGrey : props.theme.colors.lightGrey};
      }
    }
  }
`;