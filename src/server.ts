import 'dotenv/config';
import express, { NextFunction, Request, Response } from 'express';
import 'express-async-errors';
import cors from 'cors';

import { logger } from './utils/logger';
import { routes } from './routes';

const app = express();

app.use(cors());
app.use(express.json());

app.use(routes);

app.use((
  error: Error, 
  request: Request, 
  response: Response, 
  _: NextFunction
) => {
  logger.error(error);
 
  return response.status(500).json({
    message: 'Internal server error',
  })
});

const port = process.env.PORT || 3333;

app.listen(port, () => logger.info(`Server started on port ${port}`));
