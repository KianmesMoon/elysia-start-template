import { t, UnwrapSchema } from "elysia";

export const HealthCheckModel = {
  serverCheckResponse: t.Object(
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

  databaseCheckResponse: t.Object(
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

  databaseCrash: t.Object(
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
} as const;

export type HealthCheckModel = {
  [k in keyof typeof HealthCheckModel]: UnwrapSchema<(typeof HealthCheckModel)[k]>;
};
