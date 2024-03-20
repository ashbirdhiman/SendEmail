const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors'); // Import the cors middleware
const dotenv = require('dotenv').config();

const port = process.env.SERVER_PORT || 3000;
const app = express();
app.use(bodyParser.json());
app.use(cors()); // Use the cors middleware to allow all origins

app.post('/send-email', async (req, res) => {
  const { to, subject, message } = req.body;

  let transporter = nodemailer.createTransport({
    host: 'host-mail-address',
    port: 465,
    secure: true,
    auth: {
      user: 'user-email',
      pass: 'user-password'
    }
  });

  try {
    let info = await transporter.sendMail({
      from: 'user emailt',
      to: to,
      subject: subject,
      text: message
    });
    console.log('Email sent: ' + info.response);
    res.status(200).json({ message: 'Email sent successfully' });
  } catch (err) {
    console.error('Error sending email: ' + err.message);
    res.status(500).json({ error: 'An error occurred while sending email' });
  }
});

app.get('/api/v1', (req, res) => res.json("Server Working..."));
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
