import './App.css';

import { CarouselComponent } from './CarouselComponent';

const items = [
  'pikachu',
  'squirtle',
  'charmander',
  'bulbasaur',
  'heracross',
  'ashe ketchum',
];

function App() {
  return (
    <>
      <CarouselComponent items={items} />
    </>
  );
}

export default App;
