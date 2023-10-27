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
  const [value, setvalue] = useState(3);
  const hotvalue = Math.floor(value / 3);
  let color = 'blue';
  switch (hotvalue) {
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
      onClick={() => setvalue(value >= 18 ? 3 : value + 1)}>
      {text}
    </button>
  );
}

type InstructionProps = {
  text: string;
};
function Instuctions({ text }: InstructionProps) {
  return <p>{text}</p>;
}

export default App;
