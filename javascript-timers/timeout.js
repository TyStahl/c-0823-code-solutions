setTimeout(changeMessage, 2000);

function changeMessage() {
  const $message = document.querySelector('.message');
  $message.textContent = 'Hello There';
}
