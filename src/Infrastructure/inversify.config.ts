import { Container, decorate, injectable } from "inversify";
import { Pool } from "pg";
import IdGenerator from "../Commons/utilities/IdGenerator";
import IdGeneratorInterface from "../Commons/utilities/IdGeneratorInterface";
import UserRepository from "../Domains/User/UserRepository";
import connection from "./database/postgres/connection";
import pool from "./database/postgres/pool";
import UserRepositoryPostgres from "./repositories/UserRepositoryPostgres";
import TYPES from "./types";
const container = new Container();
// bind
container.bind<UserRepository>(TYPES.UserRepository).to(UserRepositoryPostgres);
container.bind<pool>('pool').to(connection);
container.bind<IdGeneratorInterface>(TYPES.IdGeneratorInterface).to(IdGenerator);


export default container;