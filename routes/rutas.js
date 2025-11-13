import express from "express";
import { crear, consulta, editar, borrar, consultaId } from "../controller/api.js";
const router = express.Router();

router.post("/crear", crear);
router.get("/consulta", consulta)
router.get("/consulta/:id",consultaId)
router.put("/actualizar/:id", editar);
router.delete('/eliminar/:id', borrar);

export default router;
