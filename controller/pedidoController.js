import {pedido} from "../models/pedido.js";

export const consultaPedido = async (req, res, next) => {
  try {
    const pedidos = await pedido.find({})
      .populate("cliente_id")
      .populate("productos.producto_id");

    res.json(pedidos);
  } catch (error) {
    console.log(error);
    next();
  }
};
