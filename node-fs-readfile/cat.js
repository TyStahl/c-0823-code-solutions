import fs from 'node:fs/promises';

const [, , ...args] = process.argv;
console.log(args);

async function readAny() {
  for (let i = 0; i < args.length; i++) {
    const contents = await fs.readFile(args[i], { encoding: 'utf8' });
    console.log(contents);
  }
}

try {
  await readAny();
} catch (e) {
  console.log('error: ', e);
}
