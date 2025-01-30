import { tuple, z } from 'zod';

export const AuthSchema = z.object({
  username: z
    .string()
    .min(6, { message: 'Username must be atleast 6 characters' }),
  password: z
    .string()
    .min(6, { message: 'Password must be atleast 6 characters' }),
  email: z.string(),
});

export type AuthSchemaType = z.infer<typeof AuthSchema>;
