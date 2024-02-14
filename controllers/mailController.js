const nodemailer = require("nodemailer");
require("dotenv").config();

const sendMail = (req, res) => {
  const { name, entityName, email, phone } = req.body;
  console.log(name, entityName, email, phone);

  let config = {
    service: "gmail",
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASS,
    },
  };

  let transporter = nodemailer.createTransport(config);
  let message = {
    from: process.env.EMAIL,
    to: "archmohamed2008@gmail.com",
    subject: "Place Order",
    html: `<b>Hello world?</b><br />
    ${name}<br/>
    ${entityName}<br/>
    ${phone}<br/>
    ${email}<br/>
    
    `,
  };

  transporter
    .sendMail(message)
    .then(() => {
      return res.status(201).json({
        msg: "you should receive an email",
      });
    })
    .catch((error) => {
      return res.status(500).json({ error });
    });
};

module.exports = { sendMail };
