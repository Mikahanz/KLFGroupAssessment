import asyncHandler from 'express-async-handler';
import sendEmail from '../utils/sendEmail.js';

// @desc send email
// @route POST /api/sendemail
// @access public
const contactUsSendEmail = asyncHandler(async (req, res) => {
  const email = req.body.email;
  const name = req.body.name;
  const subject = req.body.subject;
  const message = req.body.message;

  try {
    await sendEmail({
      email: email,
      name: name,
      subject: subject,
      message: message,
    });

    res
      .status(200)
      .json({ success: true, resultText: 'Email Successfuly Sent' });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, resultText: 'Email Delivery Failed' });
  }
});

export { contactUsSendEmail };
