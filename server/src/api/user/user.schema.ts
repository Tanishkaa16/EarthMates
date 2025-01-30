import { z } from 'zod';
import { activityEntrySchema } from '../activity/activity.schema';

export const userSchema = z.object({
  username: z.string(),
  password: z.string(),
  email: z.string(),
  events: z.preprocess(
    value => JSON.parse(value as string),
    z.array(z.string()).default([]),
  ),
  points: z.number(),
  badges: z.preprocess(
    value => JSON.parse(value as string),
    z.array(z.string()).default([]),
  ),
  activity: z.array(activityEntrySchema).default([]),
});

export const PostSchema = z.object({
  postId: z.string(),
  imageUrl: z.string(),
  tag: z.string(),
  description: z.string(),
  username: z.string(),
});

export type UserSchemaType = z.infer<typeof userSchema>;
export type PostSchemaType = z.infer<typeof PostSchema>;
