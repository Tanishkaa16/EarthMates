import { Router } from 'express';
import activityController from './activity/activity.controller';
import authController from './auth/auth.controller';
export default (): Router => {
  const app = Router();

  app.use('/activity', activityController());
  app.use('/auth', authController());

  return app;
};
