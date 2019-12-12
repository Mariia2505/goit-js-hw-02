'use strict';

const calculateEngravingPrice = function(message, pricePerWord) {
  return message.split(' ').length * pricePerWord;
};

console.log(calculateEngravingPrice('Donec orci lectus aliquam est', 40)); // 200

console.log(calculateEngravingPrice('Donec orci lectus aliquam est', 20)); // 100
