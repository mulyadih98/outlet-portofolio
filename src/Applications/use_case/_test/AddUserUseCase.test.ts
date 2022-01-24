import UserRepository from "../../../Domains/User/UserRepository"
import { mock } from "jest-mock-extended";
import PasswordHash from "../../security/PasswordHash";
import AddUserUseCase from "../AddUserUseCase";
import AddUser from "../../../Domains/User/entities/AddUser";
import AddedUser from "../../../Domains/User/entities/AddedUser";

describe('AddUserUseCase', () => {
  it('should orchestrating component correctly', async () => {
    // Arrange
    const expectedValue = {
      id: 'user-test-id',
      email: 'user@email.test',
      fullname: 'user for fullname',
      date: 'test tanggal user',
      username: 'usertest'
    };
    const payload = new AddUser({
      email: expectedValue.email,
      fullname: expectedValue.fullname,
      password: 'secret',
      username: expectedValue.username
    });

    // create dependencies of Usecase
    const mockUserRepository = mock<UserRepository>();
    const mockPasswordHash = mock<PasswordHash>();

    // mocking needed function
    mockUserRepository.verifyEmail.mockImplementation(() => Promise.resolve(true));
    mockUserRepository.addUser.mockImplementation(() => Promise.resolve([expectedValue]));
    mockPasswordHash.hash.mockImplementation(() => Promise.resolve('secret_password'));

    // Action
    const addUser = new AddUserUseCase({
      userRepository: mockUserRepository,
      passwordHash: mockPasswordHash
    });
    const registeredUser = await addUser.execute(payload);

    // Arrange
    expect(registeredUser).toStrictEqual(new AddedUser(expectedValue));
    expect(mockPasswordHash.hash).toHaveBeenCalledWith(payload.password);
    expect(mockUserRepository.verifyEmail).toHaveBeenCalledWith(payload.email);
    expect(mockUserRepository.addUser).toHaveBeenCalledWith(new AddUser({
      email: payload.email,
      fullname: payload.fullname,
      username: payload.username,
      password: 'secret_password'
    }));

  })
})