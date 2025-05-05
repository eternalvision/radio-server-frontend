import { useEffect, useRef, useState } from 'react';
import { TrackFather } from '#styles';
import { TrackCard } from '#components';
import { fetchTrack } from '#api';
import { getDurationInSeconds } from '#helpers';

const now = () => Date.now();

export const Track = () => {
  const [metadata, setMetadata] = useState(null);
  const timerRef = useRef(null);
  const hasFetchedRef = useRef(false);

  useEffect(() => {
    if (!hasFetchedRef.current) {
      fetchTrack(setMetadata);
      hasFetchedRef.current = true;
    }
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  useEffect(() => {
    if (!metadata) return;
    const data = metadata.data;
    if (!data || Object.keys(data).length === 0) {
      fetchTrack(setMetadata);
      return;
    }
    if (!data.duration) return;
    if (timerRef.current) clearTimeout(timerRef.current);
    const ms = getDurationInSeconds(data.duration) * 1000;
    timerRef.current = setTimeout(() => {
      fetchTrack(setMetadata);
    }, ms);
  }, [metadata]);

  return (
    <TrackFather>
      {metadata && (
        <TrackCard
          key={`TC[${metadata.data.title}]${now()}`}
          getDurationInSeconds={getDurationInSeconds}
          data={metadata.data}
        />
      )}
    </TrackFather>
  );
};
Track.displayName = 'Track';
