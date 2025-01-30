import bcrypt from 'bcryptjs';
import db from '../../loaders/db';
import { ROUNDS } from '../../shared/constants';
import { ERRORS } from '../../shared/errors';
import generateToken from '../../shared/middlewares/jwt';
import type { UserSchemaType } from '../user/user.schema';
import type { AuthSchemaType } from './auth.schema';

export async function usernameExists(username: string): Promise<boolean> {
  const userCollection = (await db()).collection<UserSchemaType>('user');
  const existingUser = await userCollection.findOne({
    username: { $regex: new RegExp(username, 'i') },
  });
  if (existingUser) {
    return true;
  }
  return false;
}

export async function handleSignUp({
  username,
  password,
  email,
}: AuthSchemaType) {
  const usersCollection = (await db()).collection<UserSchemaType>('user');
  const exists = await usernameExists(username);

  if (exists) {
    throw {
      statusCode: ERRORS.USER_ALREADY_EXISTS.code,
      message: ERRORS.USER_ALREADY_EXISTS.message.error,
    };
  }

  const hash = await bcrypt.hash(password, ROUNDS);

  const newUser: UserSchemaType = {
    username,
    password: hash,
    email,
    events: [],
    points: 0,
    badges: [],
    activity: [],
  };
  await usersCollection.insertOne(newUser);
}

export async function handleLogin({
  username,
  password,
}: AuthSchemaType): Promise<string> {
  const usersCollection = (await db()).collection<UserSchemaType>('user');
  const data = await usersCollection.findOne({ username: username });

  if (!data) {
    throw {
      statusCode: ERRORS.USER_NOT_FOUND.code,
      message: ERRORS.USER_NOT_FOUND.message.error,
    };
  }
  const pswd = password;
  const res = bcrypt.compare(pswd, password);

  if (!res) {
    throw {
      statusCode: ERRORS.UNAUTHORIZED.statusCode,
      message: ERRORS.UNAUTHORIZED.message.error,
    };
  }

  return generateToken(username);
}
