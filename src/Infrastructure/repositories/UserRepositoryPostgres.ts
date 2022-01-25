import "reflect-metadata";
import { inject, injectable } from "inversify";
import { Pool } from "pg";
import InvariantError from "../../Commons/exception/InvariantError";
import IdGeneratorInterface from "../../Commons/utilities/IdGeneratorInterface";
import AddUser from "../../Domains/User/entities/AddUser";
import UserRepository from "../../Domains/User/UserRepository";
import TYPES from "../types";
import pool from "../database/postgres/pool";

@injectable()
class UserRepositoryPostgres implements UserRepository {
  protected _pool: pool;
  protected _idGenerator: IdGeneratorInterface;
  constructor(@inject('pool') pool: pool, @inject(TYPES.IdGeneratorInterface) idGenerator: IdGeneratorInterface) {
    this._pool = pool;
    this._idGenerator = idGenerator
  }

  async addUser(addUser: AddUser) {
    const { username, password, email, fullname } = addUser;
    const id = this._idGenerator.generateId();
    const date = new Date().toISOString();
    const query = {
      text: 'INSERT INTO users VALUES($1,$2,$3,$4,$5,$6) RETURNING id, username, email, fullname, date',
      values: [id, username, password, email, fullname, date]
    };
    const result = await this._pool.connect().query(query);
    return result.rows;
  };

  async verifyEmail(email: string) {
    const query = {
      text: 'SELECT email FROM users WHERE email= $1',
      values: [email]
    };
    const result = await this._pool.connect().query(query);
    if (!result.rowCount) {
      return Promise.resolve(true);
    }
    throw new InvariantError('username telah digunakan');

  };
}

export default UserRepositoryPostgres;