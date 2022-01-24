import AddUser from "./entities/AddUser";

interface UserRepository {
  addUser: (addUser: AddUser) => Promise<Array<any>>;
  verifyEmail: (email: string) => Promise<boolean>;
}

export default UserRepository;