const { MongoClient } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) return console.log(`Unable to connect to mongodb server`);

  console.log(`Connected to MongoDB server`);

  // db
  //   .collection('Todos')
  //   .find({ completed: false })
  //   .toArray()
  //   .then(
  //     docs => {
  //       console.log('Todos');
  //       console.log(JSON.stringify(docs, undefined, 2));
  //     },
  //     err => {
  //       console.error('Unable to fetch todos', err);
  //     }
  //   );
  // db
  //   .collection('Todos')
  //   .find()
  //   .count()
  //   .then(
  //     count => {
  //       console.log('Todos');
  //       console.log(`Todos count: ${count}`);
  //     },
  //     err => {
  //       console.error('Unable to fetch todos', err);
  //     }
  //   );
  db
    .collection('Users')
    .find({ name: 'Mike' })
    .toArray()
    .then(
      docs => {
        console.log(JSON.stringify(docs, undefined, 2));
      },
      err => {
        console.error('Unable to fetch document');
      }
    );
  // db.close();
});
