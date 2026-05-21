import { table } from "@/db/schema";
import { spread } from "@/utils/spread-schema";
import { t } from "elysia";

const _user = spread(table.user, "insert");

export const createUser = t.Object({
  username: t.String({
    pattern: "^[\\w-]{4,16}$",
  }),
  password: t.String({
    pattern: "^(?=.*[A-Za-z])(?=.*\\d).{6,}$",
  }),
});
