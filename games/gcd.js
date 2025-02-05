import runGame from '../src/index.js';

const getGCD = (a, b) => {
  if (b === 0) {
    return a;
  }
  return getGCD(b, a % b);
};

const generateRound = () => {
  const num1 = Math.floor(Math.random() * 100) + 1; // числа от 1 до 100
  const num2 = Math.floor(Math.random() * 100) + 1;

  const question = `${num1} ${num2}`;
  const answer = getGCD(num1, num2);

  // Возвращаем массив, потому что index.js ожидает именно такой формат
  return [question, answer];
};

const gameRules = 'Find the greatest common divisor of given numbers.';

export default () => runGame(gameRules, generateRound);
