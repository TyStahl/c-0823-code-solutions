const num1 = 10;
const num2 = 11;
const num3 = 12;

const maximumValue = Math.max(num1, num2, num3);
console.log('maximum Value: ', maximumValue);

const heroes = ['spiderman', 'wolverine', 'nightcrawler', 'hulk'];
let randomNumber = Math.random();
console.log('heroes: ', heroes);
console.log('randomNumber: ', randomNumber);

randomNumber = randomNumber * heroes.length;
const randomIndex = Math.floor(randomNumber);
console.log('randomIndex: ', randomIndex);

const randomHero = heroes[randomIndex];
console.log('random Hero: ', randomHero);

const library = [
  { title: 'Harry Potter', author: 'JK Rowling' },
  { title: 'Slaughterhouse Five', author: 'Kurt Vonnegetu' },
];
const lastBook = library.pop();
console.log('lastBook: ', lastBook);
const firstBook = library.shift();
console.log('firstBook', firstBook);
console.log('library: ', library);

const js = {
  title: 'Javascript for Impatient Programmers',
  author: 'Dr. Axel Rauschmayer',
};
const css = {
  title: 'CSS Secrets',
  author: 'Lea Verou',
};

library.push(js);
library.unshift(css);
library.splice(1, 1, js);

console.log('updated library: ', library);

const fullName = 'Tyler Stahl';
const firstAndLastName = fullName.split(' ');
console.log('first and last name: ', firstAndLastName);

const firstName = firstAndLastName[0];
const sayMyName = firstName.toUpperCase();
console.log('say my name: ', sayMyName);
