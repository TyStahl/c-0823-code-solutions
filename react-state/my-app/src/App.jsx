// import { useState } from 'react'
import './App.css';
import ToggleButton from './ToggleButton';
import './ToggleButton.css';

// function handleClick() {
//   const [isClicked, setIsClicked] = useState(false);
//   setIsClicked(true);
// }

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <ToggleButton color="text" text="${buttonText}" />
      <ToggleButton color="red" text="unclicked" />
      <ToggleButton color="white" text="clicked" />
    </>
  );
}

export default App;
