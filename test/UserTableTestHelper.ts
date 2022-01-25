/** istanbul ignore file */
import pool from "../src/Infrastructure/database/postgres/pool";

// tslint:disable-next-line: new-parens
export default new class UserTableTestHelper {
  async addUser({
    id = 'test-user-id',
    username = 'test-username',
    password = 'secret_password',
    email = 'test@user.test',
    fullname = 'user for test',
    date = new Date().toISOString()
  }: {
    id?: string,
    username?: string,
    password?: string,
    email?: string,
    fullname?: string,
    date?: string
  }): Promise<void> {
    const query = {
      text: 'INSERT INTO users VALUES($1,$2,$3,$4,$5,$6)',
      values: [id, username, email, password, fullname, date]
    };

    await pool.query(query);
  }

  async findUserByEmail(email: string): Promise<any> {
    const query = {
      text: 'SELECT * FROM users WHERE email=$1',
      values: [email]
    };
    const result = await pool.query(query);
    return result.rows;
  }

  async cleanTable() {
    const query = {
      text: 'TRUNCATE users'
    }
    return await pool.query(query);
  }
}