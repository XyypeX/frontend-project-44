import readlineSync from 'readline-sync';
import { greet } from '../src/cli.js';

const numberGen = () => { //question:
  return Math.floor(Math.random() * 1001) //создаём число
}
const ifEven = (ourNum) => {  //этим проверим на чётность
  if (ourNum % 2 === 0) {
   return true
  } else {
   return false
  }
}
const wePlayThis = () => {  
    const userName = greet();
   console.log('Answer "yes" if the number is even, otherwise answer "no".');

   let correctAnswers = 0; 
   const totalQuestions = 3;


while (correctAnswers < totalQuestions) {
    const randomNumber = numberGen();
    console.log( 'Question: ' + randomNumber);


const userAnswer = readlineSync.question('Your answer: ').toLowerCase();
let ifCorrectAnswer;

if (ifEven(randomNumber)) {
    ifCorrectAnswer = 'yes';
} else {
    ifCorrectAnswer = 'no';
};

if (userAnswer === ifCorrectAnswer) {
    console.log('Correct!');
    correctAnswers += 1;
} else {
    console.log(userAnswer + ' is wrong answer ;(. Correct answer was ' + ifCorrectAnswer + '.');
    console.log(`Let's try again, ` + userName + `!`);
    return;
 }
}
console.log('Congratulations, ' + userName + '!');
}

wePlayThis();