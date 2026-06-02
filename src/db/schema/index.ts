export * from "./auth";
import { user } from "./auth";

export const table = {
  user,
} as const;

export type Table = typeof table;
