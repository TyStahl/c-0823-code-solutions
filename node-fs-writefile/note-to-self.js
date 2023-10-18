import { writeFile } from 'node:fs/promises';

const note = process.argv.slice(2);

async function writeNotes() {
  await writeFile('note.txt', note.join(' '), 'utf-8');
}

try {
  await writeNotes();
} catch (e) {
  console.log(e);
}
