import express from 'express';
const siteRoute = express.Router();

import { authRoute } from '../handlers/authentication/authenticationroute.js';

siteRoute.use('/auth', authRoute);


export { siteRoute };