const $contactForm = document.querySelector('#contact-form');

$contactForm.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const nameValue = $contactForm.elements.name.value;
  console.log(nameValue);
  const emailValue = $contactForm.elements.email.value;
  console.log(emailValue);
  const messageValue = $contactForm.elements.message.value;
  console.log(messageValue);

  const objectData = {
    name: nameValue,
    email: emailValue,
    message: messageValue,
  };
  console.log(objectData);
}

console.dir($contactForm);

// const emailValue = $contactForm.;
// const messageValue = $contactForm.#contactForm.
