//TodoList.js
import { Router } from "express";
import Reserva from "../../models/Reserva.js";

const ReservaRouter = Router();

ReservaRouter.route("/reserva")

  // Get all todos in the database
  .get(async (_req, res) => {
    try {
      const reservaList = await Reserva.find();
      if (!reservaList) throw new Error("No Reserva List found");
      res.status(200).json(reservaList);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  })

  //Post request creates a new todo in the database
  .post(async (req, res) => {
    const newReserva = new Reserva(req.body); // create a new instance of the Todo model
    try {
      const reserva = await newReserva.save(); // Save created todo
      if (!reserva) throw new Error("Something went wrong saving the Reserva");
      res.status(200).json(reserva);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });



ReservaRouter.route("/reserva/:id")

  // Update the todo with the given id
  .put(async (req, res) => {
    const { id } = req.params;
    try {
      const updated = await Reserva.findByIdAndUpdate(id, { ...req.body });
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
      const removed = await Reserva.findByIdAndDelete(id);
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
      const reserva = await Reserva.findById(id);
      if (!reserva) throw new Error("No Reserva found");
      res.status(200).json(reserva);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });

export default ReservaRouter;
