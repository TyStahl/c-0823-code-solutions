import express from 'express';
import { readFile } from 'node:fs/promises';

const app = express();
app.use(express.json());
app.listen(8080, () => console.log('app is listening on port 8080'));

// const data: any = {};
// console.log(data);

async function readData() {
  const rData = await readFile('data.json', 'utf-8');
  const data = JSON.parse(rData);
  return data;
}

// async function writeData(data: any) {
//   await writeFile('data.json', JSON.stringify(data, null, 2));
// }

app.get('/api/notes', async (req, res) => {
  console.log(req.method);
  const notesArr = [];
  const journal = await readData();
  for (const key in journal.notes) {
    notesArr.push(journal.notes[key]);
  }
  console.log('journal', journal);
  console.log('notesArr', notesArr);
  res.status(200).json(notesArr);
});

// app.get('/api/notes/:id', (req, res) => {
//   console.log(req.method);
//   const notes: any = readData();
//   const id: any = req.params.id;
//   res.status(200).json(notes[id]);
// });
