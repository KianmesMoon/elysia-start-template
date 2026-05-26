import { ENV } from "@/config/env";
import { cors } from "@elysia/cors";

const origins = ENV.NODE_ENV === "production" ? [""] : ["http://localhost:3000"];

export default cors({
  origin: origins,
  credentials: true,
});
