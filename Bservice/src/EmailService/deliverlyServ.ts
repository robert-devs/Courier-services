import mssql from 'mssql'
import { sqlConfig } from '../Config/config'
import ejs from 'ejs'
import sendMail from '../Helpers/Email'




interface Parcel {
  id:string
  name:string
  userId:string
  weight:string
  address:string
  destination:string
  price:string
  datetime:string
  issent:number
}








const sendEmails = async()=>{    
    const pool = await mssql.connect(sqlConfig)
    const parcels:Parcel[]= await(await pool.request().query(`SELECT * FROM parcels WHERE status='pending'`)).recordset
    

    for(let parcel of parcels){

    // get user by id using project.userId
    const users = await pool.request()
              .input('id',mssql.VarChar,parcel.userId)
              .execute('getUserById')
    const {recordset} = users  
    // console.log(recordset.length);
                
  
    if(recordset.length > 0){
      const user = recordset[0]

      // console.log(user);
      
     
      ejs.renderFile('Templates/parcelDelivered.ejs',{name:user.name,task:parcel.name} ,async(error,data)=>{
            if(error){
                console.log(error);
                return
            }

          let messageoption={
              from:process.env.EMAIL,
              to:`${user.email}`,
              subject:"SendIt-Courier",
              html:data,
              attachment:{
                content:`welcome`
              }
          }

          try {
              
              console.log('Sending Email');
              await sendMail(messageoption)
              await pool.request().query(`UPDATE parcels SET status='delivered' WHERE id = '${parcel.id}'`)
              console.log('Email is Sent');
              
          } catch (error) {
              console.log(error);
          }  
        })
      }
    }

}