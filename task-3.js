'use strict';

const findLongestWord = function (string) {
  const wordsArray = string.split(' ');
  let lengthArray = [];
  for (let i = 0; i < wordsArray.length; i++) {
    lengthArray.push(wordsArray[i].length);
  }
  const longestNumber = Math.max(...lengthArray);
  const longestWordNumber = lengthArray.indexOf(longestNumber);
  const longestWord = wordsArray[longestWordNumber];
  return longestWord;
};

console.log(findLongestWord('The quick brown fox jumped over the lazy dog')); // 'jumped'