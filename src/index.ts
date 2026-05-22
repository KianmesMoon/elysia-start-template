import { Elysia } from "elysia";
import { PORT } from "./config/env";
import openapi from "./plugins/openapi";
import { auth } from "./utils/auth";

const app = new Elysia().mount(auth.handler).use(openapi).listen(PORT);

console.log(
  `🦊 Elysia is running at http://${app.server?.hostname}:${app.server?.port}
  OpenAPI document running at http://localhost:${app.server?.port}/openapi`,
);
