import readlineSync, { question } from 'readline-sync';

export function conclusions(functionGame,getInstructionsGames) {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(getInstructionsGames);
  for (let i = 0; i < 3; i += 1) {
    const correctAnswer = functionGame();
    console.log(`Question: ${correctAnswer[1]}`);
    const parityIssue = readlineSync.question(`Your answer: `);
    if (correctAnswer[0] === parityIssue) {
      console.log('Correct!');
    } else {
      console.log(`'${parityIssue}' is wrong answer ;(. Correct answer was '${correctAnswer[0]}'.
Let's try again, ${name}!'`);
      return;
    }
  }
  console.log(`"Congratulations, ${name}!"`);
}
