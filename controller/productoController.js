import {producto} from "../models/producto.js";

export const consultaProducto = async (req, res, next) => {
  try {
    const productos = await producto.find({});
    res.json(productos);
  } catch (error) {
    console.log(error);
    next();
  }
};
