import mongoose from 'mongoose';

const { Schema } = mongoose;
var Curso = require ('../models/curso');

const CursoSchema = new Schema({
    nombre: String,
    identificador: {type: ObjectId, required : true},
    tipo: String,
    director: String,
    profesor: [String],
    imparticion: {type:String ,enum: ['Distancia','Presencial','Híbrido']},
    descripcion: String,
    tematica: String,
    creditos: Number,
    semestre: {type:String, enum: ['1','2','Anual']},
    enlaceDescripcion: String,
    titulos: [String]
})

module.exports = mongoose.model('Curso', CursoSchema);