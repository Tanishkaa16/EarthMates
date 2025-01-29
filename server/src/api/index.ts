import { Router } from 'express';
import activityController from './activity/activity.controller';
export default (): Router => {
  const app = Router();

  app.use('/activity', activityController());

  return app;
};
