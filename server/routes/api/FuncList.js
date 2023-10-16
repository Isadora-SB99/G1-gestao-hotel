//TodoList.js
import { Router } from "express";
import Func from "../../models/Func.js";

const FuncRouter = Router();

FuncRouter.route("/func")

  // Get all todos in the database
  .get(async (_req, res) => {
    try {
      const funcList = await Func.find();
      if (!funcList) throw new Error("No Func List found");
      res.status(200).json(funcList);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  })

  //Post request creates a new todo in the database
  .post(async (req, res) => {
    const newFunc = new Func(req.body); // create a new instance of the Todo model
    try {
      const func = await newFunc.save(); // Save created todo
      if (!func) throw new Error("Something went wrong saving the Func");
      res.status(200).json(func);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });



FuncRouter.route("/func/:id")

  // Update the todo with the given id
  .put(async (req, res) => {
    const { id } = req.params;
    try {
      const updated = await Func.findByIdAndUpdate(id, { ...req.body });
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
      const removed = await Func.findByIdAndDelete(id);
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
      const func = await Func.findById(id);
      if (!func) throw new Error("No Func found");
      res.status(200).json(func);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });

export default FuncRouter;
