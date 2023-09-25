const $heading = document.querySelector('.countdown-display');
let countdownID = null;
let i = 4;

function countDown() {
  i--;
  if (i > 0) {
    $heading.textContent = i;
  } else {
    $heading.textContent = '~Earth Beeeelooowww Us~';
    clearInterval(countdownID);
  }
}

countdownID = setInterval(countDown, 500);
