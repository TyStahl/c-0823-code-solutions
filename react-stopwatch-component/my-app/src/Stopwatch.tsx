import { useState } from 'react';
import { FaPlay, FaPause } from 'react-icons/fa';

const playIcon = <FaPlay />;
const pauseIcon = <FaPause />;

export function Stopwatch() {
  const [elapsedTime, setElapsedTime] = useState(0);
  const [activeIntervalId, setActiveIntervalId] = useState<NodeJS.Timeout>();

  const isOn = activeIntervalId ? true : false;

  function handleTime() {
    if (isOn) {
      clearInterval(activeIntervalId);
      setActiveIntervalId(undefined);
    } else {
      const timer = setInterval(() => {
        setElapsedTime((prev) => prev + 1);
      }, 500);
      setActiveIntervalId(timer);
    }
  }
  function handleReset() {
    if (!isOn) {
      setElapsedTime(0);
    }
  }

  return (
    <div>
      <div onClick={() => handleReset()} className="circle">
        {elapsedTime}
      </div>
      <div onClick={() => handleTime()}>{isOn ? pauseIcon : playIcon}</div>
    </div>
  );
}
