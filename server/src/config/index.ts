import dotenv from 'dotenv';
import { z } from 'zod';

dotenv.config();

const envSchema = z.object({
  PORT: z.string(),
  NODE_ENV: z.string(),
  JWT_SECRET: z.string(),
  MINIO_PORT: z.string().transform(Number),
  MINIO_END_POINT: z.string(),
  ACCESS_KEY: z.string(),
  SECRET_KEY: z.string(),
  MONGODB_URI: z.string(),
});

const env = envSchema.parse(process.env);
export type EnvSchemaType = z.infer<typeof envSchema>;

export default {
  PORT: env.PORT,
  NODE_ENV: env.NODE_ENV,
  JWT_SECRET: env.JWT_SECRET,
  MINIO_PORT: env.MINIO_PORT,
  MINIO_END_POINT: env.MINIO_END_POINT,
  ACCESS_KEY: env.ACCESS_KEY,
  SECRET_KEY: env.SECRET_KEY,
  MONGODB_URI: env.MONGODB_URI,
  logs: {
    level: process.env.LOG_LEVEL || 'silly',
  },
  api: {
    prefix: '/api',
  },
};
