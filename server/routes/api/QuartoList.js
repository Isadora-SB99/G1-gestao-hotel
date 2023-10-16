//quartoList.js
import { Router } from "express";
import Quarto from "../../models/Quarto.js";

const QuartoRouter = Router();

QuartoRouter.route("/quarto")

  // Get all todos in the database
  .get(async (_req, res) => {
    try {
      const quartoList = await Quarto.find();
      if (!quartoList) throw new Error("No Quarto List found");
      res.status(200).json(quartoList);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  })

  //Post request creates a new todo in the database
  .post(async (req, res) => {
    const newQuarto = new Quarto(req.body); // create a new instance of the Quarto model
    try {
      const quarto = await newQuarto.save(); // Save created todo
      if (!quarto) throw new Error("Something went wrong saving the Quarto");
      res.status(200).json(quarto);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });



QuartoRouter.route("/quarto/:id")

  // Update the todo with the given id
  .put(async (req, res) => {
    const { id } = req.params;
    try {
      const updated = await Quarto.findByIdAndUpdate(id, { ...req.body });
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
      const removed = await Quarto.findByIdAndDelete(id);
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
      const quarto = await Quarto.findById(id);
      if (!quarto) throw new Error("No Quarto found");
      res.status(200).json(quarto);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });

export default QuartoRouter;
