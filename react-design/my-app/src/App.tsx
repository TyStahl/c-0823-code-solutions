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
      <BannerDisplay items={items} index={index} />
      <NextPrevButton text="NEXT" onClick={handleNextIndex} />
      <div className="row">
        <BannerSelections
          index={index}
          num={0}
          onCustomClick={() => setIndex(0)}
        />
        <BannerSelections
          index={index}
          num={1}
          onCustomClick={() => setIndex(1)}
        />
        <BannerSelections
          index={index}
          num={2}
          onCustomClick={() => setIndex(2)}
        />
        <BannerSelections
          index={index}
          num={3}
          onCustomClick={() => setIndex(3)}
        />
        <BannerSelections
          index={index}
          num={4}
          onCustomClick={() => setIndex(4)}
        />
        <BannerSelections
          index={index}
          num={5}
          onCustomClick={() => setIndex(5)}
        />
      </div>
      <NextPrevButton text="PREV" onClick={handlePrevIndex} />
    </>
  );
}

export default App;
