const $modalButton = document.querySelector('.modal-button');
const $modalBox = document.querySelector('.modal');
const $modalDiv = document.querySelector('.modal-div');

$modalButton.addEventListener('click', openModal);

function openModal() {
  $modalBox.className = 'modal relative';
  $modalDiv.className = 'modal-div fixed';
  console.log($modalButton);
  console.log($modalBox);
}

const $noButton = document.querySelector('.no-button');
$noButton.addEventListener('click', closeModal);

function closeModal() {
  $modalBox.className = 'modal hidden';
  $modalDiv.className = 'modal-div';
  console.log($noButton);
}
