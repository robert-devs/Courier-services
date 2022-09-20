//configuration to mysql db


// export interface config{

// }
// export const sqlConfig = {
//     user: "SA",
//     password: "Abcd1234",
//     database: "SendIT",
//     server: "localhost",
//     pool: {
//     max: 10,
//     min: 0,
//     idleTimeoutMillis: 30000
//   },
//   options: {
//     trustedConnection: true,
//     encrypt: true,
//     enableArithAbort: true,
//     trustServerCertificate: true,
//   }
// }

import dotenv from 'dotenv'
dotenv.config()

 export const sqlConfig = {
  user: process.env.DB_USER as string,
  password: process.env.DB_PWD as string,
  database: process.env.DB_NAME as string,
  server: 'localhost',
  pool: {
    max: 10,
    min: 0,
    idleTimeoutMillis: 30000
  },
  options: {
    encrypt: false, // for azure
    trustServerCertificate: false // change to true for local dev / self-signed certs
  }
}




