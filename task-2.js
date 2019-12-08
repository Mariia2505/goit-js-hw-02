'use strict';

const calculateEngravingPrice = function (message, pricePerWord) {
  const wordsAmount = message.split(' ').length;
  const totalPrice = wordsAmount * pricePerWord;
  return totalPrice;
};

console.log(calculateEngravingPrice('Donec orci lectus aliquam est', 40)); // 200

console.log(calculateEngravingPrice('Donec orci lectus aliquam est', 20)); // 100