import { customAlphabet } from "nanoid";

// Generate UUID
export const nanoid = customAlphabet(
  "0123456789abcdefghijklmnopqrstuvwxyz",
  12,
);
