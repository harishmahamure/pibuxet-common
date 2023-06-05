import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { NotAuthorisedError } from "../errors";

interface UserPayload {
  [key: string]: any;
}

declare module "http" {
  interface IncomingHttpHeaders {
    string?: string;
  }
}

export const authMiddleWare =
  (JWT_KEY: string, headerKey: string) =>
  (req: Request, res: Response, next: NextFunction) => {
    if (JWT_KEY) {
      throw new Error("JWT_KEY is not defined");
    }
    try {
      jwt.verify(req.headers[headerKey]! as string, JWT_KEY) as UserPayload;
    } catch (error) {
      throw new NotAuthorisedError();
    }
    next();
  };
