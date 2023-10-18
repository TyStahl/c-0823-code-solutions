// import fs from 'node:fs/promises';

// const [, , ...args] = process.argv;
// console.log(args);

// async function readAny() {
//   for (let i = 0; i < args.length; i++) {
//     const contents = await fs.readFile(args[i], { encoding: 'utf8' });
//     console.log(contents);
//   }
// }

// try {
//   await readAny();
// } catch (e) {
//   console.log('error: ', e);
// }

import { readFile } from 'node:fs/promises';

const filenames = process.argv.slice(2);

try {
  const ps = filenames.map(
    async (filename) => await readFile(filename, 'utf8')
  );
  const contents = await Promise.all(ps);
  console.log(contents.join('\n'));
} catch (err) {
  console.log(err);
}
