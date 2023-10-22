import express from 'express';

const app = express();
app.use(express.json());
// const notes = JSON.parse('data.json');

app.get('api/notes', (req, res) => {
  console.log(req);
  console.log(res);
  // // console.log(notes);
  // const notesArray: any = [];
  // for (const key in notes) {
  //   notesArray.push(notes[key]);
  // }
  // res.json(notesArray);
});

app.listen(8080, () => console.log('app is listening on port 8080'));
