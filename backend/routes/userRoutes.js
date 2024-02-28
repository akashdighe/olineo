// userRoutes.js
import express from 'express';
import { create, sendEmail } from '../controller/userController.js';

const route = express.Router();

route.post('/create', create);
route.post('/sendemail', sendEmail);

export default route;
