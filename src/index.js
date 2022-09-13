import readlineSync, { question } from 'readline-sync';

export const getRndInteger = (min, max) => {
  return Math.floor(Math.random() * (max - min)) + min;
}

export function getRndOperator() {
  let ops = ['+', '-', '*'];
  let opindex = Math.floor(Math.random() * 3);
  const operator1 = ops[opindex];
  return operator1;
}
export function conclusions(functionGame,getInstructionsGames) {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello,${name}!`);
  console.log(getInstructionsGames);
  for (let i = 0; i < 3; i += 1) {
    const correctAnswer = functionGame();
    console.log(`Question: ${correctAnswer[1]}`);
    const parityIssue = readlineSync.question(`Your answer: `);
    if (correctAnswer[0] === Number(parityIssue)) {
      console.log('Correct!');
    } else {
      console.log(`'${parityIssue}' is wrong answer ;(. Correct answer was '${correctAnswer[0]}'.
Let's try again, ${name}!'`);
      return;
    }
  }
  console.log(`"Congratulations, ${name}!"`);

}
