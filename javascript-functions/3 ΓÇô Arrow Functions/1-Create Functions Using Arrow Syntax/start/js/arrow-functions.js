const getRandomNumber = () => {
  const randomNumber = Math.floor( Math.random() * 6 ) + 1;
  return randomNumber;
}

const getArea = (width, length, unit = 'cm') => {
  const area = width * length;
  return `${area} ${unit}`;
}
