const nodemailer = require("nodemailer");

const sendemail = async (req, resp) => {
  try {
    let transporter = nodemailer.createTransport({
      host: 'smtp.ethereal.email',
      port: 587,
      auth: {
        user: 'porter.kub74@ethereal.email',
        pass: '6Mq3UBbQtpEPXE1fWq'
      }
    });

    let info = await transporter.sendMail({
      from: 'porter.kub74@ethereal.email',
      to: 'prakashkumarrathour247@gmail.com',
      subject: 'Hello from prakash',
      text: 'Hello, Bhai ky kar raha hai'
    });

    console.log("Message sent: ", info.messageId);
    resp.json(info);
  } catch (error) {
    console.error("Error sending email: ", error);
    resp.status(500).json({ error: "Failed to send email" });
  }
};

module.exports = sendemail;
