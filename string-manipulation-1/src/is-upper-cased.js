/* exported isUpperCased */

function isUpperCased(word) {
  const uppered = word.toUpperCase();
  if (uppered === word) {
    return true;
  } else {
    return false;
  }
}
