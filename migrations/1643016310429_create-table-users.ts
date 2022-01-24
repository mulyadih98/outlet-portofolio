/* eslint-disable @typescript-eslint/naming-convention */
import { MigrationBuilder, ColumnDefinitions } from 'node-pg-migrate';

export const shorthands: ColumnDefinitions | undefined = undefined;

export async function up(pgm: MigrationBuilder): Promise<void> {
  pgm.createTable('users', {
    id: {
      type: 'varchar(50)',
      primaryKey: true,
      notNull: true
    },
    username: {
      type: 'varchar(50)',
      notNull: true,
    },
    email: {
      type: 'varchar(50)',
      notNull: true,
      unique: true
    },
    password: {
      type: 'text',
      notNull: true,
    },
    fullname: {
      type: 'text',
      notNull: true,
    },
    date: {
      type: 'timestamp',
      default: 'now()',
      notNull: true,
    },
  })
}

export async function down(pgm: MigrationBuilder): Promise<void> {
  pgm.dropTable('users');
}
