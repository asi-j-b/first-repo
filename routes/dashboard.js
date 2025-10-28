import express from 'express';
import * as dashboard from '../controllers/dashboard.js';

export const dashboardRouter = express.Router();

dashboardRouter.get('/dashboard', dashboard.index);