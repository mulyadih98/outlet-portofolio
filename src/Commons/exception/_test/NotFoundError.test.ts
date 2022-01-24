import NotFoundError from "../NotFoundError"
import ClientError from "../ClientError";

describe('NotFoundError', () => {
  it('should create NotFoundError correctly', () => {
    // Arrange
    const notFoundError = new NotFoundError('an error occure');
    // Action and Assert
    expect(notFoundError).toBeInstanceOf(NotFoundError);
    expect(notFoundError).toBeInstanceOf(Error);
    expect(notFoundError).toBeInstanceOf(ClientError);
    expect(notFoundError.statusCode).toEqual(404);
    expect(notFoundError.message).toEqual('an error occure');
    expect(notFoundError.name).toEqual('NotFoundError');
  })
})