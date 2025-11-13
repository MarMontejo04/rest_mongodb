import express from "express";
import { consultaProducto } from "../controller/productoController.js";
const router = express.Router();

router.get("/consulta", consultaProducto);

export default router;
