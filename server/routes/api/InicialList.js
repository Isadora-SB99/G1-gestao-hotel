//inicialList.js
import { Router } from "express";
import Quarto from "../../models/Quarto.js";
import Cliente from "../../models/Cliente.js";
import Func from "../../models/Func.js"

const InicialRouter = Router();

InicialRouter.route("/inicial")

  // Get all todos in the database
  .get(async (_req, res) => {
    try {
      const quartoList = await Quarto.find();
      if (!quartoList) throw new Error("No Qaurto List found");
      res.status(200).json(quartoList);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  })

  //Post request creates a new todo in the database
  .post(async (req, res) => {
    const newQaurto = new Quarto(req.body); // create a new instance of the Quarto model
    try {
      const quarto = await newQuarto.save(); // Save created todo
      if (!quarto) throw new Error("Something went wrong saving the Quarto");
      res.status(200).json(quarto);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });

  InicialRouter.route("/inicial")

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
    const newCliente = new Cliente(req.body); // create a new instance of the Cliente model
    try {
      const cliente = await newCliente.save(); // Save created todo
      if (!cliente) throw new Error("Something went wrong saving the Cliente");
      res.status(200).json(cliente);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });

  InicialRouter.route("/inicial")

  // Get all todos in the database
  .get(async (_req, res) => {
    try {
      const funcList = await Func.find();
      if (!funcList) throw new Error("No Funcionarios List found");
      res.status(200).json(funcList);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  })

  //Post request creates a new todo in the database
  .post(async (req, res) => {
    const newFunc = new Func(req.body); // create a new instance of the Funcionarios model
    try {
      const func = await newFunc.save(); // Save created todo
      if (!func) throw new Error("Something went wrong saving the Funcionarios");
      res.status(200).json(func);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });
  
InicialRouter.route("/inicial/:id")

  // Update the todo with the given id
  .put(async (req, res) => {
    const { id } = req.params;
    try {
      const updated = await Inicial.findByIdAndUpdate(id, { ...req.body });
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
      const removed = await Inicial.findByIdAndDelete(id);
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
      const inicial = await Inicial.findById(id);
      if (!inicial) throw new Error("No Inicial found");
      res.status(200).json(inicial);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });

export default InicialRouter;
