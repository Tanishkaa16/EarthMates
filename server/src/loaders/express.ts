import bodyParser from 'body-parser';
import cors from 'cors';
import type express from 'express';
import helmet from 'helmet';
import routes from '../api';
import config from '../config';
import { errorHandler } from '../shared/middlewares/errorHandler';

export default ({ app }: { app: express.Application }): void => {
  app.enable('trust proxy');
  app.use(helmet());
  app.use(cors());
  app.use(bodyParser.json());
  app.use(config.api.prefix, routes());
  app.use(errorHandler);
};
