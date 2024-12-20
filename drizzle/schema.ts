import { sqliteTable, AnySQLiteColumn, uniqueIndex, integer, text } from "drizzle-orm/sqlite-core"
  import { sql } from "drizzle-orm"

export const users = sqliteTable("Users", {
	id: integer().primaryKey({ autoIncrement: true }).notNull(),
	email: text().notNull(),
	password: text().notNull(),
	createdAt: text("created_at").default("sql`(CURRENT_TIMESTAMP)`").notNull(),
	updatedAt: text("updated_at").default("null"),
	active: integer().default(1).notNull(),
},
(table) => [
	uniqueIndex("Users_email_unique").on(table.email),
	uniqueIndex("Users_id_unique").on(table.id),
]);

export const drizzleMigrations = sqliteTable("__drizzle_migrations", {
});

