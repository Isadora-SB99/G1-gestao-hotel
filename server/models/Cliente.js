// O Schema (organização do banco de dados) é produzida através deste arquivo Todo. Ele cria a estrutura no MongoDB


import { Schema, model } from "mongoose";


const ClienteSchema = new Schema({
  nome: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  cpf: {
    type: String,
    required: true,
  },
  rg: {
    type: String,
    required: false,
  },
  telefone: {
    type: String,
    required: true,
  },
  infoAdicionais: {
    type: String,
    required: true,
  },
});


const Cliente = model("cliente", ClienteSchema);


export default Cliente;