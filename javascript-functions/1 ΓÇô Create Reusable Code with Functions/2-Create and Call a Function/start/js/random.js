function getRandomNumber(upper) {
  const randomNumber = Math.floor( Math.random() * upper ) + 1;
  return randomNumber;
}

alert( getRandomNumber(21) );
