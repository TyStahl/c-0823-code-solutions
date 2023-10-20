import express from 'express';

// type Grade = {
//   id: number;
//   name: string;
//   course: string;
//   score: number;
// };

// const grades: Record<number, Grade> = {
//   12: {
//     id: 12,
//     name: 'Tim Berners-Lee',
//     course: 'HTML',
//     score: 95,
//   },
//   47: {
//     id: 47,
//     name: 'Brendan Eich',
//     course: 'JavaScript',
//     score: 100,
//   },
//   273: {
//     id: 273,
//     name: 'Håkon Wium Lie',
//     course: 'CSS',
//     score: 92,
//   },
// };

const app = express();

app.use((req, res) => {
  console.log(req.method);
  res.send('Hello World!!!');
});

app.listen(8080, () => console.log('app is listening on port 8080'));
