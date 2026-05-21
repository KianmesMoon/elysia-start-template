import { Elysia } from "elysia";
import { createUser } from "./model";

export const auth = new Elysia({ name: "auth", prefix: "/auth" }).post(
  "/sign-up",
  async () => {
    return "success";
  },
  { body: createUser },
);
