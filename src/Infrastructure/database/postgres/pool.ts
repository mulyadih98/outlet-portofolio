import { Pool } from "pg";

interface pool {
  connect: () => Pool
}

export default pool;