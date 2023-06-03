import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { NotAuthorisedError } from "../errors";
import { IncomingHttpHeaders } from "http";

interface UserPayload {
  id: string;
  email: string;
}

declare global {
  namespace Express {
    interface Request {
      currentUser?: UserPayload;
    }
  }
}

declare module "http" {
  interface IncomingHttpHeaders {
    pibuxetauthtoken?: string;
  }
}

export const authMiddleWare = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const payload = jwt.verify(
      req.headers.pibuxetauthtoken!,
      process.env.JWT_KEY!
    ) as UserPayload;
    req.currentUser = payload;
  } catch (error) {
    throw new NotAuthorisedError();
  }
  next();
};
