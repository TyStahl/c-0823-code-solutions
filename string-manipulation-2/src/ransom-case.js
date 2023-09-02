/* exported ransomCase */
function ransomCase(string) {
  const wordLowerCased = string.toLowerCase();
  let finalWord = '';
  for (let i = 0; i < wordLowerCased.length; i++) {
    if (i >= 1 && i % 2 !== 0) {
      finalWord += wordLowerCased[i].toUpperCase();
    } else {
      finalWord += wordLowerCased[i];
    }
  }
  return finalWord;
}

console.log('---ransomCase---');
console.log('foo  ->', '= "fOo"', ransomCase('foo'));
console.log('QUUX ->', '= "qUuX"', ransomCase('QUUX'));
console.log('WaldO ->', '= "wAlDo"', ransomCase('WaldO'));
console.log('JavaScript ->', ' ="jAvAsCrIpT"', ransomCase('JavaScript'));
console.log('LearningFuze ->', ' ="lEaRnInGfUzE"', ransomCase('LearningFuze'));
