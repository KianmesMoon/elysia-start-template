import { nanoid } from "@/utils/security";
import { db } from "./client";
import { usersTable } from "./schema";

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
