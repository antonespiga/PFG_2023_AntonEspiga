const mongoose = require ('mongoose');

const { Schema } = mongoose;


const TituloSchema = new Schema({
    identificador: String,
    tipo: String,
    titulo: { type:String }
    })

module.exports = mongoose.model('Titulo', TituloSchema);