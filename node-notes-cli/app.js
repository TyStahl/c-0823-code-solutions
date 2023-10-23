import { readFile, writeFile } from 'node:fs/promises';

const operator = process.argv[2];

const JSONdata = await readFile('data.json', 'utf8');
const dataModel = JSON.parse(JSONdata);

async function readNotes() {
  for (const key in dataModel.notes) {
    console.log(`${key} : ${dataModel.notes[key]}`);
  }
}

async function writeNew() {
  const noteContent = process.argv.slice(3).join(' ');
  await writeFile('newest-note.txt', noteContent, 'utf8');
  const newestNote = await readFile('newest-note.txt', 'utf8');

  /* This is unusual. You write the file and then read it right back in again? Why not just use noteContent below? */
  dataModel.notes[dataModel.nextId.toString()] = newestNote;
  dataModel.nextId++;
  const newJSONdata = await JSON.stringify(dataModel, null, 2);
  await writeFile('data.json', newJSONdata, 'utf8');
  readNotes();
}

async function updateNote() {
  const noteId = process.argv[3].toString();
  const updatedNote = process.argv.slice(4).join(' ');
  dataModel.notes[noteId] = updatedNote;
  const newJSONdata = await JSON.stringify(dataModel, null, 2);
  await writeFile('data.json', newJSONdata, 'utf8');
  readNotes();
}

async function deleteNote() {
  const noteId = process.argv[3].toString();
  for (const key in dataModel.notes) {
    if (key === noteId) {
      delete dataModel.notes[key];
    }
  }
  const newJSONdata = await JSON.stringify(dataModel, null, 2);
  await writeFile('data.json', newJSONdata, 'utf8');
  readNotes();
}

try {
  switch (operator) {
    case 'read':
      await readNotes();
      break;
    case 'write':
      await writeNew();
      break;
    case 'update':
      await updateNote();
      break;
    case 'delete':
      await deleteNote();
      break;
    default:
      throw new Error('unkown operator');
  }
} catch (error) {
  console.error(error.message);
  process.exit(1);
}
