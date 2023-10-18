import { writeFile } from 'node:fs/promises';

try {
  await writeFile('random.txt', Math.random() + '/n', 'utf8');
} catch (e) {
  console.error(e);
  process.exit(1);
}
