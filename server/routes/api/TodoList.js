//TodoList.js
import { Router } from "express";
import Todo from "../../models/Todo.js";

const TodoRouter = Router();

TodoRouter.route("/")

  // Get all todos in the database
  .get(async (_req, res) => {
    try {
      const todoList = await Todo.find();
      if (!todoList) throw new Error("No Todo List found");
      res.status(200).json(todoList);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  })

  //Post request creates a new todo in the database
  .post(async (req, res) => {
    const newTodo = new Todo(req.body); // create a new instance of the Todo model
    try {
      const todo = await newTodo.save(); // Save created todo
      if (!todo) throw new Error("Something went wrong saving the Todo");
      res.status(200).json(todo);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });



  TodoRouter.route("/:id")

  // Update the todo with the given id
  .put(async (req, res) => {
    const { id } = req.params;
    try {
      const updated = await Todo.findByIdAndUpdate(id, { ...req.body });
      if (!updated) throw Error("Something went wrong ");
      res.status(200).json(updated);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  })

  // Delete the todo with the given id
  .delete(async (req, res) => {
    const { id } = req.params;
    try {
      const removed = await Todo.findByIdAndDelete(id);
      if (!removed) throw Error("Something went wrong ");
      res.status(200).json(removed);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  })

  // Get the todo with the given id
  .get(async (req, res) => {
    const { id } = req.params;
    try {
      const todo = await Todo.findById(id);
      if (!todo) throw new Error("No Todo found");
      res.status(200).json(todo);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });

export default TodoRouter;
