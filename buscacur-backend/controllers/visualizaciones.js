const Visualizaciones = require('../models/visualizaciones')
const User= require('../models/usuarios')
const { verificarToken } = require('../services')
const services = require('../services')


exports.getVisualizaciones= async(req, res, next) => {
    await Visualizaciones.find({})
    .then((contVisualizaciones) => {
        res.status(200).json(contVisualizaciones)})
    .catch(next)
}


exports.addVisualizacion = async(req, res, next) => {
    try {
        const nuevaVisualizacion = new Visualizaciones(req.body)
        await Visualizaciones.create(nuevaVisualizacion)
        await User.findOneAndUpdate({_id:req.usuario},
                { $inc: {}})
        res.status(200).json({message:'Visualizacion añadida'})
    }
    catch(error) {
        res.status(500).json({message: error.message})
    }
}

exports.getVisualizacionesByNombre = async(req, res, next) => {
    const nom = "nombre";
    const regex = new RegExp(nom, 'i')
    await Visualizaciones.find({ tipoConsulta: regex })
         .then((response) => {
              res.status(200).json(response);
         })
         .catch(next)
}

exports.getVisualizacionesByTipo = async(req, res, next) => {
    const nom = "tipo";
    const regex = new RegExp(nom, 'i')
    await Visualizaciones.find({ tipoConsulta: regex })
         .then((response) => {
              res.status(200).json(response);
         })
         .catch(next)
}

exports.getVisualizacionesBySemestre = async(req, res, next) => {
    const nom = "semestre";
    const regex = new RegExp(nom, 'i')
    await Visualizaciones.find({ tipoConsulta: regex })
         .then((response) => {
              res.status(200).json(response);
         })
         .catch(next)
}


exports.getVisualizacionesByTematica = async(req, res, next) => {
    const nom = "tematica";
    const regex = new RegExp(nom, 'i')
    await Visualizaciones.find({ tipoConsulta: regex })
         .then((response) => {
              res.status(200).json(response);
         })
         .catch(next)
}

exports.getVisualizacionesByDirector = async(req, res, next) => {
    const nom = "director";
    const regex = new RegExp(nom, 'i')
    await Visualizaciones.find({ tipoConsulta: regex })
         .then((response) => {
              res.status(200).json(response);
         })
         .catch(next)
}

exports.getVisualizacionesByProfesor = async(req, res, next) => {
    const nom = "profesor";
    const regex = new RegExp(nom, 'i')
    await Visualizaciones.find({ tipoConsulta: regex })
         .then((response) => {
              res.status(200).json(response);
         })
         .catch(next)
}

exports.getVisualizacionesUsuario = async(req, res, next) => {
    const nom = req.params._id;
    const regex = new RegExp(nom, 'i')
    await Visualizaciones.findById({ '_id': regex }).countDocuments()
         .then((response) => {
              res.status(200).json(response);
         })
         .catch(next)
}

exports.getVisualizacionesByImparticion = async(req, res, next) => {
    const nom = "imparticion";
    const regex = new RegExp(nom, 'i')
    await Visualizaciones.find({ tipoConsulta: regex })
         .then((response) => {
              res.status(200).json(response);
         })
         .catch(next)
}

exports.getVisualizacionesByTitulo = async(req, res, next) => {
    const nom = "titulo";
    const regex = new RegExp(nom, 'i')
    await Visualizaciones.find({ tipoConsulta: regex })
         .then((response) => {
              res.status(200).json(response);
         })
         .catch(next)
}

exports.getVisualizacionesByCreditos = async(req, res, next) => {
    const nom = "creditos";
    const regex = new RegExp(nom, 'i')
    await Visualizaciones.find({ tipoConsulta: regex })
         .then((response) => {
              res.status(200).json(response);
         })
         .catch(next)
}

exports.updateUserCont = async(req, res, next) => {
    await User.findByIdAndUpdate( req.params.id,{ $inc: { cont: 1}}, {new: true} )
    .then(() => res.status(200).json(`Contador ${req.params.id} incrementado`))
    .catch(next)
}
 

       


       
