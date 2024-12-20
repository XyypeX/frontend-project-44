import readlineSync from 'readline-sync';
import { greet } from '../src/cli.js';

const operators = ['+', '-', '*'];

const calculate = (num1, num2, randomOperator) => {
    if (randomOperator === '-') {
        return num1 - num2;
    } else if (randomOperator === '+') {
        return num1 + num2;
    } else if (randomOperator === '*') {
        return num1 * num2;
    }
}

const numberGen = () => {
    return Math.floor(Math.random() * 11)
  }

const playCalc = () => {
    const userName = greet();
    console.log('Hello, ' + userName + '!');
    console.log('What is the result of the expression?');

    let correctAnswers = 0;
    const totalQuestions = 3;

    while (correctAnswers < totalQuestions) {
        const num1 = numberGen(); // Генерация первого числа
        const num2 = numberGen(); // Генерация второго числа
        const randomOperator = operators[Math.floor(Math.random() * operators.length)];

        console.log('Question: ' + num1 + ' ' + randomOperator + ' ' + num2);
        const userAnswer = readlineSync.question('Your answer: ');
        const correctAnswer = calculate(num1, num2, randomOperator);

        if (Number(userAnswer) === correctAnswer) {
            console.log('Correct!');
            correctAnswers += 1;
        } else { 
            console.log(userAnswer + ' is wrong answer ;(. Correct answer was ' + correctAnswer + '.');
            console.log("Let's try again, " + userName + '!');
            return;
        }
    }

    console.log('Congratulations, ' + userName + '!');
}

playCalc();