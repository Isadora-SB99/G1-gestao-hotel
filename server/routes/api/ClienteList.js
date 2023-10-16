//TodoList.js
import { Router } from "express";
import Cliente from "../../models/Cliente.js";

const ClienteRouter = Router();

ClienteRouter.route("/cliente")

  // Get all todos in the database
  .get(async (_req, res) => {
    try {
      const clienteList = await Cliente.find();
      if (!clienteList) throw new Error("No Cliente List found");
      res.status(200).json(clienteList);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  })

  //Post request creates a new todo in the database
  .post(async (req, res) => {
    const newCliente = new Cliente(req.body); // create a new instance of the Todo model
    try {
      const cliente = await newCliente.save(); // Save created todo
      if (!cliente) throw new Error("Something went wrong saving the Cliente");
      res.status(200).json(cliente);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });



ClienteRouter.route("/cliente/:id")

  // Update the todo with the given id
  .put(async (req, res) => {
    const { id } = req.params;
    try {
      const updated = await Cliente.findByIdAndUpdate(id, { ...req.body });
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
      const removed = await Cliente.findByIdAndDelete(id);
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
      const cliente = await Cliente.findById(id);
      if (!cliente) throw new Error("No Cliente found");
      res.status(200).json(cliente);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });

export default ClienteRouter;
