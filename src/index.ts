import { Elysia } from "elysia";
import { PORT } from "./config/env";
import { auth } from "./modules/auth";
import openapi from "./plugins/openapi";

const app = new Elysia().use(openapi).use(auth).listen(PORT);

console.log(
  `🦊 Elysia is running at http://${app.server?.hostname}:${app.server?.port}
  OpenAPI document running at http://localhost:${app.server?.port}/openapi`,
);
