import 'dotenv/config';
import { drizzle } from 'drizzle-orm/bun-sqlite';
import { Database } from 'bun:sqlite';
const sqlite = new Database(process.env.DB_FILE_NAME!);
const db = drizzle({ client: sqlite });
import { users } from './../sqlite3/Users';
const password = "clave123";
const hash = await Bun.password.hash(password);
const userDefault: typeof users.$inferInsert = {
   email:"admin@gmail.com",
   password:hash
};
// const users = await db.select().from(usersTable);
const insert = await db.insert(users).values(userDefault);
