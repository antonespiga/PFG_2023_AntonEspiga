const Cursos = require ('../models/cursos')

exports.getCursos = async(req, res, next)  => {
     await Cursos.find({}).then(function ( listCursos) {
                res.status(200).json(listCursos);})
                .catch(next)
          }

exports.getCursoById = async(req, res, next)  => {
     await Cursos.findById({'_id':req.params._id}).then(function ( listCursos) {
               res.status(200).json(listCursos);})
               .catch(next)
          }

exports.getCursosByTematica = async(req, res, next)  => {
     const tem = new RegExp(req.params.tematica)
     await Cursos.find({tematica:tem}).then(function ( listCursos) {
               res.status(200).json(listCursos);})
               .catch(next)
          }

exports.getCursosByAfinidad = async(req, res, next)  => {
     await Cursos.find({}).then(function ( listCursos) {
                    res.status(200).json(listCursos);})
                    .catch(next)
          }

exports.getCursosByNombre = async(req, res, next)  => {
     const nom = new RegExp( req.params.nombre, 'i')
     await Cursos.find({nombre: nom})
     .then(function ( listCursos) {
          res.status(200).json(listCursos);})
     .catch(next)
          }
                                        
exports.getCursosByDirector = async(req, res, next)  => {
const dir = req.params.director
const regex = new RegExp(dir, 'i')
     await Cursos.find({ director: regex,})
     .then(function ( listCursos) {
                    res.status(200).json(listCursos);})
     .catch(next)
          }

exports.getCursosByProfesor = async(req, res, next)  => {
     const prof = req.params.profesor;
     const regex = new RegExp(prof, 'i')
     await Cursos.find({ profesor: regex})
     .then(function ( listCursos) {
                    res.status(200).json(listCursos);})
                    .catch(next)
          }


exports.getCursosBySemestre = async (req, res, next) => {
     //const sem = req.params.semestre;
      await Cursos.find({semestre: req.params.semestre}).then(function ( listCursos ) {
          res.status(200).json(listCursos);})
          .catch(next)
 }

exports.getCursosByNCreditos = async(req, res, next)  => {console.log('buscando'+req.params.creditos);
     await Cursos.find({ creditos : Number(req.params.creditos) }).then(function ( listCursos) {
                    res.status(200).json(listCursos);})
                    .catch(next)
          }
          
          