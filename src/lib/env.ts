import { z } from "zod";

const envSchema = z.object({
  DATABASE_URL_POOLED: z.url(),
  DATABASE_URL_DIRECT: z.url(),
  BETTER_AUTH_SECRET: z.string(),
  BETTER_AUTH_URL: z.url(),
});

export const env = envSchema.parse(process.env);
