import { injectable } from "inversify";
import "reflect-metadata";
import { Pool } from "pg";
import pool from "./pool";
import 'dotenv/config'

@injectable()
class connection implements pool {
  connect(): Pool {
    return new Pool({
      host: process.env.PGHOST,
      user: process.env.PGUSER,
      database: process.env.PGDATABASE,
      // port: 5432,
      // max: 20,
      // connectionTimeoutMillis: 3000,
    });
  }
}

export default connection;