import { Router } from 'express';
import activityController from './activity/activity.controller';
import authController from './auth/auth.controller';
import userController from './user/user.controller';
export default (): Router => {
  const app = Router();

  app.use('/activity', activityController());
  app.use('/auth', authController());
  app.use('/user', userController());

  return app;
};
