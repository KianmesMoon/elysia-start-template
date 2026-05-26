import { Elysia } from "elysia";
import { ENV } from "./config/env";
import { betterAuth } from "./plugins/better-auth";
import cors from "./plugins/cors";
import helmet from "./plugins/helmet";
import openapi from "./plugins/openapi";

const app = new Elysia().use(openapi).use(cors).use(helmet).use(betterAuth).listen(ENV.PORT);

console.log(
  `🦊 Elysia is running at http://${app.server?.hostname}:${app.server?.port}
  OpenAPI document running at http://localhost:${app.server?.port}/openapi`,
);
