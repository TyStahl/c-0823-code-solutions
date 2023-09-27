const $userList = document.querySelector('#user-list');

const xhr = new XMLHttpRequest();
xhr.open('GET', 'https://jsonplaceholder.typicode.com/users');
xhr.responseType = 'json';
xhr.addEventListener('load', function () {
  console.log(xhr.status);
  console.log(xhr.response);
  for (let i = 0; i < this.response.length; i++) {
    const $userLi = document.createElement('li');
    $userLi.textContent = this.response[i].name;
    $userList.append($userLi);
  }
});
xhr.send();
