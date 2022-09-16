import { getRndInteger } from '../Helper.js';

const progression = () => {
  let firstNumber = getRndInteger(100, 1);
  let step = getRndInteger(10, 1);
  let resultNumber = '';
  let algebraicProgression = [firstNumber];
  for (let i = 0; algebraicProgression.length-1 < 7; i += 1 ) {
    algebraicProgression[i] = algebraicProgression[i] + step;
    let item = algebraicProgression[i];
    algebraicProgression.push(item);
  }
  algebraicProgression.pop();
  const point = '..';
  let e = Math.floor(Math.random()*7) + 1;
  let correctNumber = algebraicProgression[e];
  algebraicProgression[e] = point;
  const question1 = `${algebraicProgression}`;
  resultNumber += correctNumber;
  return [resultNumber,question1];
};
export default progression;
  