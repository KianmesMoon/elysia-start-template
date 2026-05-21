export * from "./schema/auth";
import { user } from "./schema/auth";

export const table = {
  user,
} as const;

export type Table = typeof table;
