/* exported capitalizeWord */
function capitalizeWord(word) {
  const wordLowerCased = word.toLowerCase();
  let firstUpperCased = '';
  let finalWord = '';
  if (wordLowerCased !== 'javascript') {
    for (let i = 0; i < wordLowerCased.length; i++) {
      if (i === 0) {
        firstUpperCased += wordLowerCased[i].toUpperCase();
      } else {
        firstUpperCased += wordLowerCased[i];
      }
    }
    finalWord = firstUpperCased;
  } else {
    for (let i = 0; i < wordLowerCased.length; i++) {
      if (i === 0 || i === 4) {
        firstUpperCased += wordLowerCased[i].toUpperCase();
      } else {
        firstUpperCased += wordLowerCased[i];
      }
    }
    finalWord = firstUpperCased;
  }
  return finalWord;
}
