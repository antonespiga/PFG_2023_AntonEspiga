const mongoose = require ('mongoose');

const { Schema } = mongoose;


const CursoSchema = new Schema({
    nombre: { type:String, required: true },
    identificador: { type: String, required: true},
    tipo: {type:String, required: true} ,
    titulo: {type:String, required: true} ,
    director: { type:String, required: true},
    profesor: { type:String, required: true},
    imparticion: {type:String, required: true} ,
    descripcion: {type:String, required: true} ,
    tematica: { type:String, required: true},
    creditos: { type: Number, required: true},
    semestre: {type:String, enum: ['Ambos', 'Primero', 'Segundo' ], required: true},
    enlace: { type: String, required: true },
    titulosOfertan: { type: [String], required: true}
})

module.exports = mongoose.model('Curso', CursoSchema);