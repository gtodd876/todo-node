const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) return console.log(`Unable to connect to mongodb server`);

  console.log(`Connected to MongoDB server`);

  db
    .collection('Users')
    .findOneAndDelete({ _id: new ObjectID('5a5e85b0a43b5a5c6a3d1715') })
    .then(result => {
      console.log(result);
    });

  // db
  //   .collection('Users')
  //   .deleteMany({ name: 'Todd' })
  //   .then(result => {
  //     console.log(result);
  //   });

  // db.close();
});
