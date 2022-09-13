#!/usr/bin/env node

import { getRndInteger } from '../randomFile.js';
import {conclusions } from '../src/index.js';

const getInstructionsGames = 'Answer "yes" if given number is prime. Otherwise answer "no"';
const  prime = () => {
  let correctAnswer = '';
  let randomNumber = getRndInteger(100, 1)
  if  ( randomNumber % 2 === 0 || randomNumber % 3 === 0 ) {
    correctAnswer = 'no';
  }else{
    correctAnswer = 'yes';
  }
  return [correctAnswer,randomNumber] 
};
conclusions(prime,getInstructionsGames);
