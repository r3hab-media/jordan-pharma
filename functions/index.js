const functions = require("firebase-functions");
const admin = require("firebase-admin");
const nodemailer = require("nodemailer");

admin.initializeApp();

const transporter = nodemailer.createTransport({
	host: "smtp.gmail.com",
	port: 465,
	secure: true,
	auth: {
		user: "fallingstone79@gmail.com",
		pass: "vofedfkgytmanbgi",
	},
});

exports.corsEnabledFunction = (req, res) => {
  res.set("Access-Control-Allow-Origin", "*");

  if (req.method === "OPTIONS") {
    res.set("Access-Control-Allow-Methods", "GET");
    res.set("Access-Control-Allow-Headers", "Content-Type");
    res.set("Access-Control-Max-Age", "3600");
    res.status(204).send("");
  } else {
    res.send("Hello World!");
  }
};

exports.sendMailOverHTTP = functions.https.onRequest((req, res) => {
  const { name, company, email, phone, message } = req.body;
  const mailOptions = {
    from: "peter.jordan@jordan-pharma.com",
    to: "peter.jordan@jordan-pharma.com",
    subject: "Jordan Pharmaceuticals | Contact Form Message",
    html: `
      <h1>Contact Form Message</h1>
      <p>
        <b>Full Name: </b>${name}<br>
        <b>Company Name: </b>${company}<br>
        <b>Email: </b>${email}<br>
        <b>Phone: </b>${phone}<br>
        <b>Message: </b>${message}<br>
      </p>`,
  };

  transporter.sendMail(mailOptions, (error, data) => {
    if (error) {
      res.send(error.toString());
    } else {
      res.send(`Sent! ${JSON.stringify(data)}`);
    }
  });
});
