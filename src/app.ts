import 'dotenv/config';
import http from 'http';
import { Server } from 'socket.io';
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

const serverHttp = http.createServer(app);

const io = new Server(serverHttp, {
  cors: {
    origin: '*',
  }
});

io.on("connection", socket => logger.info(`New client connected ${socket.id}`));

export { app, serverHttp, io };
