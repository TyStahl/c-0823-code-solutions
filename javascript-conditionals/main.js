/* exported isUnderFive,
            isEven,
            startsWithJ,
            isOldEnoughToDrink,
            isOldEnoughToDrive,
            isOldEnoughToDrinkAndDrive,
            categorizeAcidity,
            introduceWarnerBro,
            recommendMovie
 */
function isUnderFive(number) {
  if (number < 5) {
    return true;
  }
  return false;
}
console.log('is 4 under 5? ', isUnderFive(4));
console.log('is 10 under 5? ', isUnderFive(10));
console.log('is 5 under 5? ', isUnderFive(5));

function isEven(number) {
  const remainder = number % 2;
  if (remainder === 0) {
    return true;
  }
  return false;
}
console.log('is 4 even? ', isEven(4));
console.log('is 10 even? ', isEven(10));
console.log('is 5 even? ', isEven(5));

function startsWithJ(string) {
  if (string[0] === 'J') {
    return true;
  }
  return false;
}

console.log('Javascript starts with J? ', startsWithJ('Javascript'));
console.log('PHP starts with J? ', startsWithJ('PHP'));
console.log('HTML starts with J? ', startsWithJ('HTML'));
console.log('Java starts with J? ', startsWithJ('Java'));
console.log('Kotlin starts with J? ', startsWithJ('Kotlin'));
console.log('C# starts with J? ', startsWithJ('C#'));

function isOldEnoughToDrink(person) {
  if (person.age >= 21) {
    return true;
  }
  return false;
}

const bart = {
  name: 'Bartholomew JoJo Simpson',
  age: 1,
};
const tyler = {
  name: 'Tyler Stahl',
  age: 32,
};

console.log('is Bart old enough to drink? ', isOldEnoughToDrink(bart));
console.log('is Tyler old enough to drink? ', isOldEnoughToDrink(tyler));

function isOldEnoughToDrive(person) {
  if (person.age >= 16) {
    return true;
  }
  return false;
}

console.log('is Bart old enough to drive? ', isOldEnoughToDrive(bart));
console.log('is Tyler old enough to drive? ', isOldEnoughToDrink(tyler));

function isOldEnoughToDrinkAndDrive(person) {
  return false;
}

console.log(
  'is Bart old enough to drink and drive? ',
  isOldEnoughToDrinkAndDrive(bart)
);
console.log(
  'is Tyler old enough to drink and drive? ',
  isOldEnoughToDrinkAndDrive(tyler)
);

function categorizedAcidity(pH) {
  if (pH >= 0 && pH < 7) {
    return 'anything from 0 to 7 is an "acid"';
  } else if (pH === 7) {
    return '7 is "nuetral"';
  } else if (pH > 7 && pH <= 14) {
    return 'anything from 14 down to 7 is "base"';
  } else {
    return 'invalid pH level';
  }
}

console.log('-1 pH? ', categorizedAcidity(-1));
console.log('14,0000001 pH? ', categorizedAcidity(14.0000001));
console.log('7 pH? ', categorizedAcidity(7));
console.log('2 pH? ', categorizedAcidity(2));
console.log('9 pH? ', categorizedAcidity(9));

function introduceWarnerBro(name) {
  switch (name) {
    case 'yakko':
      return 'We"re the warner brothers!';
    case 'wakko':
      return 'We"re the warner brothers!';
    case 'dot':
      return 'I"m cute~';
    case 'cody':
      return 'Goodnight everybody!';
    case 'minerva':
      return 'Goodnight everybody!';
    default:
      return 'Goodnight everybody!';
  }
}
console.log('yakko: ', introduceWarnerBro('yakko'));
console.log('wakko: ', introduceWarnerBro('wakko'));
console.log('dot: ', introduceWarnerBro('dot'));
console.log('cody: ', introduceWarnerBro('cody'));
console.log('minerva: ', introduceWarnerBro('minerva'));
console.log('anonymous: ', introduceWarnerBro('anonymous'));

function recommendMovie(genre) {
  switch (genre) {
    case 'action':
      return 'Dont Mess with the Zohan';
    case 'comedy':
      return 'Happy Gilmore';
    case 'horror':
      return 'Hubie Halloween';
    case 'drama':
      return 'Funny People';
    case 'musical':
      return 'Eight Crazy Nights';
    case 'sci-fi':
      return 'Little Nicky';
    default:
      return 'Genre not recognized. Choose between action, comedy, horror, drama, musical, and sci-fi';
  }
}

console.log('recommended action: ', recommendMovie('action'));
console.log('recommended comedy: ', recommendMovie('comedy'));
console.log('recommended horror: ', recommendMovie('horror'));
console.log('recommended drama: ', recommendMovie('drama'));
console.log('recommended musical: ', recommendMovie('musical'));
console.log('recommended sci-fi: ', recommendMovie('sci-fi'));
console.log('recommended dramedy: ', recommendMovie('dramedy'));
