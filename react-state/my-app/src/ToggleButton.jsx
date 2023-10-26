import { useState } from 'react';
import './ToggleButton.css';

function ToggleButton({ text, color }) {
  const [isClicked, setIsClicked] = useState(false);

  function handleClick() {
    console.log(isClicked);
    setIsClicked(true);
    console.log(isClicked);
  }

  {
    if (isClicked === true) {
      return (
        <button className={color} onClick={() => handleClick()}>
          {text}
        </button>
      );
    }
    if (isClicked === false) {
      return (
        <button className={color} onClick={() => handleClick()}>
          {text}
        </button>
      );
    }
  }
}
export default ToggleButton;
