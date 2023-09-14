const $taskList = document.querySelector('.task-list');
$taskList.addEventListener('click', handleClick);

function handleClick(event) {
  console.log('the event is', event);
  console.log('the event target it', event.target);
  console.log('the event targets tag name is', event.target.tagName);

  const $nearElement = event.target.closest('.task-list-item');

  if (event.target.matches('button')) {
    console.log('closest task-list-item ancestor element is the', $nearElement);

    $nearElement.remove();
  }
}
