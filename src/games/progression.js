import number from '../Helper.js';
import gameBrainLogic from '../index.js';

const gameDescription = 'What number is missing in the progression?';
const startGame = (firstNumber, step) => {
  const progressionLength = 7;
  const randomPlaceQuotes = 6;
  let resultNumber = '';
  const algebraicProgression = [firstNumber];
  for (let i = 0; algebraicProgression.length - 1 < progressionLength; i += 1) {
    algebraicProgression[i] += step;
    const item = algebraicProgression[i];
    algebraicProgression.push(item);
  }
  algebraicProgression.pop();
  // eslint-disable-next-line prefer-const
  let point = '..';
  // eslint-disable-next-line prefer-const
  let e = Math.floor(Math.random() * randomPlaceQuotes) + 1;
  const correctNumber = algebraicProgression[e];
  algebraicProgression[e] = point;
  const question1 = `${algebraicProgression.join(' ')}`;
  resultNumber += correctNumber;
  return [resultNumber, question1];
};
const progression = () => {
  const firstNumber = number(100, 1);
  const step = number(5, 1);
  const result = startGame(firstNumber, step);
  return [result[0], result[1]];
};
export default () => gameBrainLogic(progression, gameDescription);
