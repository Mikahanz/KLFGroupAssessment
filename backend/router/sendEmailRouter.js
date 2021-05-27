import express from 'express';
import { contactUsSendEmail } from '../controllers/sendEmailController.js';

const router = express.Router();

// @desc send email
// @route POST /api/sendemail
// @access public
router.route('/api/sendemail').post(contactUsSendEmail);

export default router;
