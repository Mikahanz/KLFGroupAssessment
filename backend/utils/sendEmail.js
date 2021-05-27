import nodemailer from 'nodemailer';

const sendEmail = async (options) => {
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    auth: {
      user: process.env.SMTP_EMAIL,
      pass: process.env.SMTP_PASSWORD,
    },
  });

  const message = {
    from: `${options.name} <${options.email}>`,
    to: process.env.EMAIL_FROM,
    subject: options.subject,
    text: options.message,
  };

  const info = await transporter.sendMail(message);

  console.log(`Message sent: ${info.messageId}`);
};

export default sendEmail;
