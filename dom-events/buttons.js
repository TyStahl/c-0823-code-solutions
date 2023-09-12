function handleClick(event) {
  console.log('Button Clicked');
  console.log(event);
  console.log(event.target);
}

const $clickbutton = document.querySelector('.click-button');

$clickbutton.addEventListener('click', handleClick);

function handleMouseover(event) {
  console.log('Button Hovered');
  console.log(event);
  console.log(event.target);
}
const $hoverbutton = document.querySelector('.hover-button');

$hoverbutton.addEventListener('mouseover', handleMouseover);

function handleDoubleClick(event) {
  console.log('Button Double-Clicked');
  console.log(event);
  console.log(event.target);
}

const $doubleclickbutton = document.querySelector('.double-click-button');

$doubleclickbutton.addEventListener('dblclick', handleDoubleClick);
