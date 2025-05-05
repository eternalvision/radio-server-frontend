import { useState, useEffect } from 'react';
import { getConfigValue } from '#helpers';
import { Card, Name, Album, RadioTitle, TrackCover } from '#styles';
import { CoverWrapper } from '#components';
import ColorThief from 'colorthief';
import styled from 'styled-components';

const rgbToHex = (r, g, b) =>
  `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1).toUpperCase()}`;

const AdditionalInfo = styled('div')`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
`;
AdditionalInfo.displayName = 'AdditionalInfo';

const Duration = styled('p')`
  font-size: 10px;
  color: #fafafa;
  text-shadow: 0px 0px 10px #fafafa;
  margin-top: 4px;
  font-family: monospace;
  align-self: end;
  padding: 5px 15px;
  font-weight: bold;
  background-color: #1a1afa;
  border-radius: 15px;
`;
Duration.displayName = 'Duration';

export const TrackCard = ({ data, getDurationInSeconds }) => {
  if (!data) return null;

  const { title, artist, album, duration, cover } = data;
  const durationSec = duration ? getDurationInSeconds(duration) : null;

  const [elapsed, setElapsed] = useState(0);
  useEffect(() => {
    if (durationSec == null) return;
    setElapsed(0);
    const interval = setInterval(() => {
      setElapsed((prev) => {
        if (prev + 1 >= durationSec) {
          clearInterval(interval);
          return durationSec;
        }
        return prev + 1;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, [durationSec, cover]);

  const formatTime = (secs) => {
    const m = Math.floor(secs / 60);
    const s = secs % 60;
    return `${m}:${s.toString().padStart(2, '0')}`;
  };

  useEffect(() => {
    if (!cover) return;
    document.body.style.transition = 'background 0.8s ease';
    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.src = cover;
    img.onload = () => {
      const [r, g, b] = new ColorThief().getColor(img);
      document.body.style.background = rgbToHex(r, g, b);
    };
  }, [cover]);

  return (
    <Card>
      <TrackCover>
        <RadioTitle>{getConfigValue('brand')}</RadioTitle>
        {artist && title && (
          <Name>
            {artist} — {title}
          </Name>
        )}
        <AdditionalInfo>
          {album && <Album>{album}</Album>}
          {durationSec != null && (
            <Duration>
              {formatTime(elapsed)} / {formatTime(durationSec)}
            </Duration>
          )}
        </AdditionalInfo>
      </TrackCover>
      {cover && <CoverWrapper src={cover} alt={title || 'cover'} durationSec={durationSec || 0} />}
    </Card>
  );
};
TrackCard.displayName = 'TrackCard';
