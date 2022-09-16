import {getRndInteger} from '../Helper.js';

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
export default prime;