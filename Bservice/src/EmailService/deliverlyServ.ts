import mssql from 'mssql'
import { sqlConfig } from '../Config/config'
import ejs from 'ejs'
import sendMail from '../Helpers/Email'
import Connection from '../dataBasehelper/dbemails'
const db = new Connection();
import dotenv from 'dotenv'

dotenv.config()



interface Parcel {
  parcelId:string
  name:string
  userId:string
  weight:string
  address:string
  destination:string
  price:string
  datetime:string
  issent:number
}








  
const deliverlyEmail= async()=>{

        const parcels:Parcel[]=  await (await db.exec('upadteStatus')).recordset
        
        
            Promise.all(parcels.map((parcel, i)=>{
                ejs.renderFile('Templates/registration.ejs',{name:parcel.name} ,async(error,data)=>{
            
                    let messageoption={
                        from:process.env.EMAIL,
                        to:parcel.name,
                        subject:"Welcome To SendIT, Thanks for Signing Up!",
                        html:data,
                    }
            
                    try {
                        console.log("sending deliverly email to ", parcel.name);
                        
                        await sendMail(messageoption)
                        await db.exec('updateWelcome',{id: parcel.parcelId})
                        console.log('welcome delivery sent to', parcel.name);
                        
                    } catch (error) {
                        console.log(error);
                        
                    }
            
            
                })
            }))
            
        
        
        }


export default deliverlyEmail