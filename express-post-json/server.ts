import express from 'express';

type Grade = {
  id: number;
  name: string;
  course: string;
  score: number;
};

const grades: Record<number, Grade> = {};
let nextId: number = 1;

const app = express();
const jsonapp = express.json();
app.use(jsonapp);

app.get('/api/grades', (req, res) => {
  console.log(req.method);
  const gradesArray: any = [];
  for (const key in grades) {
    gradesArray.push(grades[key]);
  }
  res.json(gradesArray);
});

app.post('/api/grades', (req, res) => {
  console.log(req.body);
  const { name, course, score } = req.body;
  if (!name || !course || score === undefined) {
    res.status(400).send();
    return;
  }
  const ob: Grade = {
    id: nextId,
    name,
    course,
    score,
  };
  grades[nextId++] = ob;
  console.log(grades);
  res.status(201).json(ob);
});

app.listen(8080, () => console.log('app is listening on port 8080'));
