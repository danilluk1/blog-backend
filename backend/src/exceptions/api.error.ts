export default class ApiError extends Error {
  status: number;
  error: Error[];

  constructor(status: number, message: string, error: Error[] = []) {
    super(message);

    this.status = status;
    this.error = error;
  }

  static UnauthorizedError() {
    return new ApiError(401, "Unauthorized error", []);
  }

  static IdTokenExpiredOrInvalid() {
    return new ApiError(402, "Token expired or invalid", []);
  }

  static DbError() {
    return new ApiError(500, "Some internal db error", []);
  }

  static BadRequest() {
    return new ApiError(404, "Bad request", []);
  }
}
