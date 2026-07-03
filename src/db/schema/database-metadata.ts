import { pgTable, text, timestamp } from "drizzle-orm/pg-core";

export const databaseMetadata = pgTable("database_metadata", {
  key: text("key").primaryKey(),
  value: text("value").notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});
