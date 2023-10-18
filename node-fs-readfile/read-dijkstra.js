import fs from 'node:fs/promises';

async function readDijkstra() {
  const contents = await fs.readFile('./dijkstra.txt', { encoding: 'utf8' });
  console.log('Dijskstra says: ', contents);
}

try {
  await readDijkstra();
} catch (e) {
  console.log('error: ', e);
}
