// O Schema (organização do banco de dados) é produzida através deste arquivo Todo. Ele cria a estrutura no MongoDB


import { Schema, model } from "mongoose";

const QuartoSchema = new Schema({
  numero: {
    type: Number,
    required: true,
  },
  maxPessoas: {
    type: Number,
    required: true,
  },
  camasCasal: {
    type: Number,
    required: false,
  },
  camasSolteiro: {
    type: Number,
    required: false,
  },
  tamanho: {
    type: Number,
    required: true,
  },
  arCondicionado: {
    type: Boolean,
    required: false,
  },
  wifi: {
    type: Boolean,
    required: false,
  },
  banheira: {
    type: Boolean,
    required: false,
  },
  secadorCabelo: {
    type: Boolean,
    required: false,
  },
  frigobar: {
    type: Boolean,
    required: false,
  },
  imagem: {
    type: String,
    required: false,
  },
});


const Quarto = model("quarto", QuartoSchema);

export default Quarto;