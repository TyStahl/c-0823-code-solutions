type Pokemon = {
  number: string;
  name: string;
};

type Pokedex = Pokemon[];

const pokedex: Pokedex = [
  { number: '001', name: 'Bulbasaur' },
  { number: '004', name: 'Charmander' },
  { number: '007', name: 'Squirtle' },
  { number: '025', name: 'Pikachu' },
  { number: '039', name: 'Jigglypuff' },
];

export function PokemonList() {
  const pokemonList = pokedex.map((pokemon: Pokemon) => (
    <li key={pokemon.number}>{pokemon.name}</li>
  ));

  return <ul>{pokemonList}</ul>;
}
