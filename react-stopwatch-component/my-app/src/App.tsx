// import { useState } from 'react';
import './App.css';

function App() {
  // const [time, setTime] = useState(0);
  // const [isOn, setIsOn] = useState(false);
  return (
    <>
      <Stopwatch time={'time'} />
      <StartPauseButton />
    </>
  );
}

export default App;

type StopwatchProps = {
  time: string;
};

function Stopwatch({ time }: StopwatchProps) {
  return <div className="circle">{time}</div>;
}

function StartPauseButton() {
  return <button>stop/start</button>;
}
