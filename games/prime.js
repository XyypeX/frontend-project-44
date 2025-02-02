import { runGame } from '../src/index.js';

const isPrime = (num) => {
    if (num <= 1) return false; // Числа ≤ 1 не простые
    if (num === 2) return true; // 2 — единственное чётное простое число
    if (num % 2 === 0) return false; // Все остальные чётные числа не простые

    const s = Math.sqrt(num); // Вычисление квадратного корня
    for (let i = 3; i <= s; i += 2) { // Проверяем только нечётные числа
        if (num % i === 0) return false;
    }
    return true;
};

const generateRound = () => { 
 const number = Math.floor(Math.random() * 10 + 1);
 const question = number;
 const correctAnswer = isPrime(number) ? 'yes' : 'no';
 return [question, correctAnswer]
}

const gameRules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

export default () => runGame(gameRules, generateRound);