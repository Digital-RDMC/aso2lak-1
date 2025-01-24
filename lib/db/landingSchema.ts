import type { InferSelectModel } from 'drizzle-orm';
import {
  pgTable,
  varchar

} from 'drizzle-orm/pg-core';

export const landing = pgTable('Landing', {
  title: varchar('title', { length: 64 }).primaryKey().notNull(),
  value: varchar('value', { length: 64 }).notNull(),
});

export type Landing = InferSelectModel<typeof landing>;

