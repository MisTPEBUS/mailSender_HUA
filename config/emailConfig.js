const dotenv = require('dotenv');

dotenv.config({ path: '../config.env' });

module.exports = {
  host: process.env.MAILHOST,
  port: process.env.MAILPORT,  // SMTP port
  secure: false,  // true for 465, false for other ports
  auth: {
    user: process.env.MAIL_AUTH_USER,  // your email address
    pass: process.env.MAIL_AUTH_PWD, // your email password
  },
  tls: {
    rejectUnauthorized: false  // do not fail on invalid certs
  }
  };
  