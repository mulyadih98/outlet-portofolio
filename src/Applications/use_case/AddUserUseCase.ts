import AddedUser from "../../Domains/User/entities/AddedUser";
import AddUser from "../../Domains/User/entities/AddUser";
import UserRepository from "../../Domains/User/UserRepository";
import PasswordHash from "../security/PasswordHash";

class AddUserUseCase {
  protected _userRepository: UserRepository;
  protected _passwordHash: PasswordHash;
  constructor({ userRepository, passwordHash }: { userRepository: UserRepository, passwordHash: PasswordHash }) {
    this._userRepository = userRepository;
    this._passwordHash = passwordHash;
  }

  async execute(payload: AddUser) {
    await this._userRepository.verifyEmail(payload.email);
    const passwordHash = await this._passwordHash.hash(payload.password);
    const addUser = await this._userRepository.addUser(
      new AddUser({ ...payload, password: passwordHash })
    );
    return new AddedUser(addUser[0]);
  }
}

export default AddUserUseCase;