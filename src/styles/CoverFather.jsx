import styled from 'styled-components';

export const CoverFather = styled('section')`
  display: flex;
  justify-content: center;
  align-items: center;

  @keyframes CoverRotate {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;
CoverFather.displayName = 'CoverFather';
