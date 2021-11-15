import { NextFunction, Request, Response } from "express";
import { makeJwtProvider } from "../factories/providers/jwt";

type JWTPayload = {
  user: {
    id: string;
  }
}

export async function ensureAuthenticate(request: Request, response: Response, next: NextFunction): Promise<Response | void> {
  const authToken = request.headers.authorization;

  if (!authToken) {
    return response.status(401).json({ message: "Token not provided" });
  }

  const [, token] = request.headers.authorization.split(' ');

  try {
    const jwtProvider = makeJwtProvider();

    const { user } = await jwtProvider.verifyToken(token) as JWTPayload;
    
    request.userId = user.id;

    return next();
  } catch (err) {
    return response.status(401).json({ message: "Invalid JWT token" });
  }
}