import { useRef } from 'react';
import { CoverFather, BackgroundCover, Cover } from '#styles';

export const CoverWrapper = ({ src, alt, durationSec }) => {
  const stableKey = useRef(`${alt}]${Math.random().toString(36).slice(2)}`);

  return (
    <CoverFather>
      <BackgroundCover
        key={`BG[${stableKey.current}`}
        src={src}
        alt={alt}
        loading='lazy'
        $durationSec={durationSec}
      />
      <Cover
        key={`FG[${stableKey.current}`}
        src={src}
        alt={alt}
        loading='lazy'
        $durationSec={durationSec}
      />
    </CoverFather>
  );
};
CoverWrapper.displayName = 'CoverWrapper';
