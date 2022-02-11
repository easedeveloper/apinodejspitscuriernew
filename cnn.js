const pgPromise = require("pg-promise")
let ssl = null;
if (process.env.NODE_ENV === 'development') {
   ssl = {rejectUnauthorized: false};
}

const config = {
  // configuracion para la base de datos posgres en heroku
    user: 'pitscourier_postgres',
    host: '157.90.181.209',
    database: 'pitscourier_basenexdemo',
    password: '!agrc5i5!!',
    port: '5432'
    

      
}
const pgp = pgPromise({})
const db = pgp(config)
exports.db=db;  