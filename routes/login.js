import express from 'express';
import * as login from '../controllers/login.js';

export const loginRouter = express.Router();

loginRouter.get('/login', login.index);