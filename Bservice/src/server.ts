
import express from 'express'
import cron from 'node-cron'
import sendEmails from './EmailService/createOrder'
import WelcomeEmail from './EmailService/registerUser'

const app= express()

const run =()=>{
cron.schedule('*/ * * * * *', async() => {
  console.log('running a 30 seconds');
  await sendEmails()
  await WelcomeEmail()
})
}
run()


app.listen(8080, ()=>{
    console.log('App is Running ',8080);
    
})