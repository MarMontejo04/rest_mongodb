import mongoose,{model} from "mongoose";
const Schema=mongoose.Schema;


mongoose.pluralize(null);

const productoSchema = new Schema({
    nombre:{
        type:String,
        trim:true
    },
    descripcion:{
        type:String,
        trim:true
    },
    precio:{
        type:String,
        trim:true,
        unique:true,
        lowercase:true
    },
    stock:{
        type:String,
        trim:true
    },
    categoria:{
        type:String,
        trim:true
    },
  
});


const producto=mongoose.model("producto",productoSchema)

export{
    producto
}


