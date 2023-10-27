// import { useState } from 'react'
import './App.css';
import ToggleButton from './ToggleButton';
import './ToggleButton.css';

function App() {
  // const [isClicked, setIsClicked] = useState(false);
  // function handleClick() {
  //   console.log(isClicked);
  //   setIsClicked(true);
  //   console.log(isClicked);
  // }
  return (
    <>
      <ToggleButton color="green" text="button1" />
      <ToggleButton color="red" text="button2" />
      <ToggleButton color="blue" text="button3" />
    </>
  );
}

export default App;
