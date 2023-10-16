// O Schema (organização do banco de dados) é produzida através deste arquivo Todo. Ele cria a estrutura no MongoDB


import { Schema, model } from "mongoose";


const ReservaSchema = new Schema({
  cpfCliente: {
    type: String,
    required: true,
  },
  dataCheckin: {
    type: Date,
    required: true,
  },
  dataCheckout: {
    type: Date,
    required: true,
  },
  numQuarto: {
    type: String,
    required: true,
  },

});

const Reserva = model("reserva", ReservaSchema);

export default Reserva;