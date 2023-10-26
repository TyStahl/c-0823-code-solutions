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
      {/* <ToggleButton color="green" {isClicked = {text="true"} && {text="false"}} /> */}
      <ToggleButton color="red" text="false" />
      <ToggleButton color="blue" text="false" />
    </>
  );
}

export default App;
