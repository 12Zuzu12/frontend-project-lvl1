import { getRndInteger } from '../Helper.js';

const progression = () => {
  // eslint-disable-next-line prefer-const
  let firstNumber = getRndInteger(100, 1);
  // eslint-disable-next-line prefer-const
  let step = getRndInteger(5, 1);
  let resultNumber = '';
  const algebraicProgression = [firstNumber];
  for (let i = 0; algebraicProgression.length - 1 < 7; i += 1) {
    algebraicProgression[i] += step;
    const item = algebraicProgression[i];
    algebraicProgression.push(item);
  }
  algebraicProgression.pop();
  const point = '..';
  // eslint-disable-next-line prefer-const
  let e = Math.floor(Math.random() * 7) + 1;
  const correctNumber = algebraicProgression[e];
  algebraicProgression[e] = point;
  const question1 = `${algebraicProgression.join(' ')}`;
  resultNumber += correctNumber;
  return [resultNumber, question1];
};
export default progression;
