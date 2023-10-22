import express from 'express';

const app = express();
app.use(express.json());

app.get('/api/notes/:id', (req, res) => {
  // const notesArray: any = [];
  // for (const key in notes) {
  //   notesArray.push(notes[key]);
  // }
  console.log('user can get list of notes');
  console.log('user can get a single note by id');
  console.log(req.method);
  res.json('data.json');
});

app.listen(8080, () => console.log('app is listening on port 8080'));
