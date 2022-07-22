const functions = require("firebase-functions");
const admin = require("firebase-admin")
const nodemailer = require('nodemailer');
admin.initializeApp()

exports.corsEnabledFunction = (req, res) => {
  // Set CORS headers for preflight requests
  // Allows GETs from any origin with the Content-Type header
  // and caches preflight response for 3600s

  res.set('Access-Control-Allow-Origin', '*');

  if (req.method === 'OPTIONS') {
    // Send response to OPTIONS requests
    res.set('Access-Control-Allow-Methods', 'GET');
    res.set('Access-Control-Allow-Headers', 'Content-Type');
    res.set('Access-Control-Max-Age', '3600');
    res.status(204).send('');
  } else {
    res.send('Hello World!');
  }
};

var transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
      user: 'fallingstone79@gmail.com',
      pass: 'vofedfkgytmanbgi'
  }
});

exports.sendMailOverHTTP = functions.https.onRequest((req, res) => {
  const mailOptions = {
      from: `peter.jordan@jordan-pharma.com`,
      to: `peter.jordan@jordan-pharma.com`,
      subject: 'Jordan Pharmaceuticals | Contact Form Message',
      html: `<h1>Contact Form Message</h1>
              <p>
                <b>Full Name: </b>${req.body.name}<br>
                <b>Company Name: </b>${req.body.company}<br>
                <b>Email: </b>${req.body.email}<br>
                <b>Phone: </b>${req.body.phone}<br>
                <b>Message: </b>${req.body.message}<br>
              </p>`
  };
  return transporter.sendMail(mailOptions, (error, data) => {
      if (error) {
          return res.send(error.toString());
      }
      var data = JSON.stringify(data)
      return res.send(`Sent! ${data}`);
  });
});

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

//oyiuskfosfsnokvh
/* <p>
  <b>Full Name: </b>${req.body.name}<br>
  <b>Company Name: </b>${req.body.company}<br>
  <b>Email: </b>${req.body.email}<br>
  <b>Phone: </b>${req.body.phone}<br>
  <b>Message: </b>${req.body.message}<br>
</p> */
