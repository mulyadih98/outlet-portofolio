import AuthorizationError from "../AuthorizationError"
import ClientError from "../ClientError";

describe('AuthorizationError', () => {
  it('should create AuthoriazationError correctly', () => {
    // Arrange
    const authorizationError = new AuthorizationError('an error occure');
    // Action and Assert
    expect(authorizationError).toBeInstanceOf(AuthorizationError);
    expect(authorizationError).toBeInstanceOf(Error);
    expect(authorizationError).toBeInstanceOf(ClientError);
    expect(authorizationError.statusCode).toEqual(403);
    expect(authorizationError.message).toEqual('an error occure');
    expect(authorizationError.name).toEqual('AuthorizationError');
  })
})