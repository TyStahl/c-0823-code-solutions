import './App.css';

import { CarouselComponent } from './CarouselComponent';

const items = [
  'fushiguro.webp',
  'inumaki.webp',
  'itadori.webp',
  'kugisaki.webp',
  'panda.webp',
  'zen-in.webp',
];

function App() {
  return <CarouselComponent items={items} />;
}

export default App;
