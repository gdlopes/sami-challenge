import 'reflect-metadata';
import 'express-async-errors';

import express, { Request, Response, NextFunction } from 'express';
import mongoose from 'mongoose';

import AppError from './middlewares/AppError';
import routes from './routes';

import './container';

const app = express();

mongoose.connect('mongodb://mongo/sami', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false
})
  .then(db => console.log('DATABASE CONNECTED'))
  .catch(err => console.error(err));

app.use(express.json());
app.use(routes);

app.use((err: Error, request: Request, response: Response, _: NextFunction) => {
  if (err instanceof AppError) {
    return response.status(err.statusCode).json({
      status: 'error',
      message: err.message
    });
  }

  return response.status(500).json({
    status: 'error',
    message: 'Internal Server Error'
  });
});

export default app;
