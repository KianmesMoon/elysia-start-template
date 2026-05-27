import { db } from "@/db/client";
import Elysia, { InternalServerError, t } from "elysia";
import { rateLimit } from "elysia-rate-limit";
import { server } from "..";

export const healthCheck = new Elysia({ name: "health-check", prefix: "/api/health" })
  .use(
    rateLimit({
      scoping: "scoped",
      max: 5,
      injectServer: () => server,
    }),
  )
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
    async ({ set }) => {
      try {
        await db.execute("select 1");
        return {
          ok: true,
        };
      } catch {
        set.status = 503;
        throw new InternalServerError("Database crash");
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
