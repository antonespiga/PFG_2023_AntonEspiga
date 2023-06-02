const mongoose = require ('mongoose');

const { Schema } = mongoose;


const VisualizacionSchema = new Schema({
    usuario: { type:String },
    tipoConsulta: { type:String },
    fecha: { type:Date }
})

module.exports = mongoose.model('Visualizacion', VisualizacionSchema);