const { ObjectID } = require('mongodb');
const { mongoose } = require('./../server/db/mongoose');
const { Todo } = require('./../server/models/todo');
const { User } = require('./../server/models/user');
// var id = '5a611a2ec9b9b8ec8995d9a111';
var id = '5a5eacdd59ccaa9a628266ab';
if (!ObjectID.isValid(id)) {
  console.error('User not valid');
}

// Todo.find({
//   _id: id,
// }).then(todos => {
//   console.log('Todos', todos);
// });

// Todo.findOne({
//   _id: id,
// }).then(todo => {
//   console.log('Todos', todo);
// });

// Todo.findById(id)
//   .then(todo => {
//     if (!todo) return console.error('Id not found');

//     console.log('Todos', todo);
//   })
//   .catch(e => {
//     console.error(e);
//   });

User.findById(id)
  .then(user => {
    if (!user) return console.error('User not found');

    console.log(JSON.stringify(user, undefined, 2));
  })
  .catch(e => {
    console.error(e);
  });
