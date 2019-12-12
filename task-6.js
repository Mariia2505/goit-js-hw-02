'use strict';

let input;
const numbers = [];
let total = 0;

do {
  input = prompt('type a number');
  if (input !== null) {
    let inputNumbered = Number(input);
    numbers.push(inputNumbered);
  }
} while (input !== null);

if (numbers.length > 0) {
  for (let number of numbers) {
    total += number;
  }
}
// console.log(numbers);
console.log(`Общая сумма чисел равна ${total}`);
