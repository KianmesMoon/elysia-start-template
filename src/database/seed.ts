import { nanoid } from "@/utils/security";
import { config } from "dotenv";
import { drizzle } from "drizzle-orm/node-postgres";
import { usersTable } from "./schema";

config({
  path: `.env.${process.env.NODE_ENV}`,
});

const db = drizzle(process.env.DATABASE_URL!);

async function main() {
  const user: typeof usersTable.$inferInsert = {
    id: nanoid(),
  };

  await db.insert(usersTable).values(user);
  console.log("New user created!");

  const users = await db.select().from(usersTable);
  console.log("Getting all users from the database: ", users);
}

main();
