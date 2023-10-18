import takeAChance from './take-a-chance.js';
takeAChance('Tyler')
  .then((value) => console.log(value))
  .catch((error) => console.log(error.message));
// .catch((reject) => console.log('failure'));
