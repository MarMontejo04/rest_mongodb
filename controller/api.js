import { cliente } from "../models/cliente.js";

const crear = async (req, res, next) => {
  const datos = req.body;
  console.log(datos);
  const clientes = new cliente(datos);
  try {
    await clientes.save();
    res.json({
      mensaje: "Se creo el cliente",
    });
  } catch (error) {
    console.log(error);
    next();
  }
};

const consulta=async(req,res,next)=>{
          
    try{
        const clientes=await cliente.find({})
        res.json(clientes)
    }catch(error){
        console.log(error)
        next()
    }
    
}

const consultaId=async(req,res,next)=>{
          
    try{
        const clientes=await cliente.findById(req.params.id)
        if(!clientes){
            res.json({
                mensaje:"El cliente no existe"
            })
            next
        }
        res.json(clientes)
    }catch(error){
         res.send(error)
        next()
    }
    
}


const editar = async (req, res) => {
  const id = req.params.id;
  const { nombre, empresa, correo, telefono } = req.body;

  const usuario = await cliente.findOneAndUpdate(
    { _id: id },
    { $set: {nombre: nombre } },
    { $set: {empresa: empresa } },
    { $set: {correo: correo } },
    { $set: {telefono: telefono } },
    { new: true }
  );

    res.json({ mensaje: "Cliente actualizado", usuario });
};

const borrar = async (req, res) => {
  const id = req.params.id;
  const usuario = await cliente.findOneAndDelete({ _id: id });

  if (usuario) {
    res.json({ mensaje: "Cliente borrado" });
  }
};

export { crear, editar, borrar,consulta, consultaId };
