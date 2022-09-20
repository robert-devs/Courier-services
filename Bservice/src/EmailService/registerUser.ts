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

 for(let user of users){

    ejs.renderFile('templates/registration.ejs',{name:user.name} ,async(error,data)=>{

        let messageoption={
            from:process.env.EMAIL,
            to:user.email,
            subject:"Welcome To SendIT, Thanks for Signing Up!",
            html:data,
            attachments:[
                {
                    filename:'user.text',
                    content:`Welcome email: ${user.name}`
                }
            ]
        }

        try {
            console.log("sending email");
            
            await sendMail(messageoption)
            await db.exec('updateWelcome',{id: user.id})
            console.log('email sent');
            
        } catch (error) {
            console.log(error);
            
        }


    })

 }


}

export default WelcomeEmail

