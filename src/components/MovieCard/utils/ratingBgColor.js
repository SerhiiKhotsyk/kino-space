// define bg color of rating element
export const bgColor = (rating) => {
  if (rating === 0) {
    return 'bgGrey';
  } else if (rating <= 4.5) {
    return 'bgRed';
  } else if (rating <= 6) {
    return 'bgYellow';
  } else if (rating <= 7) {
    return 'bgYellowGreen';
  } else if (rating <= 10) {
    return 'bgGreen';
  } else return 'bgGrey';
};
