import runGame from '../src/index.js';

const gameRules = 'What number is missing in the progression?';
const numsAmountInProgr = 10;

const generateRound = () => {
  const countBy = Math.floor(Math.random() * 10 + 1);
  const firstNumOfProgression = Math.floor(Math.random() * 10);
  const arrayOfProgression = [];
  for (let i = firstNumOfProgression; arrayOfProgression.length < numsAmountInProgr; i += countBy) {
    arrayOfProgression.push(i);
  }
  const hiddenElementIndex = Math.floor(Math.random() * numsAmountInProgr);
  const answer = arrayOfProgression[hiddenElementIndex];
  arrayOfProgression[hiddenElementIndex] = '..';
  const question = arrayOfProgression.join(' ');

  return [question, answer];
};

export default () => runGame(gameRules, generateRound);
