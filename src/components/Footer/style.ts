import styled from 'styled-components';

export const CurrentChar = styled.span<{ keyMiss: boolean }>`
  background-color: ${props => props.keyMiss ? "red" : "green"};
`;

export const SuccesChar = styled.span`
  color: green;
`;
