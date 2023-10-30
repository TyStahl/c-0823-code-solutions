import './App.css';
import {
  BannerDisplay,
  NextButton,
  BannerSelections,
  PrevButton,
} from './RotatingBanner';

function App() {
  // const items = [
  //   'Aardvark',
  //   'Bengal',
  //   'Caterpillar',
  //   'Dromedary',
  //   'Elephant',
  //   'Ferret',
  // ];

  return (
    <>
      <BannerDisplay item="ardvark" />
      <NextButton />
      <BannerSelections />
      <PrevButton />
    </>
  );
}

export default App;
