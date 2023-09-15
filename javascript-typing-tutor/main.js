const $spanElements = document.querySelectorAll('span');

document.addEventListener('keydown', handleKeyDown);
console.log('Span Elements : ', $spanElements);

function handleKeyDown(event) {
  for (let i = 0; i < $spanElements.length; i++) {
    // const nextKey = $spanElements[i]
    // const rightKey = 'right';
    // const wrongKey= 'wrong';

    console.log(event);
    console.log(event.target);
  }
}
