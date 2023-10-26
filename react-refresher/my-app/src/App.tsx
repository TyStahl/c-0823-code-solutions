import { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  function handleUpClick() {
    setCount(count + 1);
  }
  function handleDownClick() {
    setCount(count - 1);
  }

  return (
    <>
      <Button text="UP" onClick={handleUpClick} />
      <Button text="DOWN" onClick={handleDownClick} />
      <p>{count}</p>
    </>
  );
}

type ButtonProp = {
  text: string;
  onClick: () => void;
};

function Button({ text, onClick }: ButtonProp) {
  return (
    <>
      <button onClick={() => onClick()}>{text}</button>
    </>
  );
}

export default App;
