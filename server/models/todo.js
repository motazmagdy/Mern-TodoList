// Import Mongoose
const mongoose = require('mongoose');

// Defining Todo Schema
const todoSchema = new mongoose.Schema({
    title: String,
    body:String
  },
  {collection: 'todos'}
  );

// Creating Model from Schema
const Todo = mongoose.model('Todo', todoSchema);

// Exporting Model 
module.exports = Todo