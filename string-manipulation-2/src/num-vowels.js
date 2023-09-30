/* exported numVowels */
function numVowels(string) {
  const lowerCaseString = string.toLowerCase();
  let finalString = '';
  for (let i = 0; i < lowerCaseString.length; i++) {
    switch (lowerCaseString[i]) {
      case 'a':
        finalString += lowerCaseString[i];
        break;
      case 'e':
        finalString += lowerCaseString[i];
        break;
      case 'i':
        finalString += lowerCaseString[i];
        break;
      case 'o':
        finalString += lowerCaseString[i];
        break;
      case 'u':
        finalString += lowerCaseString[i];
        break;
    }
  }
  return finalString.length;
}
