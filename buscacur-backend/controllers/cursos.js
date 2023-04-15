const Curso = require ('../models/cursos')

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
    nuevoCurso = new Curso (req.body)
    await Curso.create(nuevoCurso)
    .then(() => res.status(200).json('Registro guardado'))
    .catch(next)
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