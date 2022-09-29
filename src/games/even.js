import number from '../Helper.js';
import gameBrainLogic from '../index.js';

export default () => {
  const isSimpleNumber = (randomNumber) => {
    if (randomNumber % 2 === 0) {
      return 'yes';
    }
    return 'no';
  };
  const evenNumbers = () => {
    const randomNumber = number(10, 0);
    const gameDescription = 'Answer "yes" if the number is even, otherwise answer "no".';
    const correctAnswer = isSimpleNumber(randomNumber);
    return [correctAnswer, gameDescription, randomNumber];
  };
  gameBrainLogic(evenNumbers);
};
