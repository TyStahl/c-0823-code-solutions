import { useState } from 'react';
import './App.css';
import {
  BannerDisplay,
  NextPrevButton,
  BannerSelections,
} from './RotatingBanner';

function App() {
  const [index, setIndex] = useState<number>(0);

  function handleNextIndex() {
    setIndex(index + 1);
    if (index === 5) {
      setIndex(0);
    }
  }

  function handlePrevIndex() {
    setIndex(index - 1);
    if (index === 0) {
      setIndex(5);
    }
  }
  const items = [
    'Aardvark',
    'Bengal',
    'Caterpillar',
    'Dromedary',
    'Elephant',
    'Ferret',
  ];

  return (
    <>
      <p>{index}</p>
      <BannerDisplay items={items} index={index} />
      <NextPrevButton text="NEXT" onClick={handleNextIndex} />
      <BannerSelections index={index} />
      <NextPrevButton text="PREV" onClick={handlePrevIndex} />
    </>
  );
}

export default App;
