#!/usr/bin/env node

import greetings from '../bin/brain-games.js';
import getRndInteger from '../src/index.js';
import  { getRndOperator }  from '../src/index.js';
import { conclusions } from '../src/index.js';

greetings();
export const getInstructionsGames = 'What is the result of the expression?';
export function calc () {
  const randomNumber1 = getRndInteger(100, 1);
  const randomNumber2 = getRndInteger(100, 1);
  let getRandomOperator = getRndOperator();
  const question = `Question: ${randomNumber1} ${getRandomOperator} ${randomNumber2}`;
  let result = 0; 
  switch (getRandomOperator) {
    case '+':
      result = randomNumber1 + randomNumber2;
      break;
    case '-':
      result = randomNumber1 - randomNumber2;
      break;
    case '*':
      result = randomNumber1 * randomNumber2;
      break;
    default:
      result = null;
  }
  return [result,question];
}
conclusions();
