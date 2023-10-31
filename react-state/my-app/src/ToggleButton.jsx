import { useState } from 'react';
import './ToggleButton.css';

function ToggleButton({ text, color }) {
  const [isClicked, setIsClicked] = useState(false);

  function handleClick() {
    console.log(isClicked);
    setIsClicked(!isClicked);
    console.log(isClicked);
  }
  return (
    <button className={isClicked ? color : ''} onClick={() => handleClick()}>
      {text}
    </button>
  );
}
export default ToggleButton;
