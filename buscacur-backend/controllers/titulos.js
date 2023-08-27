const Titulo = require ('../models/titulos')

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
    nuevoTitulo = new Titulo (req.body)
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

exports.getArrayTitulos = async (req, res, next) => {
    const codigos = req.query.codigos
    if(!codigos)  {
        res.status(500).json({message:'error: no existen códigos para buscar'})
        return
        }
    const arr = codigos[0].replace(/\s+/g, '').split(',')
    const titulos = []
   try { 
    await Promise.all(arr.map(async(element) => {
        const ttl = await Titulo.findOne( {id:Number(element) }, {'_id':0 , 'titulo':1})
            titulos.push(ttl.titulo)
            }))
            if(titulos.length>0) res.status(200).json(titulos)
            else res.status(500).json({message:'error.message'})
        } catch(error) {
        console.error('Error al buscar el título', error)
        res.status(500).json(error)
        }
    } 
 
