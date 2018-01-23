const { ObjectID } = require('mongodb');
const { mongoose } = require('./../server/db/mongoose');
const { Todo } = require('./../server/models/todo');
const { User } = require('./../server/models/user');

// Todo.remove({}).then(result => {
//   console.log(result);
// });

//Todo.findOneAndRemove returns remove document

Todo.findByIdAndRemove('5a6733d8253f0a4215808943').then(todo => {
  console.log(todo);
});
