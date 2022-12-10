import number from '../Helper.js';
import gameBrainLogic from '../index.js';

const gameDescription = 'What number is missing in the progression?';
const algebraicProgressions = (firstNumber, step) => {
  const progressionLength = 7;
  const algebraicProgression = [firstNumber];
  for (let i = 0; algebraicProgression.length - 1 < progressionLength; i += 1) {
    algebraicProgression[i] += step;
    algebraicProgression.push(algebraicProgression[i]);
  }
  algebraicProgression.pop();
  return algebraicProgression;
};
const startGame = (firstNumber, step) => {
  const algebraicProgression = algebraicProgressions(firstNumber, step);
  const randomPlaceQuotes = 6;
  let resultNumber = '';
  const e = Math.floor(Math.random() * randomPlaceQuotes) + 1;
  resultNumber += algebraicProgression[e];
  algebraicProgression[e] = '..';
  const question1 = `${algebraicProgression.join(' ')}`;
  return [resultNumber, question1];
};
const progression = () => {
  const firstNumber = number(100, 1);
  const step = number(5, 1);
  const result = startGame(firstNumber, step);
  return [result[0], result[1]];
};
export default () => gameBrainLogic(progression, gameDescription);
