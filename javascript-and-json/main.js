const books = [
  {
    isbn: '9780394800011',
    title: 'Dr. Suess',
    author: 'The Cat in the Hat',
  },
  {
    isbn: '9780808524519',
    title: 'Green Eggs and Ham',
    author: 'Dr. Suess',
  },
  {
    isbn: '9780394823379',
    title: 'The Lorax',
    author: 'Dr. Sueuss',
  },
];
console.log('Books Object Literal: ', typeof books, books);

const jsonBooks = JSON.stringify(books);
console.log('JSON Books: ', typeof jsonBooks, jsonBooks);

const student = '{"numberId":"1111","name":"Bobby Boy"}';
console.log('JSON Student: ', typeof student, student);

const jsonStudent = JSON.parse(student);
console.log('Students Object Literal: ', typeof jsonStudent, jsonStudent);
