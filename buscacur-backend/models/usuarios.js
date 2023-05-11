const mongoose = require('mongoose')
require('mongoose-type-email')

const bcypt = require ('bcrypt')
const saltRounds = 10



const UsuarioSchema = new mongoose.Schema({
    email:{type:mongoose.SchemaTypes.Email},
    nombre: String,
    apellido1: String,
    apellido2: String,
    poblacion: String,
    codigoPostal: Number,
    titulacion: String,
    clave: String,
    rol:{ type: String, enum: ['socio','admin'], default: "socio"}
})




module.exports = mongoose.model('Usuario', UsuarioSchema);

