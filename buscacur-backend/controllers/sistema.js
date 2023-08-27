const { spawn, exec } = require('child_process')
const config = require('../config')
const fs = require('fs-extra')
const path = require('path')
const pathToConfig = path.join(__dirname, 'config.js')
const pathOther = path.resolve(__dirname, '../config.js')

function backupBd(req, res) {

    const timeStamp = new Date(Date.now()).toISOString().replace(/:/g, '-')
    const backupPath = `${config.path_BACKUP}${timeStamp}`
    const comando = `mongodump --db=dbCursos --out=${backupPath}`
    exec(comando, (error, stdout, stderr) => {
        if (error) {
            console.error(`Error al realizar la copia de seguridad: ${error.message}`)
            return res.status(500).json('Error al crear la copia de seguridad')
        }
        if (!stderr) {
            console.error(`Error al hacer la copia de seguridad: ${stderr}`)
            return res.status(500).json('Error al crear la copia de seguridad')
        }
        else {
            console.error(`Copia de seguridad creada ${stdout}`)
            return res.status(200).json({ message: 'Copia de seguridad creada', stderr, stdout })
        }
    })
}

function configurar(req, res) {
    console.log(pathToConfig)
    console.log(pathOther)
    config.SECRET_TOKEN = req.body.secret || config.SECRET_TOKEN
    config.db = req.body.database || config.db
    config.path_BACKUP = req.body.path || config.path_BACKUP

    console.log(`module.exports = ${JSON.stringify(config, null, 2)}`)
    fs.writeFile(pathOther, `module.exports = ${JSON.stringify(config, null, 2)}`, err => {
        if (err) {
            console.error('Error al guardar configuración')
            res.status(500).json({ message: 'Error al configurar', error: err })
        }
        else {
            console.log('Configuración guardada')
            return res.status(200).json('Configuración guardada')
        }
    })
}

function getConfig(req, res) {
    const configData = {
        secret: process.env.VITE_SECRET_TOKEN || config.SECRET_TOKEN,
        database: process.env.VITE_MONGODB_URI || config.db,
        port: process.env.VITE_PORT || config.port,
        path: process.env.VITE_PATH_BACKUP || config.path_BACKUP
    }
    return res.status(200).json({ message: 'Datos de configuración enviados', configData })
}

function stop(req, res) {
    const direct = path.resolve(__dirname, '..')
    console.log(direct)
    const logfile = 'path_to_the_log_file.log';
    const out = fs.openSync(logfile, 'a');
    const err = fs.openSync(logfile, 'a');
    console.log(process.argv)
    spawn(process.argv[1], process.argv.slice(2), {
        detached: true,
        stdio: ['ignore', out, err]
    }).unref()
    process.exit()
        .then(() => {
            console.log('reinicio')
            start()
        })
}

function start(req, res) {
    exec(' cd ..', { cwd: direct })
        .then(() => console.log('reinicio'))
}

function restart() {
    stop()
        .then(() => {
            start()
        })

}


module.exports = { configurar, backupBd, getConfig, restart, start }