import express from "express";
import router from "./routes/rutas.js";
import productoRutas from "./routes/productoRutas.js";
import pedidoRutas from "./routes/pedidoRutas.js";
import mongoose from "mongoose";
import cors from "cors";

mongoose.Promise = global.Promise;

mongoose.connect(
  "mongodb+srv://marianamontejo25_db_user:GWNoAi1BsOWCNNKS@cluster0.5cw7qx2.mongodb.net/restapi?appName=Cluster0"
)

const app = express();

//accesos json
app.use(express.json());

//accesos a los datos del formulario
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use("/api", router);
app.use("/api/productos", productoRutas);
app.use("/api/pedidos", pedidoRutas);

app.listen(3001);
