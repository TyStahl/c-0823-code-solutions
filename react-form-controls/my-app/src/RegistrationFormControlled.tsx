import { FormEvent, useState } from 'react';

export function RegistrationFormControlled() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    console.log('username: ', username);
    console.log('password: ', password);
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input
            onChange={(e) => setUsername(e.target.value)}
            name="username"></input>
        </label>
        <label>
          Password:
          <input
            onChange={(e) => setPassword(e.target.value)}
            name="password"></input>
        </label>
        <button>Submit</button>
      </form>
    </>
  );
}
