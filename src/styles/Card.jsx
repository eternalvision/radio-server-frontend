import styled from 'styled-components';

export const Card = styled('article')`
  width: 550px;
  display: flex;
  flex-direction: column;
  background-color: #000;
  border-radius: 5px 50px 5px 5px;
  box-shadow: 0px 0px 150px #000;
  overflow: hidden;
`;
Card.displayName = 'Card';
