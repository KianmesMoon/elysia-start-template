import Elysia, { t } from "elysia";

import { db } from "@/db/client";
import { ServiceUnavailableError } from "@/plugins/global-error";

const healthCheck = new Elysia({ name: "health-check", prefix: "/api/health" })
  .macro({
    openapiTag: {
      detail: {
        tags: ["Health Check"],
      },
    },
  })
  .get(
    "/server",
    () => ({
      ok: true,
    }),
    {
      openapiTag: true,
      response: {
        200: t.Object(
          {
            ok: t.Boolean(),
          },
          {
            description: "Server alive",
            examples: [
              {
                ok: true,
              },
            ],
          },
        ),
      },
    },
  )
  .get(
    "/database",
    async () => {
      try {
        await db.execute("select 1");
        return {
          ok: true,
        };
      } catch {
        throw new ServiceUnavailableError("Database crash");
      }
    },
    {
      openapiTag: true,
      response: {
        200: t.Object(
          {
            ok: t.Boolean(),
          },
          {
            description: "Database server alive",
            examples: [
              {
                ok: true,
              },
            ],
          },
        ),
        503: t.Object(
          {
            status: t.Number(),
            code: t.String(),
            message: t.String(),
          },
          {
            description: "Database crash",
            examples: [
              {
                status: 503,
                code: "INTERNAL_SERVER_ERROR",
                message: "Database crash",
              },
            ],
          },
        ),
      },
    },
  );

export default healthCheck;
