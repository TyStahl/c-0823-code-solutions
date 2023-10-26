import { useState } from 'react';
import './App.css';
import './HotCSS.css';

function App() {
  return (
    <>
      <HotButton text="HOT BUTTON" />
      <Instuctions text="CLICK THE BUTTON" />
    </>
  );
}

type HotProps = {
  text: string;
};
function HotButton({ text }: HotProps) {
  const [count, setCount] = useState(3);
  const hotCount = Math.floor(count / 3);
  let color = 'blue';
  switch (hotCount) {
    case 1:
      color = 'blue';
      break;
    case 2:
      color = 'purple';
      break;
    case 3:
      color = 'red';
      break;
    case 4:
      color = 'orange';
      break;
    case 5:
      color = 'yellow';
      break;
    case 6:
      color = 'white';
      break;
  }
  return (
    <button
      className={color}
      onClick={() => setCount(count >= 18 ? 3 : count + 1)}>
      {text}
    </button>
  );
}

type InstuctionsProp = {
  text: string;
};
function Instuctions({ text }: InstuctionsProp) {
  return <p>{text}</p>;
}

export default App;
