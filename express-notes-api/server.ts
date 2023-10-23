import express from 'express';
import { readFile, writeFile } from 'node:fs/promises';

const app = express();
app.use(express.json());
app.listen(8080, () => console.log('app is listening on port 8080'));

async function readData() {
  const rData = await readFile('data.json', 'utf-8');
  const data = JSON.parse(rData);
  return data;
}

async function writeData(data: any) {
  await writeFile('data.json', JSON.stringify(data, null, 2), 'utf8');
}

app.get('/api/notes', async (req, res) => {
  console.log(req.method);
  const notesArr = [];
  const journal = await readData();
  for (const key in journal.notes) {
    notesArr.push(journal.notes[key]);
  }
  res.status(200).json(notesArr);
});

app.get('/api/notes/:id', async (req, res) => {
  try {
    console.log(req.method);
    const journal = await readData();
    const id: number = Number(req.params.id);
    if (id < 0) {
      res
        .status(400)
        .json({ error: id + ' invalid, must be a positive integer' });
      return;
    }
    if (!journal.notes[id]) {
      res
        .status(404)
        .json({ error: 'note with id ' + id + ' cannot be found' });
      return;
    }
    res.status(200).json(journal.notes[id]);
  } catch (error) {
    res.send(500).json({ error: 'an unexpected error occured' });
  }
});

app.post('/api/notes', async (req, res) => {
  try {
    console.log(req.method);
    let journal = await readData();
    const { content } = req.body;
    if (!content) {
      res.status(400).send({ error: 'content is a required field' });
      return;
    }
    const newEntry = {
      id: journal.nextId,
      content,
    };
    journal.notes[journal.nextId++] = newEntry;
    // const newNotes = await JSON.stringify(journal, null, 2);
    // journal = await writeFile('data.json', newNotes, 'utf8');
    journal = await writeData(journal);
    res.status(201).json(newEntry);
  } catch (error) {
    res.status(500).json({ error: 'an unexpected error occured' });
  }
});

app.put('/api/notes/:id', async (req, res) => {
  try {
    console.log(req.method);
    let journal = await readData();
    const id = Number(req.params.id);
    const { content } = req.body;
    if (id < 0) {
      res
        .status(400)
        .json({ error: id + ' invalid, must be a positive integer' });
      return;
    }
    if (!journal.notes[id]) {
      res
        .status(404)
        .json({ error: 'note with id ' + id + ' cannot be found' });
      return;
    }
    journal.notes[id].content = content;
    res.status(200).json(journal.notes[id]);
    journal = await writeData(journal);
  } catch (error) {
    res.send(500).json({ error: 'an unexpected error has occured' });
  }
});

app.delete('/api/notes/:id', async (req, res) => {
  try {
    console.log(req.method);
    let journal = await readData();
    const id = Number(req.params.id);
    if (id < 0) {
      res
        .status(400)
        .json({ error: id + ' invalid, must be a positive integer' });
      return;
    }
    if (!journal.notes[id]) {
      res
        .status(404)
        .json({ error: 'note with id ' + id + ' cannot be found' });
      return;
    }
    delete journal.notes[req.params.id];
    res.status(200).send();
    journal = await writeData(journal);
  } catch (error) {
    res.send(500).json({ error: 'an unexpected error has occured' });
  }
});
