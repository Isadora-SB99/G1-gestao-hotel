//checkinList.js
import { Router } from "express";
import Cliente from "../../models/Cliente.js";
import Reserva from "../../models/Reserva.js";

const CheckinRouter = Router();

CheckinRouter.route("/checkin")

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

CheckinRouter.route("/checkin")

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
    const newReserva = new Reserva(req.body); // create a new instance of the Reserva model
    try {
      const reserva = await newReserva.save(); // Save created todo
      if (!reserva) throw new Error("Something went wrong saving the Reserva");
      res.status(200).json(reserva);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });


// CheckinRouter.route("/checkin/:id")

//   // Update the todo with the given id
//   .put(async (req, res) => {
//     const { id } = req.params;
//     try {
//       const updated = await Checkin.findByIdAndUpdate(id, { ...req.body });
//       if (!updated) throw Error("Something went wrong ");
//       res.status(200).json(updated);
//     } catch (error) {
//       res.status(500).json({ message: error.message });
//     }
//   })

//   // Delete the todo with the given id
//   .delete(async (req, res) => {
//     const { id } = req.params;
//     try {
//       const removed = await Checkin.findByIdAndDelete(id);
//       if (!removed) throw Error("Something went wrong ");
//       res.status(200).json(removed);
//     } catch (error) {
//       res.status(500).json({ message: error.message });
//     }
//   })

//   // Get the todo with the given id
//   .get(async (req, res) => {
//     const { id } = req.params;
//     try {
//       const checkin = await Checkin.findById(id);
//       if (!checkin) throw new Error("No Checkin found");
//       res.status(200).json(checkin);
//     } catch (error) {
//       res.status(500).json({ message: error.message });
//     }
//   });

export default CheckinRouter;
