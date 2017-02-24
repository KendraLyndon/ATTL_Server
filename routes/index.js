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

router.post('/email', function(req,req,next){

  //  setup email data
  let mailOptions = {
      from: '"ATTL" <attl.contact.proxy@gmail.com>', // sender address
      to: 'kendralyndon@gmail.com', // list of receivers
      subject: 'hello', // Subject line
      text: 'Hi Kendra, if you\'re getting this we have success!', // plain text body
      html: '<b>Hi Kendra, if you\'re getting this we have success!</b>' // html body
  };

  // send mail with defined transport object
  transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
          return console.log(error);
      }
      console.log('Message %s sent: %s', info.messageId, info.response);
  });
});

module.exports = router;
