import { integer, pgTable, varchar } from 'drizzle-orm/pg-core';

export const photosTable = pgTable('photos', {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  fileName: varchar({ length: 255 }).notNull(),
  title: varchar({ length: 255 }).notNull(),
  alt: varchar({ length: 255 }).notNull()
});

export const usersTable = pgTable('users', {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  userName: varchar({ length: 255 }).notNull(),
  email: varchar({ length: 255 }).notNull(),
  password: varchar({ length: 255 }).notNull()
});

export const albumsTable = pgTable('albums', {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  albumName: varchar({ length: 255 }).notNull(),
  albumPhotos: varchar({ length: 255 }).notNull(),
  albumUser: varchar({ length: 255 }).notNull()
});
