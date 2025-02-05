import { runGame } from '../src/index.js';

const isEven = (num) => num % 2 === 0;

const generateRound = () => {
  const number = Math.floor(Math.random() * 1001);
  const question = number.toString();
  const answer = isEven(number) ? 'yes' : 'no';

  return [question, answer];
};

export default () => {
  const gameRules = 'Answer "yes" if the number is even, otherwise answer "no".';
  runGame(gameRules, generateRound);
};
