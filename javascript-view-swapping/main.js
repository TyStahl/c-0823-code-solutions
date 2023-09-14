const $tabContainer = document.querySelector('.tab-container');
const $tab = document.querySelectorAll('.tab');
const $view = document.querySelectorAll('.view');
$tabContainer.addEventListener('click', handleClick);

function handleClick(event) {
  if (event.target.matches('.tab')) {
    for (let i = 0; i < $tab.length; i++) {
      if ($tab[i] === event.target) {
        $tab[i].className = 'tab active';
      } else {
        $tab[i].className = 'tab';
      }
    }

    const viewData = event.target.getAttribute('data-view');
    for (let i = 0; i < $view.length; i++) {
      if ($view[i].getAttribute('data-view') !== viewData) {
        $view[i].className = 'view hidden';
      } else {
        $view[i].className = 'view';
      }
    }
  }
}
