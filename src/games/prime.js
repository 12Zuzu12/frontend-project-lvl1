import generateNumber from '../Helper.js';
import gameBrainLogic from '../index.js';

const gameDescription = 'Answer "yes" if given number is prime. Otherwise answer "no"';

const isPrime = (randomNumber) => {
  if (randomNumber < 2) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(randomNumber); i += 1) {
    if (randomNumber % i === 0) {
      return false;
    }
  }
  return true;
};

const sayPrimeOrNot = () => {
  const randomNumber = generateNumber(100, 2);
  const correctAnswer = isPrime(randomNumber) ? 'yes' : 'no';
  return [correctAnswer, randomNumber];
};

export default () => gameBrainLogic(sayPrimeOrNot, gameDescription);
