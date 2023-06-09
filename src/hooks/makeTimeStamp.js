export const makeTimeStamp = (time) => {
  const timeStamp = new Date(time);
  return timeStamp.getTime();
};
