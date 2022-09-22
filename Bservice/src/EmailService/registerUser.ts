import ejs from 'ejs'
import mssql from 'mssql'
import dotenv from 'dotenv'
import Connection from '../dataBasehelper/dbemails'
import sendMail from '../Helpers/Email'
import { sqlConfig } from '../Config/config'

const db = new Connection();

dotenv.config()



interface User{
    id:any,
    name:string
    email: string,
 
}


const WelcomeEmail= async()=>{

const users:User[]=  await (await db.exec('welcome')).recordset


    Promise.all(users.map((user, i)=>{
        ejs.renderFile('Templates/registration.ejs',{name:user.name} ,async(error,data)=>{
    
            let messageoption={
                from:process.env.EMAIL,
                to:user.email,
                subject:"Welcome To SendIT, Thanks for Signing Up!",
                html:data,
            }
    
            try {
                console.log("sending welcome email to ", user.email);
                
                await sendMail(messageoption)
                await db.exec('updateWelcome',{id: user.id})
                console.log('welcome email sent to', user.email);
                
            } catch (error) {
                console.log(error);
                
            }
    
    
        })
    }))
    


}

export default WelcomeEmail

