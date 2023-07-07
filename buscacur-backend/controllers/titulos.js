
const { stdout, stdin } = require('process');
const Titulo = require ('../models/titulos')
const {exec} = require('child_process')
const config = require('../config')


exports.getTitulos = async(req, res, next)  => {
    await Titulo.find({})
    .then(function ( listTitulos) {
               res.status(200).json(listTitulos);})
    .catch(next)
         }


exports.getTitulo = async(req, res, next)  => {
const ID = Number(req.params.id)
await Titulo.findOne({id:ID},{'_id':0 , 'titulo':1})
    .then(function ( Titulo) {
              res.status(200).json(Titulo);})
    .catch((error) => {
        console.error('Error al buscar el título', error)
        next(error)
    })
         }

exports.addTitulo = async(req, res, next) => {
    try{
    nuevoTitulo = new CursTituloo (req.body)
    await Titulo.create(nuevoTitulo)
    .then(() => res.status(200).json('Registro guardado'))
    }
    catch(error) {
        res.status(500).json({message: error.message})
    }
}

exports.deleteTitulo  = async (req, res, next) => {
    await Titulo.findOneAndDelete(req.params.id)
    .then(() => res.status(200).json('Registro eliminado'))
    .catch(next)
}

exports.updateTitulo = async (req, res, next) => {
    await Titulo.findOneAndUpdate(req.params.id, req.body, {new:true})
    .then(() => res.status(200).json('Registro modificado'))
    .catch(next)
}

