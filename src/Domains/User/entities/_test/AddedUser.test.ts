import AddedUser from "../AddedUser";

describe('AddedUser entity', () => {
  it('should throw Error when payload containing null value', () => {
    // Arrange 
    const payload = {
      id: '',
      email: '',
      username: '',
      fullname: '',
      date: ''
    };
    // Action and Assert
    expect(() => new AddedUser(payload)).toThrowError('ADDED_USER.NOT_ALLOWED_NULL_VALUE');
  })
})