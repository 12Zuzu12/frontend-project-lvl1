import number from '../Helper.js';

// eslint-disable-next-line consistent-return
const startGame = (randomNumber1, randomNumber2, operator1) => {
  switch (operator1) {
    case '+':
      return (String(randomNumber1 + randomNumber2));
    case '-':
      return (String(randomNumber1 - randomNumber2));
    case '*':
      return (String(randomNumber1 * randomNumber2));
    default:
  }
};
const calc = () => {
  const randomNumber1 = number(100, 1);
  const randomNumber2 = number(100, 1);
  // eslint-disable-next-line prefer-const
  const ops = ['+', '-', '*'];
  const opindex = Math.floor(Math.random() * 3);
  const operator1 = ops[opindex];
  const question = `${randomNumber1} ${operator1} ${randomNumber2}`;
  const gameDescription = 'What is the result of the expression?';
  const correctAnswer = startGame(randomNumber1, randomNumber2, operator1);
  return [correctAnswer, question, gameDescription];
};

export default calc;
