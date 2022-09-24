import number from '../Helper.js';

const startGame = (firstNumber, step) => {
  let resultNumber = '';
  const algebraicProgression = [firstNumber];
  for (let i = 0; algebraicProgression.length - 1 < 7; i += 1) {
    algebraicProgression[i] += step;
    const item = algebraicProgression[i];
    algebraicProgression.push(item);
  }
  algebraicProgression.pop();
  // eslint-disable-next-line prefer-const
  let point = '..';
  // eslint-disable-next-line prefer-const
  let e = Math.floor(Math.random() * 6) + 1;
  const correctNumber = algebraicProgression[e];
  algebraicProgression[e] = point;
  const question1 = `${algebraicProgression.join(' ')}`;
  resultNumber += correctNumber;
  return [resultNumber, question1];
};
const progression = () => {
  // eslint-disable-next-line prefer-const
  let firstNumber = number(100, 1);
  // eslint-disable-next-line prefer-const
  let step = number(5, 1);
  const gameDescription = 'What number is missing in the progression?';
  const result = startGame(firstNumber, step);
  return [result[0], result[1], gameDescription];
};
export default progression;
