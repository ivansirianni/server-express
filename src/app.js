import { envs } from './config/env.js'
import { startServer } from './server/server.js'
//const { envs } = require('./config/env') forma antigua de importar
//const { startServer } = require('./server/server') forma antigua de importar


const main = () =>{
    startServer({
        port: envs.PORT,
        public_path: envs.PUBLIC_PATH
    })
}

//funcion agnostica autoconvocada
//*Agnostica por que no tiene nombre
//*Autoconvocada por que se ejecuta finalizando con ()
(async() => {
    main()
})()