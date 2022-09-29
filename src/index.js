import readlineSync from 'readline-sync';

function gameBrainLogic(functionGame) {
  const numberOfRounds = 3;
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  const [, gameDescription] = functionGame();
  console.log(gameDescription);
  for (let i = 0; i < numberOfRounds; i += 1) {
    const [correctAnswer, , сondition] = functionGame();
    console.log(`Question: ${сondition}`);
    // eslint-disable-next-line quotes
    const parityIssue = readlineSync.question(`Your answer: `);
    if (correctAnswer === parityIssue) {
      console.log('Correct!');
    } else {
      console.log(`'${parityIssue}' is wrong answer ;(. Correct answer was '${correctAnswer}'.
Let's try again, ${name}!'`);
      return;
    }
  }
  console.log(`"Congratulations, ${name}!"`);
}
export default gameBrainLogic;
