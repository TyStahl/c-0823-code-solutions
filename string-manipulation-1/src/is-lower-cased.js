/* exported isLowerCased */
function isLowerCased(word) {
  const lowered = word.toLowerCase();
  if (word === lowered) {
    return true;
  }
  return false;
}
