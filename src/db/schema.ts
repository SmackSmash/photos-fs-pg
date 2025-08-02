import { integer, pgTable, varchar } from 'drizzle-orm/pg-core';

export const usersTable = pgTable('users', {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  firstName: varchar({ length: 255 }).notNull(),
  secondName: varchar({ length: 255 }).notNull(),
  userName: varchar({ length: 255 }).notNull(),
  email: varchar({ length: 255 }).notNull(),
  password: varchar({ length: 255 }).notNull()
});

export const albumsTable = pgTable('albums', {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  userId: integer().notNull(),
  albumName: varchar({ length: 255 }).notNull(),
  albumPhotos: varchar({ length: 255 }).notNull(),
  albumUser: varchar({ length: 255 }).notNull()
});

export const photosTable = pgTable('photos', {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  albumId: integer().notNull(),
  fileName: varchar({ length: 255 }).notNull(),
  title: varchar({ length: 255 }).notNull(),
  alt: varchar({ length: 255 }).notNull()
});
