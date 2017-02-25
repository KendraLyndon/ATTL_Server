const nodemailer = require('nodemailer');
var express = require('express');
var router = express.Router();

// create reusable transporter object using the default SMTP transport
let transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'attl.contact.proxy@gmail.com',
    pass: '987iuySDFqwe1236'
  }
});

router.post('/email', function(req, res, next){
  console.log(req.body);
  //  setup email data
  let mailOptions = {
      from: '"ATTL" <attl.contact.proxy@gmail.com>', // sender address
      to: 'kendralyndon@gmail.com', // list of receivers
      subject: 'category: ' + req.body.category + ' subject: ' + req.body.subject, // Subject line
      text: req.body.message, // plain text body
      html: `<p><b>REPLY TO:</b> ${req.body.email}</p>
              <p>${req.body.message}</p>`  // html body
  };

  // send mail with defined transport object
  transporter.sendMail(
    mailOptions, (error, info) => {
      if (error) {
          return console.log(error);
      }
      console.log('Message %s sent: %s', info.messageId, info.response);
  });
});

module.exports = router;
