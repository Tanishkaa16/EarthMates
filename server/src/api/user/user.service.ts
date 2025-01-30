import { nanoid } from 'nanoid';
import db from '../../loaders/db';
import { minioClient } from '../../loaders/minIO';
import { ERRORS } from '../../shared/errors';
import { usernameExists } from '../auth/auth.service';
import type { PostSchemaType } from './user.schema';

export async function handleMakePost(
  file: Express.Multer.File,
  tag: string,
  description: string,
  username: string,
): Promise<void> {
  const imageUrl = await uploadImage(file, username);
  const postId = nanoid(10);
  const newPost: PostSchemaType = {
    postId,
    imageUrl,
    tag,
    description,
    username,
  };
  const postCollection = (await db()).collection<PostSchemaType>('posts');
  const posted = await postCollection.insertOne(newPost);
  if (!posted) {
    throw {
      statusCode: ERRORS.POST_CREATION_FAILED.statusCode,
      message: ERRORS.POST_CREATION_FAILED.message.error,
    };
  }
}

export async function handleGetPosts(username: string) {}

export async function uploadImage(file: Express.Multer.File, username: string) {
  const userExists = usernameExists(username);
  if (!userExists) {
    throw {
      statusCode: ERRORS.USER_NOT_FOUND.code,
      message: ERRORS.USER_NOT_FOUND.message.error,
    };
  }
  const destinationObject = `${username}/${file.originalname}`;
  const bufferFile = file.buffer;

  const BUCKET_NAME = 'images';

  const bucketExists = await minioClient.bucketExists(BUCKET_NAME);
  if (!bucketExists) {
    await minioClient.makeBucket(BUCKET_NAME, 'ap-south-1');
  }

  const result = await minioClient.putObject(
    BUCKET_NAME,
    destinationObject,
    bufferFile,
  );
  const etag = result.etag;

  if (!etag) {
    throw {
      statusCode: ERRORS.IMAGE_UPLOAD_FAILED.statusCode,
      message: ERRORS.IMAGE_UPLOAD_FAILED.message.error,
    };
  }
  const imageUrl = `${process.env.MINIO_ENDPOINT}/${BUCKET_NAME}/${destinationObject}`;
  return imageUrl;
}
