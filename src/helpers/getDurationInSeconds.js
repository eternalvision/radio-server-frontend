export const getDurationInSeconds = (duration) => {
  const [min, sec] = duration.split(':').map(Number);
  return min * 60 + sec;
};
