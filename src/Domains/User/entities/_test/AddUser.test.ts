import AddUser from "../AddUser"

describe('AddUser entity', () => {
  it('should throw Error when property contain null value', () => {

    expect(() => new AddUser({
      email: '',
      fullname: '',
      password: '',
      username: ''
    })).toThrowError('ADD_USER.NOT_ALLOWED_NULL_VALUE');
  })
})