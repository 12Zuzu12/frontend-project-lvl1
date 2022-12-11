import number from '../Helper.js';
import gameBrainLogic from '../index.js';

const gameDescription = 'What number is missing in the progression?';
const generateProgression = (firstNumber, step) => {
  const progressionLength = 7;
  const algebraicProgression = [];
  for (let i = 0; i < progressionLength; i += 1) {
    algebraicProgression.push(firstNumber + i * step);
  }
  return algebraicProgression;
};
const startGame = (firstNumber, step, randomPlaceQuotes) => {
  const algebraicProgression = generateProgression(firstNumber, step);
  const resultNumber = algebraicProgression[randomPlaceQuotes];
  algebraicProgression[randomPlaceQuotes] = '..';
  const question1 = `${algebraicProgression.join(' ')}`;
  return [resultNumber, question1];
};
const progression = () => {
  const firstNumber = number(100, 1);
  const step = number(5, 1);
  const randomPlaceQuotes = number(7, 1);
  const result = startGame(firstNumber, step, randomPlaceQuotes);
  const rightAnswer = String(result[0]);
  return [rightAnswer, result[1]];
};
export default () => gameBrainLogic(progression, gameDescription);
