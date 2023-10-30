export function RegistrationFormUncontrolled() {
  function handleSubmit(e) {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const formObject = Object.fromEntries(formData);

    for (const [username, password] of Object.entries(formObject)) {
      console.log(`${username}: ${password}`);
    }
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input name="username"></input>
        </label>
        <label>
          Password:
          <input name="password"></input>
        </label>
        <button>Submit</button>
      </form>
    </>
  );
}
