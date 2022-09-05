#!/usr/bin/env node

import greetings from "../bin/brain-games.js"
import readlineSync from 'readline-sync';


greetings();
const name = readlineSync.question('May I have your name? ');
console.log(`Hello,${name}!`);

let correctYes = 0;
console.log('Answer "yes" if the number is even, otherwise answer "no".')
while (true) {
  if (correctYes === 3) {
    console.log(`"Congratulations, ${name}!"`);
    break;
  }
  const randomNumber = Math.floor(Math.random() * (10 - 1 + 1)) + 1;
  console.log(`Question: ${randomNumber}`);
  const  parityIssue = readlineSync.question(`Your answer: `);

  if (randomNumber % 2 === 0 && parityIssue === "yes" && correctYes <= 3) {
    console.log("Correct!");
    correctYes += 1;
  }else if (randomNumber % 2 !== 0 && parityIssue === "no" && correctYes <= 3) {
    console.log("Correct!");
    correctYes += 1;
  } else if (randomNumber % 2 === 0 && parityIssue === "no") {
    console.log(`'no' is wrong answer ;(. Correct answer was 'yes'.Let'/s try again, ${name} `);
    break;
  } else if (randomNumber % 2 !== 0 && parityIssue === "yes") {
    console.log(`'yes' is wrong answer ;(. Correct answer was 'no'.Let's try again , ${name}`);
    break;
  } else {
    break;
  }
}
