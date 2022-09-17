import { getRndInteger } from '../Helper.js';

const prime = () => {
  let correctAnswer = '';
  // eslint-disable-next-line prefer-const
  let randomNumber = getRndInteger(100, 2);
  // eslint-disable-next-line max-len
  if (randomNumber % 2 === 0 || randomNumber % 3 === 0 || randomNumber % 5 === 0 || randomNumber % 7 === 0) {
    correctAnswer = 'no';
  } else {
    correctAnswer = 'yes';
  }
  return [correctAnswer, randomNumber];
};
export default prime;
