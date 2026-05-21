import { config } from "dotenv";

config({
  path: `.env.${process.env.NODE_ENV || "development"}`,
});

export const DATABASE_URL = process.env.DATABASE_URL!;

if (!DATABASE_URL) {
  throw new Error("DATABASE_URL is missing");
}

const port = Number(process.env.PORT);

export const PORT = Number.isNaN(port) ? 3000 : port;
