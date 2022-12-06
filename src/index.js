import readlineSync from 'readline-sync';

function gameBrainLogic(generatorGame, gameDescription) {
  const numberOfRounds = 3;
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(gameDescription);
  for (let i = 0; i < numberOfRounds; i += 1) {
    const [correctAnswer, сondition] = generatorGame();
    console.log(`Question: ${сondition}`);
    const parityIssue = readlineSync.question('Your answer: ');
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
