import nodemailer from 'nodemailer'

const { SERVER_EMAIL, EMAIL, EMAIL_PASS } = process.env

export const transporter = nodemailer.createTransport({
  host: SERVER_EMAIL,
  port: 578,
  secure: false,
  auth: {
    user: EMAIL,
    pass: EMAIL_PASS,
  },
  tls: {
    rejectUnauthorized: false,
  },
})

transporter.verify().then(() => {
  console.log('Ready to send email.')
})

export const mailOptions = {
  from: EMAIL,
  to: EMAIL,
}
