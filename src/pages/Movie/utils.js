export const getYear = (date) => {
  if (date) {
    return date.split('-')[0];
  }
};

export const genresToString = (genres) => {
  if (genres) {
    return genres.map((obj) => obj.name).join(', ');
  }
};

export const getTime = (time) => {
  // time - in minutes
  const hours = Math.floor(time / 60);
  const minutes = time - Math.floor(time / 60) * 60;
  if (time) {
    return `${hours}h ${minutes}m`;
  }
};

export const roundRating = (rating) => {
  if (rating) {
    return Math.round(rating * 10) / 10;
  }
};

export const fomatMoneyNumber = (number) => {
  if (number) {
    const arr = String(number).split('');
    let newArr = [];
    while (arr.length > 3) {
      newArr = [arr.splice(-3, 3), ...newArr];
    }
    newArr = newArr.map((innerArr) => innerArr.join(''));

    return `$${arr.join('')},${newArr.join(',')}`;
  }
  return 'Немає даних';
};
