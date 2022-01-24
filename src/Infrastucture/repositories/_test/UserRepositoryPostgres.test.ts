import { nanoid } from "nanoid";
import UserTableTestHelper from "../../../../test/UserTableTestHelper"
import InvariantError from "../../../Commons/exception/InvariantError";
import AddUser from "../../../Domains/User/entities/AddUser";
import addUserPayload from "../../../Domains/User/types/addUserPayload";
import pool from "../../database/postgres/pool";
import UserRepositoryPostgres from "../UserRepositoryPostgres";

describe('UserRepositoryPostgres', () => {
  afterAll(async () => {
    await UserTableTestHelper.cleanTable();
  });

  afterAll(async () => {
    await pool.end();
  });

  describe('verifyEmail', () => {
    it('should throw InvariantError when email not available', async () => {
      // Arrange
      await UserTableTestHelper.addUser({ email: 'test@user.test' });
      const userRepositoryPostgres = new UserRepositoryPostgres(pool, nanoid());
      // Action and Assert
      await expect(userRepositoryPostgres.verifyEmail('test@user.test')).rejects.toThrowError(InvariantError);
    })

    it('should not throw InvariantError when email available', async () => {
      // Arrange
      const userRepositoryPostgres = new UserRepositoryPostgres(pool, nanoid());
      // Action and Assert
      await expect(userRepositoryPostgres.verifyEmail('test@usertest.test')).resolves.not.toThrowError(InvariantError);
    })
  })

  describe('addUser function', () => {
    it('should return registered user correctly', async () => {
      // Arrange
      const regiterUser: addUserPayload = {
        username: 'testuser',
        email: 'test@user.test',
        password: 'secret_password',
        fullname: 'user for test'
      };
      // Action
      const userRepositoryPostgres = new UserRepositoryPostgres(pool, nanoid());
      await userRepositoryPostgres.addUser(new AddUser(regiterUser));
      const user = await UserTableTestHelper.findUserByEmail('test@user.test');
      // Assert
      expect(user).toHaveLength(1);
    })
  })
})