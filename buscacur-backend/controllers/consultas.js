const Cursos = require('../models/cursos')


exports.getCursos = async (req, res, next) => {
     await Cursos.find({}).then(function (listCursos) {
          res.status(200).json(listCursos);
     })
          .catch(next)
}

exports.getCursoById = async (req, res, next) => {
     await Cursos.findById({ '_id': req.params._id }).then(function (listCursos) {
          res.status(200).json(listCursos);
     })
          .catch(next)
}

exports.getCursosByAfinidad = async (req, res, next) => {
     await Cursos.find({}).then(function (listCursos) {
          res.status(200).json(listCursos);
     })
          .catch(next)
}

exports.getNombres = async (req, res, next) => {
     await Cursos.find({}, { 'nombre': 1, _id: 0 }).distinct('nombre')
          .then(function (listCursos) {
               res.status(200).json(listCursos)
          })
          .catch(next)
}

exports.getTipos = async (req, res, next) => {
     await Cursos.find({}, { 'tipo': 1, _id: 0 }).distinct('tipo')
          .then(function (listCursos) {
               res.status(200).json(listCursos)
          })
          .catch(next)
}

exports.getSemestres = async (req, res, next) => {
     await Cursos.find({}, { 'semestre': 1, _id: 0 }).distinct('semestre')
          .then(function (listCursos) {
               res.status(200).json(listCursos)
          })
          .catch(next)
}

exports.getCreditos = async (req, res, next) => {
     await Cursos.find({}, { 'creditos': 1, _id: 0 }).distinct('creditos')
          .then(function (listCursos) {
               res.status(200).json(listCursos)
          })
          .catch(next)
}

exports.getTematicas = async (req, res, next) => {
     await Cursos.find({}, { 'tematica': 1, _id: 0 }).distinct('tematica')
          .then(function (listCursos) {
               res.status(200).json(listCursos)
          })
          .catch(next)
}

exports.getProfesores = async (req, res, next) => {
     await Cursos.find({}, { 'profesor': 1, _id: 0 }).distinct('profesor')
          .then(function (listCursos) {
               res.status(200).json(listCursos)
          })
          .catch(next)
}

exports.getDirectores = async (req, res, next) => {
     await Cursos.find({}, { 'director': 1, _id: 0 }).distinct('director')
          .then(function (listCursos) {
               res.status(200).json(listCursos)
          })
          .catch(next)
}

exports.getTitulos = async (req, res, next) => {
     await Cursos.find({}, { 'titulo': 1, _id: 0 }).distinct('titulo')
          .then(function (listCursos) {
               res.status(200).json(listCursos)
          })
          .catch(next)
}

exports.getTitulacionCursos = async (req, res, next) => {
     await Cursos.find({}, { 'titulacionCurso': 1, _id: 0 }).distinct('titulacionCurso')
          .then(function (listCursos) {
               res.status(200).json(listCursos)
          })
          .catch(next)
}

exports.getImparticions = async (req, res, next) => {
     await Cursos.find({}, { 'imparticion': 1, _id: 0 }).distinct('imparticion')
          .then(function (listCursos) {
               res.status(200).json(listCursos)
          })
          .catch(next)
}

exports.getCursosFilter = async (req, res, next) => {

     if((req.query.tipo==='texto libre') && (req.query.params)){
          const filter = Object.keys(req.query.params).map(key=>({[key]: req.query.params[key]}))
          console.log(req.query.params)
          const qFilter =  req.query.yQuery === 'true'? req.query.params : { $or: filter }
               await Cursos.find(qFilter).sort('tematica')
               .then(function (listCursos) {
                    res.status(200).json(listCursos) 
               })
               .catch(next)
                }
     else {console.log( req.query.params )
          await Cursos.find(req.query.params).sort('tematica')
          .then(function (listCursos) {
               res.status(200).json(listCursos)
          })
          .catch(next)
     }
}