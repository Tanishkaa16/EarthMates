import {
  type NextFunction,
  type Request,
  type Response,
  Router,
} from 'express';
import { MESSAGES } from '../../shared/constants';
import { ERRORS } from '../../shared/errors';
import { fileUpload } from '../../shared/middlewares/multer';
import { handleGetPosts, handleMakePost } from './user.service';

export const makePost = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const { tag, description, username } = req.body;
  const file = req.file;
  if (!file) {
    throw {
      statusCode: ERRORS.FILE_UPLOAD_FAILED.statusCode,
      message: ERRORS.FILE_UPLOAD_FAILED.message.error,
    };
  }
  try {
    await handleMakePost(file, tag, description, username);
    res.status(200).json({
      success: true,
      message: MESSAGES.POST_CREATED,
    });
  } catch (error) {
    next(error);
  }
};

export const getPosts = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const { username } = req.body;
  try {
    const token = await handleGetPosts(username);
    res.status(200).json({
      success: true,
      message: MESSAGES.FETCHED_POSTS,
    });
  } catch (error) {
    next(error);
  }
};

export default (): Router => {
  const app = Router();
  app.post('/post', fileUpload.single('file'), makePost);
  app.get('/post', getPosts);
  return app;
};
