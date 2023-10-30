import { useState } from 'react';

export function RegistrationFormControlled() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    console.log('username', username);
    console.log('password', password);
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input
            onChange={(e) => {
              e.preventDefault();
              setUsername(e.target.value);
            }}
            name="username"></input>
        </label>
        <label>
          Password:
          <input
            onChange={(e) => {
              e.preventDefault();
              setPassword(e.target.value);
            }}
            name="password"></input>
        </label>
        <button>Submit</button>
      </form>
    </>
  );
}
