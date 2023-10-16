import { useState } from 'react';

function ToggleButton({ text, color }) {
  const [isClicked, setIsClicked] = useState(false);
  const [buttonColor, setbuttonColor] = useState('red');
  const [buttonText, setbuttonText] = useState('unclicked');

  function handleClick() {
    setIsClicked(!isClicked);
    if (isClicked) {
      setbuttonColor(color);
      setbuttonText(text);
    } else {
      setbuttonColor(color);
      setbuttonText(text);
    }
    console.log(isClicked);
  }

  {
    if (isClicked) {
      return (
        <button onClick={() => handleClick()} className={`${buttonColor}`}>
          {buttonText}
        </button>
      );
    } else {
      return (
        <button onClick={() => handleClick()} className={`${buttonColor}`}>
          {buttonText}
        </button>
      );
    }
  }
}
export default ToggleButton;
