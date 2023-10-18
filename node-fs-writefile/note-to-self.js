import { writeFile } from 'node:fs/promises';

const contents = process.argv.slice(2);

async function writeNotes() {
  await writeFile('note.txt', contents.join(' ') + '/n', 'utf-8');
}

try {
  await writeNotes();
} catch (e) {
  console.log(e);
}
