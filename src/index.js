//import { calc } from '../bin/brain-calc.js'
import readlineSync from 'readline-sync';
import { gcd } from '../bin/brain-gcd.js'


export const random = (max, min) => {
  const randomNumber = Math.floor(Math.random() * (max - min + min)) + max;
};

export const getRndInteger = (min, max) => {
  return Math.floor(Math.random() * (max - min)) + min;
}

export function getRndOperator() {
  let ops = ['+', '-', '*'];
  let opindex = Math.floor(Math.random() * 3);
  const operator1 = ops[opindex];
  return operator1;
}
export function conclusions() {
  console.log('Welcome to the Brain Games!')
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello,${name}!`);
  const getInstructionsGames = gcd()
  console.log(getInstructionsGames[2]);
  for (let i = 0; i < 3; i += 1) {
    const getExpression = gcd();
    console.log(`${getExpression[1]}`);
    const parityIssue = readlineSync.question(`Your answer: `);
    if (getExpression[0] === Number(parityIssue)) {
      console.log('Correct!');
    } else {
      console.log(`'${parityIssue}' is wrong answer ;(. Correct answer was '${getExpression[0]}'.
Let's try again, ${name}!'`);
      return;
    }
  }
  console.log(`"Congratulations, ${name}!"`);
return
}
