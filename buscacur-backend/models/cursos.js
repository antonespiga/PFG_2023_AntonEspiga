const mongoose = require ('mongoose');

const { Schema } = mongoose;


const CursoSchema = new Schema({
    nombre: { type:String },
    identificador: String,
    tipo: String,
    director: { type:String},
    profesor: { type:String},
    imparticion: {type:String ,enum: ['Distancia','Presencial','Híbrido']},
    descripcion: String,
    tematica: { type:String},
    creditos: Number,
    semestre: Number,
    link_descripcion: String,
    titulos_ofertan: [String]
})
CursoSchema.index({director:'text', nombre:'text'})
module.exports = mongoose.model('Curso', CursoSchema);