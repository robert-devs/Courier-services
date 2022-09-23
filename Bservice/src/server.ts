
import express from 'express'
import cron from 'node-cron'
import sendEmails from './EmailService/createOrder'
import deliverlyEmail from './EmailService/deliverlyServ'
import WelcomeEmail from './EmailService/registerUser'

const app= express()

const run =()=>{
  cron.schedule('*/30 * * * * *', async() => {
    console.log('WelcomeEmail running a 30 seconds');
    await WelcomeEmail()
  })

  cron.schedule('*/30 * * * * *', async() => {
    console.log('sendEmails running a 30 seconds');
    await sendEmails()
  })

  cron.schedule('*/50 * * * * *', async() => {
    console.log('sendEmails running a 50 seconds');
    await deliverlyEmail()
  })

}
run()


app.listen(8080, ()=>{
    console.log('App is Running ',8080);
    
})