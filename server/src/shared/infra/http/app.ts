import 'express-async-errors';
import express, { NextFunction, Request, Response } from 'express';
import uploadConfig from '@config/upload';
import AppError from '../../errors/AppError';
import router from './routes';

const app = express();

app.use(express.json());
app.use('/static', express.static(uploadConfig.uploadsFolder));
app.use(router);

app.use((err: Error, request: Request, response: Response, _: NextFunction) => {
  if (err instanceof AppError) {
    return response.status(err.statusCode).json({
      status: 'error',
      message: err.message,
    });
  }
  console.error(err);
  return response.status(500).json({
    status: 'error',
    error: err.message,
    message: 'Internal server error',
  });
});

export default app;
