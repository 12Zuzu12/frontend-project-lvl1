import { getRndInteger } from '../Helper.js';

const gcd = () => {
  let randomNumber1 = getRndInteger(100, 1);
  let randomNumber2 = getRndInteger(100, 1);
  const question = `${randomNumber1} ${randomNumber2}`;
  let resultOpNumber = '';
  let resultOpNumber1 = '';
  if (randomNumber1 === 0) {
    resultOpNumber = randomNumber2;
    return resultOpNumber;
  }
  while (randomNumber2 !== 0) {
    if (randomNumber1 > randomNumber2) {
      randomNumber1 -= randomNumber2;
    } else {
      randomNumber2 -= randomNumber1;
    }
  }
  resultOpNumber = randomNumber1
  resultOpNumber1 += resultOpNumber;
  return [resultOpNumber1, question];
};
export default gcd;
