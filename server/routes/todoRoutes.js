const express = require("express");

// Start using Express Router
const router = express.Router();

// Importing Controllers
const {
  GetAllTodos,
  GetSingleTodo,
  AddNewTodo,
  EditTodo,
  DeleteTodo,
} = require("../controllers/todoController");

// Get all todos
router.get("/todos", GetAllTodos);

// Get Specific todo with Id
router.get("/todos/:id", GetSingleTodo);

// Add new Todo
router.post("/todos", AddNewTodo);

// Edit todo
router.put("/todos/:id", EditTodo);

// Delete todo
router.delete("/todos/:id", DeleteTodo);

module.exports = router;
