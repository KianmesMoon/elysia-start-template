import openapi from "@elysia/openapi";
import { auth } from "./better-auth";

const disabledRoutes = new Set([
  "POST /get-session",
  "POST /sign-in/social",
  "GET /callback/{id}",
  "POST /link-social",
  "POST /unlink-account",
  "POST /refresh-token",
  "POST /get-access-token",
  "GET /list-accounts",
  "GET /list-sessions",
  "POST /revoke-session",
  "POST /revoke-sessions",
  "POST /revoke-other-sessions",
  "POST /update-session",
  "POST /update-user",
  "POST /delete-user",
  "GET /delete-user/callback",
  "POST /change-email",
  "POST /verify-password",
  "GET /account-info",
  "GET /error",
  "POST /callback/{id}",
  "GET /reset-password/{token}",
]);

let _schema: ReturnType<typeof auth.api.generateOpenAPISchema>;

const getSchema = async () => (_schema ??= auth.api.generateOpenAPISchema());

export const OpenAPI = {
  getPaths: (prefix = "/api/auth") =>
    getSchema().then(({ paths }) => {
      const reference: typeof paths = Object.create(null);
      for (const path of Object.keys(paths)) {
        for (const method of Object.keys(paths[path])) {
          const routeKey = `${method.toUpperCase()} ${path}`;
          if (disabledRoutes.has(routeKey)) continue;
          const key = prefix + path;
          reference[key] ??= {};
          const operation = (paths[path] as any)[method];
          operation.tags = ["Better Auth"];
          (reference[key] as any)[method] = operation;
        }
      }
      return reference;
    }) as Promise<any>,
  components: getSchema().then(({ components }) => components) as Promise<any>,
} as const;

export default openapi({
  documentation: {
    info: {
      version: "0.1.0",
      title: "Elysia Start Example",
      description: "The elysia start example API document",
    },
    components: await OpenAPI.components,
    paths: await OpenAPI.getPaths(),
  },
});
