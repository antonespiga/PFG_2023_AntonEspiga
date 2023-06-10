const { stdout, stdin } = require('process');
const Curso = require ('../models/cursos')
const {exec} = require('child_process')
const config = require('../config')


exports.getCursos = async(req, res, next)  => {
    await Curso.find({})
    .then(function ( listCursos) {
               res.status(200).json(listCursos);})
    .catch(next)
         }


exports.getCursoById = async(req, res, next)  => {
    await Curso.findById({'_id':req.params._id})
    .then(function ( listCursos) {
              res.status(200).json(listCursos);})
    .catch(next)
         }

exports.addCurso = async(req, res, next) => {
    try{
    nuevoCurso = new Curso (req.body)
    await Curso.create(nuevoCurso)
    .then(() => res.status(200).json('Registro guardado'))
    }
    catch(error) {
        res.status(500).json({message: error.message})
    }
}

exports.deleteCursoById  = async (req, res, next) => {
    await Curso.findByIdAndDelete(req.params.id)
    .then(() => res.status(200).json('Registro eliminado'))
    .catch(next)
}

exports.updateCursoById  = async (req, res, next) => {
    await Curso.findByIdAndUpdate(req.params.id, req.body, {new:true})
    .then(() => res.status(200).json('Registro modificado'))
    .catch(next)
}

