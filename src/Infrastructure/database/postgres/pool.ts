import { Pool } from "pg";

export default new Pool({
  max: 20,
  connectionString: `postgres://${process.env.PGUSER}:${process.env.PGPASSWORD}@${process.env.PGHOST}:${process.env.PGPORT}/${process.env.PGDATABASE}`,
  idleTimeoutMillis: 3000
});