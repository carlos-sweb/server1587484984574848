import { 
  sql 
} from "drizzle-orm";
import { 
  sqliteTable, 
  integer, 
  text, 
  primaryKey 
} from 'drizzle-orm/sqlite-core';

export const users = sqliteTable("Users", {
  id: integer("id",{mode:"number"}).primaryKey({autoIncrement:true}).notNull(),
  email: text('email').unique().notNull(),
  password: text('password').notNull(),
  created_at: text('created_at').notNull().default(sql`(CURRENT_TIMESTAMP)`),
  updated_at: text('updated_at').default(null),
  active: integer('active').notNull().default(1),
});