import express from 'express';
import * as index from '../controllers/index.js';

export const indexRouter = express.Router();

indexRouter.get('/', index.index);