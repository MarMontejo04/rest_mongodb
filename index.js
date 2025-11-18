import express from "express";
import router from "./routes/rutas.js";
import productoRutas from "./routes/productoRutas.js";
import pedidoRutas from "./routes/pedidoRutas.js";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config({ path: ".env" });

mongoose.Promise = global.Promise;

mongoose.connect(process.env.MONGO_URI)

const app = express();

app.use(cors({
  origin: "https://cliente-react-n1xu.onrender.com",
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true,
}));

//accesos json
app.use(express.json());

//accesos a los datos del formulario
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use("/api", router);
app.use("/api/productos", productoRutas);
app.use("/api/pedidos", pedidoRutas);

app.listen(3001);
