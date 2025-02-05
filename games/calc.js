import runGame from '../src/index.js';

const operators = ['+', '-', '*'];

const calculate = (num1, num2, operator) => {
  switch (operator) {
    case '+': return num1 + num2;
    case '-': return num1 - num2;
    case '*': return num1 * num2;
    default: return null;
  }
};

const generateRound = () => {
  const num1 = Math.floor(Math.random() * 11);
  const num2 = Math.floor(Math.random() * 11);
  const operator = operators[Math.floor(Math.random() * operators.length)];

  const question = `${num1} ${operator} ${num2}`;
  const answer = calculate(num1, num2, operator);

  return [question, answer];
};

const gameRules = 'What is the result of the expression?';

export default () => runGame(gameRules, generateRound);
