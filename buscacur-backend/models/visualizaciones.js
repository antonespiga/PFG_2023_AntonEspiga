const mongoose = require('mongoose');

const { Schema } = mongoose;

const VisualizacionSchema = new Schema({
    usuario: { type: String, required: true },
    tipoConsulta: { type: String },
    campo: { type: mongoose.Mixed, required: true },
    fecha: { type: Date }
})

module.exports = mongoose.model('Visualizacion', VisualizacionSchema);