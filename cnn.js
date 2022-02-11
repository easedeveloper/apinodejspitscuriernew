const pgPromise = require("pg-promise")
const config = {
  // configuracion para la base de datos posgres en heroku
    user: 'pitscourier_postgres',
    host: '157.90.181.209',
    database: 'pitscourier_basenexdemo',
    password: '!agrc5i5!!',
    port: '5432',
    ssl: {
      rejectUnauthorized : false,
      ca   : fs.readFileSync("server-ca.pem").toString(),
      key  : fs.readFileSync("client-key.pem").toString(),
      cert : fs.readFileSync("client-cert.pem").toString(),
}

      
}
const pgp = pgPromise({})
const db = pgp(config)
exports.db=db;  