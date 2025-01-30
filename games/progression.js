import { runGame } from '../src/index.js';

const gameRules = 'What number is missing in the progression?';
const numbersAmountInProgression = 10;

const generateRound = () => {
    const countBy = Math.floor(Math.random() * 10 + 1);
    const firstNumberOfProgression = Math.floor(Math.random() * 10 );
    let arrayOfProgression = [];
    for (let i = firstNumberOfProgression; arrayOfProgression.length < numbersAmountInProgression; i += countBy) {
    arrayOfProgression.push(i)
    }
    const hiddenElementIndex = Math.floor(Math.random() * numbersAmountInProgression);
    const answer = arrayOfProgression[hiddenElementIndex];
    arrayOfProgression[hiddenElementIndex] = '..';
    const question = arrayOfProgression.join(' ');

    return [question, answer];
};

export default () => runGame(gameRules, generateRound);