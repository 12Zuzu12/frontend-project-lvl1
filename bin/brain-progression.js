#!/usr/bin/env node
import { getRndInteger } from '../randomFile.js';
import { conclusions } from '../src/index.js';

const getInstructionsGames = () => 'What number is missing in the progression?';

const progression = () => {
  let firstNumber = getRndInteger(100, 1);
  let step = getRndInteger(10, 1);
  let algebraicProgression = [firstNumber];
  for (let i = 0; algebraicProgression.length-1 < 7; i += 1 ) {
    algebraicProgression[i] = algebraicProgression[i] + step
    let item = algebraicProgression[i];
    algebraicProgression.push(item)
  }
  algebraicProgression.pop()
  const point = '..';
  let e = Math.floor(Math.random()*7) + 1;
  let  correctNumber = algebraicProgression[e] 
  algebraicProgression[e] = point
  const question1 = `${algebraicProgression}`;
  return [correctNumber,question1]
};

conclusions(progression,getInstructionsGames());
