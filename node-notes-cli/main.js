import { readFile, writeFile } from 'node:fs/promises';

async function readNotes() {
  const JSONdata = await readFile('data.json', 'utf8');
  const dataModel = await JSON.parse(JSONdata);
  console.log(dataModel);
}

async function writeNew() {
  const noteContent = process.argv.slice(2).join(' ');
  await writeFile('newest-note.txt', noteContent, 'utf8');
}

async function addtoNotes() {
  const newestNote = await readFile('newest-note.txt', 'utf8');
  let JSONdata = await readFile('data.json', 'utf8');
  const dataModel = await JSON.parse(JSONdata);
  dataModel.notes[dataModel.nextId.toString()] = newestNote;
  dataModel.nextId++;
  JSONdata = await JSON.stringify(dataModel, null, 2);
  await writeFile('data.json', JSONdata, 'utf8');
  await readNotes();
}

try {
  await readNotes();
  await writeNew();
  await addtoNotes();
} catch (error) {
  console.error(error);
  process.exit(1);
}
