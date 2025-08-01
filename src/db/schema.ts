import { integer, pgTable, varchar } from 'drizzle-orm/pg-core';

export const photosTable = pgTable('photos', {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  file_name: varchar({ length: 255 }).notNull(),
  title: varchar({ length: 255 }).notNull(),
  alt: varchar({ length: 255 }).notNull()
});
