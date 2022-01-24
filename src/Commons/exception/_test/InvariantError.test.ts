import ClientError from "../ClientError";
import InvariantError from "../InvariantError"

describe('InvariantError', () => {
  it('should create InvariantError correctly', () => {
    // Arrange
    const invariantError = new InvariantError('an error occure');
    // Action and Assert
    expect(invariantError).toBeInstanceOf(ClientError);
    expect(invariantError).toBeInstanceOf(Error);
    expect(invariantError.statusCode).toEqual(400);
    expect(invariantError.name).toEqual('InvariantError');
    expect(invariantError.message).toEqual('an error occure')
  })
})