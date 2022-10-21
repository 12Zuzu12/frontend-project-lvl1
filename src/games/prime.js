import number from '../Helper.js';
import gameBrainLogic from '../index.js';

const gameDescription = 'Answer "yes" if given number is prime. Otherwise answer "no"';
const startGame = (randomNumber) => {
  let correctAnswer = '';
  if (randomNumber % 2 === 0 || randomNumber % 3 === 0
    || randomNumber % 5 === 0 || randomNumber % 7 === 0) {
    correctAnswer = 'no';
  } else {
    correctAnswer = 'yes';
  }
  return [correctAnswer];
};
const prime = () => {
  const randomNumber = number(100, 2);
  const result = startGame(randomNumber);
  return [result[0], randomNumber];
};
export default () => gameBrainLogic(prime, gameDescription);
