import { cors } from "@elysia/cors";

import ENV from "@/config/env";

const origins = ENV.NODE_ENV === "production" ? [""] : ["http://localhost:3000"];

export default cors({
  origin: origins,
  credentials: true,
});
