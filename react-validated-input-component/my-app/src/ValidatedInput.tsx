import { FormEvent, useState } from 'react';
import { FaCheck } from 'react-icons/fa';
import { FaTimes } from 'react-icons/fa';
import './ValidatedInput.css';

export function ValidatedInput() {
  const [password, setPassword] = useState('');
  let psIsValid = false;
  validatePassword();
  function handleSubmit(e: FormEvent) {
    e.preventDefault();
  }

  function validatePassword() {
    if (password.length >= 8) {
      psIsValid = true;
    } else {
      psIsValid = false;
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          Password:
          <input
            placeholder="enter password"
            value={password ?? ''}
            onChange={(e) => {
              setPassword(e.target.value);
            }}></input>
        </label>
        <button type="submit">Submit</button>
        <ValidOrNot password={password} psIsValid={psIsValid} />
      </form>
    </>
  );
}

type ValidorNotProps = {
  password: string;
  psIsValid: boolean;
};

function ValidOrNot({ password, psIsValid }: ValidorNotProps) {
  if (!password) {
    return (
      <span className="is-invalid">
        <FaTimes />
        <p>A password is required </p>
      </span>
    );
  }
  if (psIsValid) {
    return (
      <span className="is-valid">
        <FaCheck />
      </span>
    );
  } else {
    return (
      <span className="is-invalid">
        <FaTimes />
        <p>Password must be at least 8 characters</p>
      </span>
    );
  }
}
