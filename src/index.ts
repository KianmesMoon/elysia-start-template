import { Elysia } from "elysia";
import { auth } from "./modules/auth";
import openapi from "./plugins/openapi";

const app = new Elysia().use(openapi).use(auth).listen(3000);

console.log(
  `🦊 Elysia is running at http://${app.server?.hostname}:${app.server?.port}
  OpenAPI document running at http://localhost:3000/openapi`,
);
