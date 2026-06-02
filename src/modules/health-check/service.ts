import { db } from "@/db/client";
import { ServiceUnavailableError } from "@/plugins/global-error";

import { HealthCheckModel } from "./model";

export abstract class HealthCheck {
  static checkServer(): HealthCheckModel["serverCheckResponse"] {
    return {
      ok: true,
    };
  }

  static async checkDatabase(): Promise<HealthCheckModel["databaseCheckResponse"]> {
    try {
      await db.execute("select 1");

      return {
        ok: true,
      };
    } catch {
      throw new ServiceUnavailableError("Database crash");
    }
  }
}
