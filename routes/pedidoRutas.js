import express from "express";
import { consultaPedido } from "../controller/pedidoController.js";
const router = express.Router();

router.get("/consulta", consultaPedido);

export default router;
