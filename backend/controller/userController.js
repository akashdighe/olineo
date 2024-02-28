import User from '../model/userModel.js';
import nodemailer from 'nodemailer';
import Mailgen from 'mailgen';
import otpGenrater from './otpGenrater.js';

export const create = async (req, res) => {
  try {
    const otp = otpGenrater();
    const userData = new User({
      ...req.body,
      otpSpin: otp,
    });
    if (!userData) {
      return res.status(404).json({ msg: 'user data not found' });
    }
    const saveData = await userData.save();
    res.status(200).json(saveData);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const sendEmail = async (req, res) => {
  try {
    const Email = req.body.email;
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
      },
    });

    const mailGenerator = new Mailgen({
      theme: 'default',
      product: {
        name: 'Mailgen',
        link: 'https://mailgen.js/',
      },
    });

    const email = {
      body: {
        name: req.body.name,
        intro: `Otp Verification Spin: ${req.body.otpSpin}`,
      },
    };

    const emailBody = mailGenerator.generate(email);
    const emailText = mailGenerator.generatePlaintext(email);

    const mailOptions = {
      from: process.env.MAIL_USER,
      to: Email,
      subject: 'Verification',
      text: emailText,
      html: emailBody,
    };

    transporter.sendMail(mailOptions, (error) => {
      if (error) {
        return res.status(500).json({ message: 'Failed to send OTP email' });
      }
      return res.status(200).json({ message: 'OTP sent successfully' });
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};