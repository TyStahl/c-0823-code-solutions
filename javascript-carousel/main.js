const $pokemon = document.querySelector('.pokemon');
const $circle1 = document.querySelector('#1');
const $circle2 = document.querySelector('#2');
const $circle3 = document.querySelector('#3');
const $circle4 = document.querySelector('#4');
const $circle5 = document.querySelector('#5');

let pokemonid = 1;
function changePokemon() {
  pokemonid++;
  switch (pokemonid) {
    case 1:
      $pokemon.setAttribute('src', 'images/001.png');
      $circle1.setAttribute('class', 'fa-solid fa-circle');
      break;
    case 2:
      $pokemon.setAttribute('src', 'images/004.png');
      $circle2.setAttribute('class', 'fa-solid fa-circle');
      break;
    case 3:
      $pokemon.setAttribute('src', 'images/007.png');
      $circle3.setAttribute('class', 'fa-solid fa-circle');
      break;
    case 4:
      $pokemon.setAttribute('src', 'images/025.png');
      $circle4.setAttribute('class', 'fa-solid fa-circle');
      break;
    case 5:
      $pokemon.setAttribute('src', 'images/039.png');
      $circle5.setAttribute('class', 'fa-solid fa-circle');
      pokemonid = 1;
      break;
  }
}
setInterval(changePokemon, 1500);
