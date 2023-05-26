const services = require ('../services/index')


function isAuth (req, res, next)  {
    if(!req.get('authorization')) {
        return res.status(403).json({message:'No existe autorización'})
    }

    const token = req.headers.authorization.split(' ')[1]
   
    services.verificarToken(token)
        .then(response => {console.log(response)
            req.user = response
            next()
        })
        .catch((response) => {
            res.status(response.status)
        })

}

module.exports = isAuth