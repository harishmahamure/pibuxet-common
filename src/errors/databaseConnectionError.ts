import { CustomError } from "./index";

export class DatabaseConnectionError extends Error {
  statusCode = 500;
  reason = "Error in connecting to database";
  constructor() {
    super();
    Object.setPrototypeOf(this, DatabaseConnectionError.prototype);
  }

  serializeErrors() {
    return [
      {
        message: this.reason,
      },
    ];
  }
}
