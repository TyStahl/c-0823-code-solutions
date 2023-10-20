import express from 'express';

type Grade = {
  id: number;
  name: string;
  course: string;
  score: number;
};

const grades: Record<number, Grade> = {
  12: {
    id: 12,
    name: 'Tim Berners-Lee',
    course: 'HTML',
    score: 95,
  },
  47: {
    id: 47,
    name: 'Brendan Eich',
    course: 'JavaScript',
    score: 100,
  },
  273: {
    id: 273,
    name: 'Håkon Wium Lie',
    course: 'CSS',
    score: 92,
  },
};

const app = express();

app
  .route('/api/grades/:id')
  .get((req, res) => {
    console.log(req.method);
    const gradesArray: any = [];
    for (const key in grades) {
      gradesArray.push(grades[key]);
    }
    res.json(gradesArray);
  })

  .delete((req, res) => {
    const id = req.params.id;
    if (!grades[id]) {
      res.sendStatus(404);
    }
    delete grades[id];
    res.sendStatus(204);
  });

// app.get('/api/grades', (req, res) => {
//   console.log(req.method);
//   const gradesArray: any = [];
//   for (const key in grades) {
//     gradesArray.push(grades[key]);
//   }
//   res.json(gradesArray);
// });

// app.delete('/api/grades/:id', (req, res) => {
//   const id = req.params.id;
//   if (!grades[id]) {
//     res.sendStatus(404);
//   }
//   delete grades[id];
//   res.sendStatus(204);
// });

app.listen(8080, () => console.log('app is listening on port 8080'));
