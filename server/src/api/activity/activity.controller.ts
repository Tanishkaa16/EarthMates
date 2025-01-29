import {
  type NextFunction,
  type Request,
  type Response,
  Router,
} from 'express';
import { handleGetActivity } from './activity.service';

export const getActivity = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { username, month } = req.body;
    const response = await handleGetActivity(username, month);
    res.status(200).json({ response });
  } catch (error) {
    next(error);
  }
};

export default (): Router => {
  const app = Router();
  app.get('/', getActivity);
  return app;
};
