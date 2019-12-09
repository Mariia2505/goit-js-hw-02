'use strict';

let input;
const numbers = [];
let total = 0;

do {
  input = prompt('type a number');
  let inputNumbered = Number(input);
  numbers.push(inputNumbered);
} while (input !== null);

for (let number of numbers) {
  total += number;
}
console.log(`Общая сумма чисел равна ${total}`);
//как можно сделать так чтобы в м-в numbers не записывалось посленее нулевое значение
