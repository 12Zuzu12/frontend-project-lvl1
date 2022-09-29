import number from '../Helper.js';
import gameBrainLogic from '../index.js';

export default () => {
  const searchGcd = (randomNumber1, randomNumber2) => {
    let resultOpNumber = '';
    let resultOpNumber1 = '';
    if (randomNumber1 === 0) {
      resultOpNumber = randomNumber2;
      return resultOpNumber;
    }
    while (randomNumber2 !== 0) {
      if (randomNumber1 > randomNumber2) {
      // eslint-disable-next-line no-param-reassign
        randomNumber1 -= randomNumber2;
      } else {
      // eslint-disable-next-line no-param-reassign
        randomNumber2 -= randomNumber1;
      }
    }
    resultOpNumber = randomNumber1;
    resultOpNumber1 += resultOpNumber;
    return [resultOpNumber1];
  };
  const gcd = () => {
    const randomNumber1 = number(100, 1);
    const randomNumber2 = number(100, 1);
    const gameDescription = 'Find the greatest common divisor of given numbers.';
    const question = `${randomNumber1} ${randomNumber2}`;
    const correctAnswer = searchGcd(randomNumber1, randomNumber2);
    return [correctAnswer[0], gameDescription, question];
  };
  gameBrainLogic(gcd);
};
