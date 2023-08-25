// const { info } = require("console");
const nodemailer = require("nodemailer");

const sendemail = async (req, resp) =>{
    let testAccount = await nodemailer.createTestAccount();

let transporter = await nodemailer.createTransport({ 
    host: 'smtp.ethereal.email', 
    port: 587, 
     auth: { user: 'nicolas.rowe@ethereal.email', pass: 'JgVPm5wbkZh7jAsztm' } });
  let info =  await  transporter.sendMail({ from: 'mandseana@gmail.com', to: 'divanshujain3451@gmail.com', 
     subject: 'Hello from prakash', 
     text: 'Hello, Bhai ky kar raha hai' });
     console.log("message sent : ",info.messageId)
     resp.json(info)
}
module.exports  = sendemail;