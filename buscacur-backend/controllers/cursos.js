const Curso = require('../models/cursos')

exports.getCursos = async (req, res, next) => {
    await Curso.find({})
        .then((listCursos)  => {
            res.status(200).json(listCursos);
        })
        .catch(next)
}

exports.getCursoById = async (req, res, next) => {
    await Curso.findById({ '_id': req.params._id })
        .then((curso)  => {
            res.status(200).json(curso);
        })
        .catch(next)
}

exports.addCurso = async (req, res, next) => {
    try {
        nuevoCurso = new Curso(req.body)
        await Curso.create(nuevoCurso)
            .then(() => res.status(200).json('Registro guardado'))
    }
    catch (error) {
        res.status(500).json({ message: error.message })
    }
}

exports.deleteCursoById = async (req, res, next) => {
    await Curso.findByIdAndDelete(req.params.id)
        .then(() => res.status(200).json('Registro eliminado'))
        .catch(next)
}

exports.updateCursoById = async (req, res, next) => {
    try {
        await Curso.findByIdAndUpdate(req.params.id, req.body, { runValidators: true, new: true })
            .then(() => res.status(200).json('Registro modificado'))
    }
    catch (error) {
        res.status(500).json({ message: error.message })
    }
}

