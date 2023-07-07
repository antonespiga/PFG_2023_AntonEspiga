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

    
    await Visualizaciones.find({'usuario': req.params.id},)
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
    // console.log(req.body)
    var cont = {}
    
     cont={ $inc: { contSemestre: 1}}
     //console.log(req.body.user.contSemestre)
    if(req.body.tipoConsulta==='tipo') cont = { $inc: { contTipo: 1, cont: 1}} 
    if(req.body.tipoConsulta==='nombre') cont = { $inc: { contNombre: 1, cont: 1}}     
    if(req.body.tipoConsulta==='creditos') cont = { $inc: { contCreditos: 1, cont: 1}} 
    if(req.body.tipoConsulta==='semestre') cont = { $inc: { contSemestre: 1, cont: 1}} 
    if(req.body.tipoConsulta==='imparticion') cont = { $inc: { contImparticion: 1, cont: 1}} 
    if(req.body.tipoConsulta==='titulo') cont = { $inc: { contTitulo: 1, cont: 1}} 
    if(req.body.tipoConsulta==='tematica') cont = { $inc: { contTematica: 1, cont: 1}} 
    if(req.body.tipoConsulta==='profesor') cont = { $inc: { contProfesor: 1, cont: 1}} 
    if(req.body.tipoConsulta==='director') cont = { $inc: { contDirector: 1, cont: 1}} 
    if(req.body.tipoConsulta==='afinidad') cont = { $inc: { contAfinidad: 1, cont: 1}} 

    await User.findByIdAndUpdate( req.params.id, cont, {new: true} )
    .then(() => res.status(200).json(`Contador ${cont} incrementado`))
    .catch(next)
}

exports.getVisualizacionMasFrecuente = async (req, res, next) => {
     console.log(req.params)
     await Visualizaciones.aggregate([
          {
               $match: { usuario:req.params.id }
          },
          {
               $group: {
                    _id: { usuario: '$usuario', campo: '$campo'},
                    count: { $sum: 1}
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
    .then((response) =>{ console.log(response)
     res.status(200).json(response[0].campo)})
    .catch(next)
}
 

       


       
