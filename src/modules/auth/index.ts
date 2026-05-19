import { Elysia } from "elysia";

export const auth = new Elysia({ name: "auth", prefix: "/auth" }).get(
  "/sign-in",
  async () => {
    return "success";
  },
);
