import config from '../../config';
import db from '../../loaders/db';
import { ERRORS } from '../../shared/errors';
import type { UserSchemaType } from '../user/user.schema';
import type { activitySchemaType } from './activity.schema';

export async function handleGetActivity(username: string, month: string) {
  const userCollection = (await db()).collection<UserSchemaType>('user');
  const user = await userCollection.findOne({ username });
  if (!user) {
    throw {
      statusCode: ERRORS.USER_NOT_FOUND.code,
      message: ERRORS.USER_NOT_FOUND.message.error,
    };
  }
  const monthActivity: activitySchemaType[] = user.activity.filter(entry => {
    return entry.date.startsWith(month);
  });

  return monthActivity;
}
