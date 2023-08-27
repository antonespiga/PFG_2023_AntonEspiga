const mongoose = require ('mongoose');

const { Schema } = mongoose;


const TituloSchema = new Schema({
    identificador: { type: String, required: true },
    tipo: { type: String, required: true },
    titulo: { type:String, required:true }
    })

module.exports = mongoose.model('Titulo', TituloSchema);