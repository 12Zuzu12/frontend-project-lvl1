import generateNumber from '../Helper.js';
import gameBrainLogic from '../index.js';

const gameDescription = 'Find the greatest common divisor of given numbers.';
function searchGcd(randomNumber1, randomNumber2) {
  let resultOpNumber = '';
  let number1 = randomNumber1;
  let number2 = randomNumber2;
  while (number1 && number2) {
    if (number1 > number2) {
      number1 %= number2;
    } else {
      number2 %= number1;
    }
  }
  number2 += number1;
  resultOpNumber += number2;
  return resultOpNumber;
}
const gcd = () => {
  const randomNumber1 = generateNumber(100, 1);
  const randomNumber2 = generateNumber(100, 1);
  const question = `${randomNumber1} ${randomNumber2}`;
  const correctAnswer = searchGcd(randomNumber1, randomNumber2);
  return [correctAnswer, question];
};
export default () => gameBrainLogic(gcd, gameDescription);
