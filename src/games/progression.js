import generateNumber from '../Helper.js';
import gameBrainLogic from '../index.js';

const gameDescription = 'What number is missing in the progression?';
const generateProgression = (firstNumber, step, progressionLength) => {
  const algebraicProgression = [];
  for (let i = 0; i < progressionLength; i += 1) {
    algebraicProgression.push(firstNumber + i * step);
  }
  return algebraicProgression;
};

const startGame = () => {
  const firstNumber = generateNumber(100, 1);
  const progressionLength = generateNumber(9, 5);
  const step = generateNumber(5, 1);
  const randomPlaceQuotes = generateNumber(5, 1);
  const algebraicProgression = generateProgression(firstNumber, step, progressionLength);
  const resultNumber = algebraicProgression[randomPlaceQuotes];
  const rightAnswer = String(resultNumber);
  algebraicProgression[randomPlaceQuotes] = '..';
  const question1 = `${algebraicProgression.join(' ')}`;
  return [rightAnswer, question1];
};
export default () => gameBrainLogic(startGame, gameDescription);
