import { z } from 'zod';

export const activityEntrySchema = z.object({
  date: z
    .string()
    .regex(/^\d{4}-\d{2}-\d{2}$/, 'Invalid date format (YYYY-MM-DD)'),
  value: z.number().min(1).max(3),
});

export type activitySchemaType = z.infer<typeof activityEntrySchema>;
