import mongoose, { model } from "mongoose";
const Schema = mongoose.Schema;

mongoose.pluralize(null);

const pedidoSchema = new Schema({
  fecha: {
    type: Date,
    default: Date.now
  },
  cliente_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "cliente",
    required: true
  },
  productos: [
    {
      producto_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "producto",
        required: true
      },
      cantidad: {
        type: Number,
        required: true,
        min: 1
      },
      precio_unitario: {
        type: Number,
        required: true,
        min: 0
      }
    }
  ],
  total: {
    type: Number,
    required: true,
    min: 0
  },
  estado: {
    type: String,
    trim: true,
    default: "Pendiente"
  }
});

const pedido = mongoose.model("pedido", pedidoSchema);

export { pedido };
