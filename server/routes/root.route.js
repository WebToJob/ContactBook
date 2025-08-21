import { Router } from 'express';
import contactRoute from './contact.route.js';

const RootRoute = Router();
RootRoute.use('/contact', contactRoute);

export default RootRoute;
