import env from 'dotenv'
//require('dotenv').config();
import envar from 'env-var';
//const { get } = require('env-var');



env.config() //para traer el import 

export const envs = {
    PORT: envar.get('PORT').required().asPortNumber(),
    PUBLIC_PATH: envar.get(`PUBLIC_PATH`).default('public').asString()
}

