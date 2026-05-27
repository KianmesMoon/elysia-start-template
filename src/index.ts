import { Elysia } from "elysia";
import { Server } from "elysia/universal";
import { ENV } from "./config/env";
import { logger } from "./lib/logger";
import { healthCheck } from "./modules/health-check";
import { betterAuth } from "./plugins/better-auth";
import cors from "./plugins/cors";
import { globalError } from "./plugins/global-error";
import helmet from "./plugins/helmet";
import openapi from "./plugins/openapi";

const app = new Elysia()
  .use(globalError)
  .use(openapi)
  .use(cors)
  .use(helmet)
  .use(healthCheck)
  .use(betterAuth)
  .listen(ENV.PORT);

logger.info(`🦊 Elysia is running at http://${app.server?.hostname}:${app.server?.port}`);
logger.info(`OpenAPI document running at http://localhost:${app.server?.port}/openapi`);

export const server: Server = app.server!;
