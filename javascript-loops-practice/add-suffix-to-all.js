/* exported addSuffixToAll */
function addSuffixToAll(words, suffix) {
  const newArray = [];
  for (let i = 0; i < words.length; i++) {
    const suffWord = words[i] + suffix;
    newArray.push(suffWord);
  }
  return newArray;
}
