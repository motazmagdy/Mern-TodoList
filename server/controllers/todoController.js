const mongoose = require("mongoose");
const Todo = require("../models/todo");

// Get all todos
const GetAllTodos = async (req, res) => {
  const todos = await Todo.find();
  res.json({ todos });
};

// Get Specific todo with Id
const GetSingleTodo = async (req, res) => {
  const todoId = req.params.id;
  const todo = await Todo.findById(todoId);
  res.json({ todo });
};

// Add new Todo
const AddNewTodo = async (req, res) => {
  const { title, body } = req.body;
  const todo = await Todo.create({
    title,
    body,
  });
  res.json({ todo });
};

// Edit todo
const EditTodo = async (req, res) => {
  const todoId = req.params.id;
  const { title, body } = req.body;
  await Todo.findByIdAndUpdate(todoId, {
    title,
    body,
  });
  const newTodo = await Todo.findById(todoId);
  res.json({ todo: newTodo });
};

// Delete todo
const DeleteTodo = async (req, res) => {
  const todoId = req.params.id;
  await Todo.findByIdAndDelete(todoId);
  res.json({ success: true });
};

const Controllers = {
  GetAllTodos,
  GetSingleTodo,
  AddNewTodo,
  EditTodo,
  DeleteTodo,
};

module.exports = Controllers;
