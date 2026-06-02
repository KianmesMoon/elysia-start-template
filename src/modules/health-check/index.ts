import Elysia from "elysia";

import { HealthCheckModel } from "./model";
import { HealthCheck } from "./service";

const healthCheck = new Elysia({ name: "health-check", prefix: "/api/health" })
  .macro({
    openapiTag: {
      detail: {
        tags: ["Health Check"],
      },
    },
  })

  .get("/check-server", () => HealthCheck.checkServer(), {
    openapiTag: true,
    response: {
      200: HealthCheckModel.serverCheckResponse,
    },
  })

  .get("/check-database", async () => await HealthCheck.checkDatabase(), {
    openapiTag: true,
    response: {
      200: HealthCheckModel.databaseCheckResponse,
      503: HealthCheckModel.databaseCrash,
    },
  });

export default healthCheck;
