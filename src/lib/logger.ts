import { ENV } from "@/config/env";
import pino from "pino";

export const logger = pino({
  level: ENV.NODE_ENV === "production" ? "error" : "debug",
  base: null,
  timestamp: pino.stdTimeFunctions.isoTime,
  redact: ["password", "token", "authorization", "cookie"],

  transport:
    ENV.NODE_ENV === "production"
      ? undefined
      : {
          targets: [
            {
              target: "pino/file",
              options: {
                destination: "./logs/app.log",
                mkdir: true,
                append: false,
              },
            },
            {
              target: "pino-pretty",
              options: {
                colorize: true,
                translateTime: "SYS:yyyy-mm-dd HH:MM:ss",
                ignore: "pid,hostname",
              },
            },
          ],
        },
});
