import generateNumber from '../Helper.js';
import gameBrainLogic from '../index.js';

const gameDescription = 'Answer "yes" if the number is even, otherwise answer "no".';
const isEven = (randomNumber) => {
  if (randomNumber % 2 === 0) {
    return true;
  }
  return false;
};
const evenNumbers = () => {
  const randomNumber = generateNumber(10, 0);
  const correctAnswer = isEven(randomNumber) ? 'yes' : 'no';
  return [correctAnswer, randomNumber];
};
export default () => gameBrainLogic(evenNumbers, gameDescription);
