const $hotbutton = document.querySelector('.hot-button');
const $clickcount = document.querySelector('.click-count');
let count = 0;

function counting(event) {
  count++;
  $clickcount.textContent = 'Clicks: ' + count;

  if (count >= 0 && count <= 4) {
    $hotbutton.className = 'hot-button cold';
  }
  if (count > 4 && count <= 7) {
    $hotbutton.className = 'hot-button cool';
  }
  if (count > 7 && count <= 10) {
    $hotbutton.className = 'hot-button tepid';
  }
  if (count > 10 && count <= 13) {
    $hotbutton.className = 'hot-button warm';
  }
  if (count > 13 && count <= 16) {
    $hotbutton.className = 'hot-button hot';
  } else if (count > 16) {
    $hotbutton.className = 'hot-button nuclear';
  }
}

$hotbutton.addEventListener('click', counting);
