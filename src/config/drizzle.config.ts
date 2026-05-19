import { config } from "dotenv";
import { defineConfig } from "drizzle-kit";

config({
  path: `.env.${process.env.NODE_ENV}`,
});

export default defineConfig({
  out: "./drizzle",
  schema: "./src/database/schema.ts",
  dialect: "postgresql",
  dbCredentials: {
    url: process.env.DATABASE_URL!,
  },
});
