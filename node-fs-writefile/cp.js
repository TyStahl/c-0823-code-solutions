import { writeFile, readFile } from 'node:fs/promises';

const [, , source, dest] = process.argv;

try {
  const sourceContent = await readFile(source);
  await writeFile(dest, sourceContent);
} catch (e) {
  console.error(e);
}

// const note = process.argv.slice(2);

// async function readNote() {
//   const old = await readFile(note, 'utf8');
// }

// async function writeNotes() {
//   await writeFile('copy-of-note.txt', old, 'utf-8');
// }

// try {
//   await readNotes();
//   await writeNotes();
// } catch (e) {
//   console.log(e);
// }
