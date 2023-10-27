import { useState } from 'react';
import './ToggleSwitch.css';

export function ToggleSwitch() {
  const [isOn, setIsOn] = useState(false);

  return (
    <div className={isOn ? 'on' : 'off'}>
      <button onClick={() => setIsOn(!isOn)}>{isOn ? 'On' : 'Off'}</button>
    </div>
  );
}
