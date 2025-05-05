import styled from 'styled-components';

export const Cover = styled('img')`
  width: 400px;
  height: 400px;
  border-radius: 50%;
  animation: ${({ $durationSec }) => `CoverRotate ${$durationSec}s linear infinite`};
  position: absolute;
`;
Cover.displayName = 'Cover';

export const BackgroundCover = styled('img')`
  width: 450px;
  height: 450px;
  filter: blur(50px);
  border-radius: 50%;
  animation: ${({ $durationSec }) => `CoverRotate ${$durationSec}s linear infinite`};
`;
BackgroundCover.displayName = 'BackgroundCover';
