import { db } from "@/db/client";
import Elysia from "elysia";
import { healthCheck } from "../src/modules/health-check";

export const app = new Elysia().use(healthCheck);

describe("Health check", () => {
  it("should return ok when server alive", async () => {
    const res = await app.handle(new Request("http://localhost/api/health/server"));

    expect(res.status).toBe(200);
  });

  it("should return ok when database server alive", async () => {
    const res = await app.handle(new Request("http://localhost/api/health/database"));

    expect(res.status).toBe(200);
  });

  it("should throw exception when database server crash", async () => {
    vi.spyOn(db, "execute").mockRejectedValueOnce(new Error("DB down"));

    const res = await app.handle(new Request("http://localhost/api/health/database"));

    expect(res.status).toBe(503);
  });
});
