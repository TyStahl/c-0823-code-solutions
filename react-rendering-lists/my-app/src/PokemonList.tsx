type PokemonProps = { pokedex: Pokemon[] };
type Pokemon = {
  number: string;
  name: string;
};

export function PokemonList({ pokedex }: PokemonProps) {
  const pokemonList = pokedex.map((pokemon: Pokemon) => (
    <li key={pokemon.number}>{pokemon.name}</li>
  ));

  return <ul>{pokemonList}</ul>;
}
