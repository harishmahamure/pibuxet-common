import { Request, Response, NextFunction } from "express";
import { CustomError, DatabaseConnectionError } from "../errors";
export const errorHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (err instanceof CustomError) {
    return res.status(err.statusCode).send({ errors: err.serializeErrors() });
  }

  if (err instanceof DatabaseConnectionError) {
    return res.status(500).send({ errors: err.serializeErrors() });
  }

  return res.status(400).send({
    message: "something went wrong",
  });
};
