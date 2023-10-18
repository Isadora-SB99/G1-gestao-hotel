// //quartoList.js
// import { Router } from "express";
// import Efetuacao from "../../models/Efetuacao.js";

// const EfetuacaoRouter = Router();

// EfetuacaoRouter.route("/efetuacao")

//   // Get all todos in the database
//   .get(async (_req, res) => {
//     try {
//       const efetuacaoList = await Efetuacao.find();
//       if (!efetuacaoList) throw new Error("No Efetuacao List found");
//       res.status(200).json(efetuacaoList);
//     } catch (error) {
//       res.status(500).json({ message: error.message });
//     }
//   })

//   //Post request creates a new todo in the database
//   .post(async (req, res) => {
//     const newEfetuacao = new Efetuacao(req.body); // create a new instance of the Efetuacao model
//     try {
//       const efetuacao = await newEfetuacao.save(); // Save created todo
//       if (!efetuacao) throw new Error("Something went wrong saving the Efetuacao");
//       res.status(200).json(efetuacao);
//     } catch (error) {
//       res.status(500).json({ message: error.message });
//     }
//   });



// Efetuacao.route("/efetuacao/:id")

//   // Update the todo with the given id
//   .put(async (req, res) => {
//     const { id } = req.params;
//     try {
//       const updated = await Efetuacao.findByIdAndUpdate(id, { ...req.body });
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
//       const removed = await Efetuacao.findByIdAndDelete(id);
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
//       const efetuacao = await Efetuacao.findById(id);
//       if (!efetuacao) throw new Error("No Efetuacao found");
//       res.status(200).json(efetuacao);
//     } catch (error) {
//       res.status(500).json({ message: error.message });
//     }
//   });

// export default EfetuacaoRouter;
