import styled from 'styled-components';

export const TextContainer = styled.div`
  width: 100%;
  text-align: justify;
  
  span{
    font-size: 1.2em;
    line-height: 1.5;
    border-radius: 3px;
    padding: 1px;
  }
`;

export const CurrentChar = styled.span<{ keyMiss: boolean }>`
  background-color: ${props => props.keyMiss ? props.theme.colors.red : props.theme.colors.gren};
  color: white;
`;

export const SuccesChar = styled.span`
  color: ${props => props.theme.colors.gren};
`;
