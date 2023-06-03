import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { NotAuthorisedError } from "../errors";
import { IncomingHttpHeaders } from "http";

interface UserPayload {
  [key: string]: any;
}

declare module "http" {
  interface IncomingHttpHeaders {
    ["x-auth"]?: string;
  }
}

export const authMiddleWare =
  (JWT_KEY: string) => (req: Request, res: Response, next: NextFunction) => {
    if (JWT_KEY) {
      throw new Error("JWT_KEY is not defined");
    }
    try {
      jwt.verify(req.headers["x-auth"]!, JWT_KEY) as UserPayload;
    } catch (error) {
      throw new NotAuthorisedError();
    }
    next();
  };
