import { config } from "dotenv";
import z from "zod";

config({
  path: `.env.${process.env.NODE_ENV || "development"}`,
});

const ENV = z
  .object({
    NODE_ENV: z.enum(["development", "test", "production"]).default("development"),
    PORT: z.coerce.number().default(3000),
    DATABASE_URL: z.url(),
    BETTER_AUTH_SECRET: z.string().trim().min(1, "BETTER_AUTH_SECRET is required"),
    BETTER_AUTH_URL: z.url(),
    RESEND_API_KEY: z.string().trim().min(1, "RESEND_API_KEY is required"),
    EMAIL_FROM: z.string().trim().min(1, "EMAIL_FROM is required"),
  })
  .parse(process.env);

export default ENV;
