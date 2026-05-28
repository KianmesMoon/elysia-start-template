import { defineConfig } from "vitest/config";
import path from "node:path";

export default defineConfig({
  test: {
    globals: true,
    include: ["test/**/*.{spec,test}.ts"],
    coverage: {
      enabled: true,
      provider: "v8",
      exclude: ["src/config/**", "src/db/**", "src/lib/**", "src/plugins/**", "src/utils/**"],
    },
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
});
