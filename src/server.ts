import { logger } from './utils/logger';
import { serverHttp } from './app';

const port = process.env.PORT || 3333;

serverHttp.listen(port, () => logger.info(`Server started on port ${port}`));
