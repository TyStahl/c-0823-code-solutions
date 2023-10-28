import { useState } from 'react';

export function RegistrationFormUncontrolled() {
  const { formState, setformState } = useState();
  Event.preventDefault();

  function handleSubmit() {
    setformState(FormData);
    console.log('formData: ', formState);
  }
  return (
    <>
      <form onSubmit={() => handleSubmit()}>
        <label>
          Username: <input></input>
        </label>
        <label>
          Password: <input></input>
        </label>
        <button type="submit">Submit</button>
      </form>
    </>
  );
}
