import { pgTable, serial, text, timestamp, numeric } from 'drizzle-orm/pg-core';
import { customType } from 'drizzle-orm/pg-core';
 
export const vector = customType<{
	data: number[];
	driverData: string;
	config: { size: number };
}>({
	dataType(config) {
		const dt =
			!!config && typeof config.size === "number"
				? `vector(${config.size})`
				: "vector";
		return dt;
	},
	fromDriver(value) {
		return JSON.parse(value);
	},
	toDriver(value) {
		return JSON.stringify(value);
	},
});

// Tabel "documents"
export const documents = pgTable('documents', {
  id: serial('id').primaryKey(),
  nameStudent: text('nameStudent').notNull(),
  documentName: text('documentName').notNull(),
  documentUrl: text('documentUrl').notNull(),
  folder: text('folder').notNull(),
  uploadedDate: timestamp('uploadedDate', { withTimezone: true }).defaultNow(),
  embedding: vector('embedding', { size: 384 })
});

// Tabel "classes"
export const classes = pgTable('classes', {
  id: serial('id').primaryKey(), 
  createdAt: timestamp('createdAt', { withTimezone: true }).notNull().defaultNow(),
  className: text('className').notNull(),
  totalStudent: numeric('totalStudent').notNull(),
});

// Tabel "folders"
export const folders = pgTable('folders', {
  id: serial('id').primaryKey(),
  nameAssignment: text('nameAssignment').notNull(),
  createdAt: timestamp('createdAt', { precision: 3 }).defaultNow(),
  dueDate: timestamp('dueDate', { precision: 3 }),
  className: text('className'),
  description: text('description'),
  assignmentType: text('assignmentType'),
});
