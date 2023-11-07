async function fetchUsers() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    if (!response.ok) {
      throw new Error(`response not ok ${response.status}`);
    }
    const users = await response.json();
    console.log(users);
  } catch (e) {
    console.error(e);
  }
}

async function fetchPokemon() {
  try {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon/214');
    if (!response.ok) {
      throw new Error(`response not ok ${response.status}`);
    }
    const favPoke = await response.json();
    console.log(favPoke);
  } catch (e) {
    console.error(e);
  }
}

fetchUsers();
fetchPokemon();
