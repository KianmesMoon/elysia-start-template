import { logger } from "@/lib/logger";
import Elysia from "elysia";

export const globalError = new Elysia().onError(({ code, error, path, set }) => {
  if (code === "VALIDATION") {
    return;
  }

  const message = error instanceof Error ? error.message : String(error);
  const status = set.status ?? 500;
  const payload = {
    status,
    code,
    path,
    message,
  };

  if (Number(status) >= 500) {
    logger.error(payload);
  } else {
    logger.warn(payload);
  }

  return {
    status,
    code,
    message,
  };
});
