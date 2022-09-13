#!/usr/bin/env node

import {getRndInteger} from '../randomFile.js';
import  { conclusions }  from '../src/index.js';

const getInstructionsGames = 'Find the greatest common divisor of given numbers.';
const gcd = () => {
  let randomNumber1 = getRndInteger(100, 1);
  let randomNumber2 = getRndInteger(100, 1);
  const question = `${randomNumber1} ${randomNumber2}`;
  
  let resultOpNumber = 0
  if (randomNumber1 == 0){
    resultOpNumber = randomNumber2
   return resultOpNumber;
  }

  while (randomNumber2 != 0) {
    if (randomNumber1 > randomNumber2){ 
      randomNumber1 = randomNumber1 - randomNumber2;
    }else{
      randomNumber2 = randomNumber2 - randomNumber1;
    }
  }

  resultOpNumber = randomNumber1
  return [resultOpNumber,question];
}
conclusions(gcd,getInstructionsGames);