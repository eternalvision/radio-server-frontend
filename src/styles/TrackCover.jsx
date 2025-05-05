import styled from 'styled-components';

export const TrackCover = styled('section')`
  display: flex;
  flex-direction: column;
  box-shadow: 0px 0px 150px #000;
  backdrop-filter: blur(50px);
  padding: 5px;
  border-radius: 10px;
  overflow: hidden;
  position: relative;
  background-color: #000000a2;
  z-index: 1;
`;
TrackCover.displayName = 'TrackCover';
