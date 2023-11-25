const Visualizaciones = require('../models/visualizaciones')
const User = require('../models/usuarios')

exports.getVisualizaciones = async (req, res, next) => {
     await Visualizaciones.find({})
          .then((contVisualizaciones) => {
               res.status(200).json(contVisualizaciones)
          })
          .catch(next)
}

exports.addVisualizacion = async (req, res, next) => {
     try {
          const nuevaVisualizacion = new Visualizaciones(req.body)
          await Visualizaciones.create(nuevaVisualizacion)
          res.status(200).json({ message: 'Visualizacion añadida' })
     }
     catch (error) {
          res.status(500).json({ message: error.message })
     }
}

exports.getVisualizacionesUsuario = async (req, res, next) => {
     await Visualizaciones.find({ 'usuario': req.params.id },)
          .then((response) => {
               res.status(200).json(response);
          })
          .catch(next)
}

exports.getVisualizacionMasFrecuente = async (req, res, next) => {console.log(req.params.id)
     await Visualizaciones.aggregate([
          {
               $match: { usuario: req.params.id }
               
          },
          {
               $match: { tipoConsulta: {$ne:"texto libre"}}
          },
          {
               $match: { tipoConsulta: {$ne:"afinidad"}} 
          },
          {
               $group: {
                    _id: { usuario: '$usuario', campo: '$campo' },
                    count: { $sum: 1 }
               }
          },
          {
               $sort: { count: -1 }
          },
          {
               $group: {
                    _id: '$_id.usuario',
                    campo: { $first: '$_id.campo' },
                    tipoConsulta: { $first: '$_id.tipoConsulta'},
                    count: { $first: '$count' }
               }
          }
     ])
          .then((response) => {
               res.status(200).json(response[0].campo)
          })
          .catch(next)
}

exports.getVisualizacionMasFrecuenteTextoLibre = async (req, res, next) => {
     await Visualizaciones.aggregate([
          {
               $match: { usuario: req.params.id }
          },
          {
               $group: {
                    _id: { usuario: '$usuario', tipoConsulta:'texto libre', campo: '$campo' },
                    count: { $sum: 1 }
               }
          },
          {
               $sort: { count: -1 }
          },
          {
               $group: {
                    _id: '$_id.usuario',
                    campo: { $first: '$_id.campo' },
                    count: { $first: '$count' }
               }
          }
     ])
          .then((response) => {
               res.status(200).json(response[0].campo)
          })
          .catch(next)
}






