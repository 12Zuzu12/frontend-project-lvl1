import number from '../Helper.js';
import gameBrainLogic from '../index.js';

export default () => {
  const сalculation = (randomNumber1, randomNumber2, operator) => {
    switch (operator) {
      case '+':
        return (String(randomNumber1 + randomNumber2));
      case '-':
        return (String(randomNumber1 - randomNumber2));
      case '*':
        return (String(randomNumber1 * randomNumber2));
      default:
        throw new Error(`Unknown operator: '${operator}'`);
    }
  };
  const calc = () => {
    const randomNumber1 = number(100, 1);
    const randomNumber2 = number(100, 1);
    const ops = ['+', '-', '*'];
    const opindex = Math.floor(Math.random() * ops.length);
    const operator = ops[opindex];
    const question = `${randomNumber1} ${operator} ${randomNumber2}`;
    const gameDescription = 'What is the result of the expression?';
    const correctAnswer = сalculation(randomNumber1, randomNumber2, operator);
    return [correctAnswer, gameDescription, question];
  };
  gameBrainLogic(calc);
};
