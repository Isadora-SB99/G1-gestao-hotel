// O Schema (organização do banco de dados) é produzida através deste arquivo Todo. Ele cria a estrutura no MongoDB


import { Schema, model } from "mongoose";

const FuncSchema = new Schema({
  usuario: {
    type: String,
    required: true,
  },
  senha: {
    type: String,
    required: true,
  },
});


const Funcionario = model("func", FuncSchema);

export default Funcionario;