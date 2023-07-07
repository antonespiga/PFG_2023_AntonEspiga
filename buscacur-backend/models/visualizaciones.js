const mongoose = require ('mongoose');

const { Schema } = mongoose;


const VisualizacionSchema = new Schema({
    usuario: { type:String },
    tipoConsulta: { type:String },
    campo: { type: mongoose.Mixed },
    fecha: { type:Date }
})

module.exports = mongoose.model('Visualizacion', VisualizacionSchema);