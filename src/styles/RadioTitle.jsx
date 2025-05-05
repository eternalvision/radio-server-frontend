import styled, { keyframes } from 'styled-components';

const gradientShift = keyframes`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`;

export const RadioTitle = styled('p')`
  font-size: 15px;
  margin-bottom: 5px;
  font-style: italic;
  background: linear-gradient(270deg, #ff6ec4, #7873f5, #ff6ec4);
  background-size: 800% 800%;
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: ${gradientShift} 10s ease infinite;
  text-shadow: 0px 0px 10px #fafa;
`;
RadioTitle.displayName = 'RadioTitle';
