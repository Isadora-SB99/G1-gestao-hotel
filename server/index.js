// index.js
//O index.js é responsável por criar 
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import path from "path";
import TodoListRoutes from "./routes/api/TodoList.js";
import QuartoListRoutes from "./routes/api/QuartoList.js";
import ClienteListRoutes from "./routes/api/ClienteList.js";
import FuncListRoutes from "./routes/api/FuncList.js";
import ReservaListRoutes from "./routes/api/ReservaList.js";
import homeRouter from "./routes/homeRouter.js";
import assetsRouter from "./routes/assestsRouter.js";


const app = express();
const publicPath = path.join(path.resolve(), "../client/public"); // encontra a pasta assets public
const distPath = path.join(path.resolve(), "../client/dist"); // encontra a pasta assets dist

dotenv.config();

app.use(cors()); // Utiliza o CORS na aplicação
app.use(bodyParser.json()); // transforma a requisição em JSON
app.use(bodyParser.urlencoded({ extended: true })); 

// Conexão com o Banco
mongoose
  .connect(process.env.MONGO_URI, {     
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB database Connected..."))
  .catch((err) => console.log(err));

// Cria rotas

if (process.env.NODE_ENV === "production") {
  app.use("/", express.static(distPath));
} else {
  app.use("/", express.static(publicPath));
  app.use("/src", assetsRouter);
}
app.use("/api/todoList", TodoListRoutes);
app.use("/api/quartoList", QuartoListRoutes);
app.use("/api/clienteList", ClienteListRoutes);
app.use("/api/funcList", FuncListRoutes);
app.use("/api/reservaList", ReservaListRoutes);
app.use(homeRouter);

app.listen(process.env.PORT, () =>
  console.log(`App is running on http://localhost:${process.env.PORT}`)
);
