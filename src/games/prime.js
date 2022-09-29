import number from '../Helper.js';
import gameBrainLogic from '../index.js';

export default () => {
  const startGame = (randomNumber) => {
    let correctAnswer = '';
    // eslint-disable-next-line max-len
    if (randomNumber % 2 === 0 || randomNumber % 3 === 0 || randomNumber % 5 === 0 || randomNumber % 7 === 0) {
      correctAnswer = 'no';
    } else {
      correctAnswer = 'yes';
    }
    return [correctAnswer];
  };
  const prime = () => {
  // eslint-disable-next-line prefer-const
    let randomNumber = number(100, 2);
    const gameDescription = 'Answer "yes" if given number is prime. Otherwise answer "no"';
    const result = startGame(randomNumber);
    return [result[0], gameDescription, randomNumber];
  };
  gameBrainLogic(prime);
};
