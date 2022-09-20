import express, { json } from "express";
import { sqlConfig } from "./config";
import cors from 'cors'


import mssql from 'mssql'
import usersRoutes from './routes/users'
import parcelsRoutes from './routes/parcel' 
const connect  = async()=>{
    const pool = await mssql.connect(sqlConfig)
    if(pool.connected){
        console.log('connected')
    }
}
connect()


const app = express()
 app.use(json())
 app.use(cors())
 app.use('/parcels', parcelsRoutes)
app.use('/users', usersRoutes)
 




const PORT = process.env.PORT || 8000;
app.listen(PORT,()=>{
console.log(`server is running on port ${PORT}`);
    
})





// const connection = async() => {
//     try {
//         console.log(sqlConfig);
//         await sql.connect(sqlConfig)
//         console.log("connected");
        
//     } catch (error) {
//         console.log("error occured", error);
        
//     }
// }

// connection()