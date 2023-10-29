// import { useState } from 'react';

// export function RegistrationFormUncontrolled() {
//   const { formState, setformState } = useState();

//   function handleSubmit(e: KeyboardEvent) {
//     e.preventDefault();
//     const form: null | undefined | HTMLFormElement = e.target;
//     const formContent = new FormData(form);
//     setformState(Object.fromEntries(formContent.entries()));
//     console.log(formState);
//   }
//   return (
//     <>
//       <form onSubmit={() => handleSubmit}>
//         <label>
//           Username: <input defaultValue="username"></input>
//         </label>
//         <label>
//           Password: <input defaultValue="password"></input>
//         </label>
//         <button type="submit">Submit</button>
//       </form>
//     </>
//   );
// }
