const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

const app = express();
const port = 3000; // Change this to the desired port number

app.use(bodyParser.urlencoded({ extended: true }));

// Serve the static files (HTML, CSS, JS) from the public directory
app.use(express.static('public'));

// Route to handle form submission
app.post('/submit_form', (req, res) => {
  // Extract form data from the request body
  const name = req.body.nameInput;
  const email = req.body.emailInput;
  const phone = req.body.phoneInput;
  const location = req.body.locationInput;
  const postalCode = req.body.postalCodeInput;
  const sell = req.body.sellInput;
  const budget = req.body.budgetSelect;

  // Send the form data to the Google Workspace email account using nodemailer
  const transporter = nodemailer.createTransport({
    service: 'Gmail', // Change this to your email provider if not Gmail
    auth: {
      user: 'R.1010digital@gmail.com',
      pass: 'Azzam123',
    },
  });

  const mailOptions = {
    from: 'R.1010digital@gmail.com',
    to: 'R.1010digital@gmail.com', // Change this to your desired recipient email address
    subject: 'New Form Submission',
    text: `
      Name: ${name}
      Email: ${email}
      Phone: ${phone}
      Location: ${location}
      Postal Code: ${postalCode}
      What do you sell: ${sell}
      Budget: ${budget}
    `,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error sending email:', error);
      res.sendStatus(500);
    } else {
      console.log('Email sent:', info.response);
      res.sendStatus(200);
    }
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
