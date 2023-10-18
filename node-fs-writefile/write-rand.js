import { writeFile } from 'node:fs/promises';

async function randomNumFile() {
  const data = Math.random().toString() + '/n';
  await writeFile('random.txt', data, 'utf-8');
}

try {
  await randomNumFile();
} catch (e) {
  console.log(e);
}
