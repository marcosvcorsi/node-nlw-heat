import express from 'express';
import cors from 'cors';
import pinoHttp from 'pino-http';

import { logger } from './utils/logger';

const app = express();

app.use(cors());
app.use(express.json());
app.use(pinoHttp());


const port = process.env.PORT || 3333;

app.listen(port, () => logger.info(`Server started on port ${port}`));
