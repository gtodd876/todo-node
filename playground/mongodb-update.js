const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) return console.log(`Unable to connect to mongodb server`);

  console.log(`Connected to MongoDB server`);

  db
    .collection('Users')
    .findOneAndUpdate(
      { _id: new ObjectID('5a5df237e920b75bcd9da3c9') },
      { $inc: { age: -1 } },
      { returnOriginal: false }
    )
    .then(result => {
      console.log(result);
    });

  // db.close();
});
