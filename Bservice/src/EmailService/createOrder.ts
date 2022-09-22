import mssql from 'mssql'
import { sqlConfig } from '../Config/config'
import ejs from 'ejs'
import sendMail from '../Helpers/Email'
// import Connection from '../dataBasehelper/dbemails'


interface Parcel{
    userId:string
    name:string
    address:string
    destination:string
    price:string
    id:string
    weight:string
    datetime:string

}

const SendEmails= async()=>{    
    const pool = await mssql.connect(sqlConfig)
    const parcels:Parcel[]= await(await pool.request().query(`SELECT * FROM parcels WHERE issent='0'`)).recordset
    

    for(let parcel of parcels){

    // get user by id using parcel.userId
    const users = await pool.request()
              .input('id',mssql.VarChar,parcel.userId)
              .execute('getUserById')
              const{recordset} = users              
  
    if(recordset.length > 0){
      const user = recordset[0]

      console.log({user});
      
      
      ejs.renderFile('Templates/parcel.ejs',{name:user.name,task:parcel.name} ,async(error,data)=>{
            if(error){
                console.log(error);
                return
            }

          let messageoption={
              from:process.env.EMAIL,
              to:user.email,
              subject:"SendIT-courier",
              html:data
          }

          try {
              
              console.log('Sending orders Email');
              await sendMail(messageoption)
              await pool.request().query(`UPDATE parcels SET issent='1' WHERE id = '${parcel.id}'`)
              console.log('orders Email is Sent');
              
          } catch (error) {
              console.log(error);
          }  
        })
      }
    }

}

export default SendEmails

