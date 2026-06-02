import { reset } from "drizzle-seed";

import { db } from "../client";
import * as schema from "../schema/index";

async function main() {
  await reset(db, schema);
}

main();
