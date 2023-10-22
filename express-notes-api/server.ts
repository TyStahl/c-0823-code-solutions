import express from 'express';
import { readFile } from 'node:fs/promises';

const app = express();
app.use(express.json());
app.listen(8080, () => console.log('app is listening on port 8080'));

// type Notes = {
//   id: number;
//   content: string;
// };

const data: any = {};
console.log(data);

async function readData() {
  const rData = await readFile('data.json', 'utf-8');
  return JSON.parse(rData);
}

// async function writeData(data: any) {
//   await writeFile('data.json', JSON.stringify(data, null, 2));
// }

app.get('/api/notes/:id', (req, res) => {
  if (req.path === '/api/notes') {
    const notes: any = readData();
    res.status(200).send(notes);
    return;
  }
  if (req.path === '/api/notes/:id') {
    const notes: any = readData();
    const notesArr: any = [];
    for (const key in notes) {
      notesArr.push(notes[key]);
    }
  }
  console.log(req.method);
  res.json('data.json');
});
