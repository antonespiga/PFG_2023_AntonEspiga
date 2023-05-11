const mongoose = require ('mongoose');

const { Schema } = mongoose;


const CursoSchema = new Schema({
    nombre: { type:String },
    identificador: String,
    tipo: String,
    director: { type:String},
    profesor: { type:String},
    imparticion: {type:String} ,
    descripcion: String,
    tematica: { type:String},
    creditos: Number,
    semestre: {type:String},
    enlace: String,
    titulosOfertan: [String]
})
CursoSchema.index({director:'text', nombre:'text'})
module.exports = mongoose.model('Curso', CursoSchema);