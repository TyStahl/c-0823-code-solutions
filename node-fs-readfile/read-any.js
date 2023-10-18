import fs from 'node:fs/promises';

const file = process.argv[2];
// console.log('argv: ', process.argv);
// console.log('file:', file);

async function readAny() {
  const contents = await fs.readFile(`./${file}`, { encoding: 'utf8' });
  console.log(`${file}: `, contents);
}

try {
  await readAny();
} catch (e) {
  console.log('error: ', e);
}
