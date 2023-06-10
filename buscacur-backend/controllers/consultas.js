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

exports.getCursosByTematica = async (req, res, next) => {
     const tem = new RegExp(req.params.tematica)
     await Cursos.find({ tematica: tem }).then(function (listCursos) {
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

exports.getCursosByNombre = async (req, res, next) => {
     const nom = new RegExp(req.params.nombre, 'i')
     await Cursos.find({ nombre: nom })
          .then(function (listCursos) {
               res.status(200).json(listCursos);
          })
          .catch(next)
}

exports.getCursosByDirector = async (req, res, next) => {
     const dir = req.params.director
     const regex = new RegExp(dir, 'i')
     await Cursos.find({ director: regex, })
          .then(function (listCursos) {
               res.status(200).json(listCursos);
          })
          .catch(next)
}

exports.getCursosByProfesor = async (req, res, next) => {
     const prof = req.params.profesor;
     const regex = new RegExp(prof, 'i')
     await Cursos.find({ profesor: regex })
          .then(function (listCursos) {
               res.status(200).json(listCursos);
          })
          .catch(next)
}

exports.getCursosBySemestre = async (req, res, next) => {
     const sem = req.params.semestre;
     await Cursos.find({ semestre: String(sem) }).then(function (listCursos) {
          res.status(200).json(listCursos);
     })
          .catch(next)
}

exports.getCursosByNCreditos = async (req, res, next) => {
     const cred = req.params.creditos
     await Cursos.find({ creditos: Number(cred) }).then(function (listCursos) {
          res.status(200).json(listCursos);
     })
          .catch(next)
}

exports.getCursosByTipo = async (req, res, next) => {
     await Cursos.find({ tipo: req.params.tipo }).sort('tematica').then(function (listCursos) {
          res.status(200).json(listCursos);
     })
          .catch(next)
}

exports.getCursosByTitulo = async (req, res, next) => {
     const tit = new RegExp(req.params.titulo, 'i')
     await Cursos.find({ titulo: tit }).then(function (listCursos) {
          res.status(200).json(listCursos);
     })
          .catch(next)
}

exports.getCursosByImparticion = async (req, res, next) => {
     const imp = new RegExp(req.params.imparticion, 'i')
     await Cursos.find({ imparticion: imp }).then(function (listCursos) {
          res.status(200).json(listCursos);
     })
          .catch(next)
}

exports.getNombres = async (req, res, next) => {
     await Cursos.find({ },{'nombre':1 , _id:0}).distinct('nombre')
     .then(function(listCursos) {
          res.status(200).json(listCursos)
     })
     .catch(next)
}

exports.getTipos = async (req, res, next) => {
     await Cursos.find({ },{'tipo':1 , _id:0}).distinct('tipo')
     .then(function(listCursos) {
          res.status(200).json(listCursos)
     })
     .catch(next)
}

exports.getSemestres = async (req, res, next) => {
     await Cursos.find({ },{'semestre':1 , _id:0}).distinct('semestre')
     .then(function(listCursos) {
          res.status(200).json(listCursos)
     })
     .catch(next)
}

exports.getCreditos = async (req, res, next) => {
     await Cursos.find({ },{'creditos':1 , _id:0}).distinct('creditos')
     .then(function(listCursos) {
          res.status(200).json(listCursos)
     })
     .catch(next)
}

exports.getTematicas = async (req, res, next) => {
     await Cursos.find({ },{'tematica':1 , _id:0}).distinct('tematica')
     .then(function(listCursos) {
          res.status(200).json(listCursos)
     })
     .catch(next)
}

exports.getProfesores = async (req, res, next) => {
     await Cursos.find({ },{'profesor':1 , _id:0}).distinct('profesor')
     .then(function(listCursos) {
          res.status(200).json(listCursos)
     })
     .catch(next)
}

exports.getDirectores = async (req, res, next) => {
     await Cursos.find({ },{'director':1 , _id:0}).distinct('director')
     .then(function(listCursos) {
          res.status(200).json(listCursos)
     })
     .catch(next)
}

exports.getTitulos = async (req, res, next) => {
     await Cursos.find({ },{'titulo':1 , _id:0}).distinct('titulo')
     .then(function(listCursos) {
          res.status(200).json(listCursos)
     })
     .catch(next)
}

exports.getImparticions = async (req, res, next) => {
     await Cursos.find({ },{'imparticion':1 , _id:0}).distinct('imparticion')
     .then(function(listCursos) {
          res.status(200).json(listCursos)
     })
     .catch(next)
}