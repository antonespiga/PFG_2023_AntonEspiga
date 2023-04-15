const mongoose = require('mongoose')
require('mongoose-type-email')

const UsuarioSchema = new mongoose.Schema({
   email:{type:mongoose.SchemaTypes.Email}, nombre: String,
    apellido1: String,
    apellido2: String,
    poblacion: String,
    codigoPostal: Number
})

module.exports = mongoose.model('Usuario', UsuarioSchema);

