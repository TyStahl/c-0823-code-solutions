const $lightblub = document.querySelector('.light');
const $container = document.querySelector('.container');

let on = true;

function counter(event) {
  if (on === true) {
    $lightblub.className = 'light shadow sunny';
    $container.className = 'container day';
    console.log(on);
    on = false;
    console.log($lightblub.className);
  } else if (on === false) {
    $lightblub.className = 'light shadow moony';
    $container.className = 'container night';
    console.log(on);
    on = true;
    console.log($lightblub.className);
  }
}

$lightblub.addEventListener('click', counter);
