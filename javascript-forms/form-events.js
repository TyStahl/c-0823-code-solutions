const $userName = document.querySelector('#user-name');
const $userEmail = document.querySelector('#user-email');
const $userMessage = document.querySelector('#user-message');

function handleFocus(event) {
  console.log('focus');
  console.log(event.target.name);
}
$userName.addEventListener('focus', handleFocus);

function handleBlur(event) {
  console.log('blur');
  console.log(event.target.name);
}

$userEmail.addEventListener('blur', handleBlur);

function handleInput(event) {
  console.log(event.target.name);
  console.log(event.target.value);
}

$userMessage.addEventListener('input', handleInput);
