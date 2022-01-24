import AuthenticationError from "../AuthenticationError"
import ClientError from "../ClientError";

describe('AuthorizationError', () => {
  it('should create Authentication correctly', () => {
    // Arrange
    const authenticationError = new AuthenticationError('an error occure');
    // Action and Assert
    expect(authenticationError).toBeInstanceOf(AuthenticationError);
    expect(authenticationError).toBeInstanceOf(Error);
    expect(authenticationError).toBeInstanceOf(ClientError);
    expect(authenticationError.statusCode).toEqual(401);
    expect(authenticationError.message).toEqual('an error occure');
    expect(authenticationError.name).toEqual('AuthenticationError');
  })
})