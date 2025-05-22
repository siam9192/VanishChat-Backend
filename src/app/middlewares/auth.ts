import { NextFunction, Request, Response } from 'express';
import catchAsync from '../utils/catchAsync';
import AppError from '../Errors/AppError';
import jwt, { JwtPayload } from 'jsonwebtoken';
import httpStatus from '../shared/http-status';
import envConfig from '../config/env.config';
import { IAuthUser } from '../utils/type';

function auth() {
  return catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const token = req.headers.authorization?.replace('Bearer ', '');
    // checking if the token is missing
    if (!token) {
      throw new AppError(httpStatus.UNAUTHORIZED, 'You are not authorized!');
    }

    // checking if the given token is valid
    let decoded;

    try {
      decoded = jwt.verify(token, envConfig.jwt.userIdTokenSecret as string) as IAuthUser &
        JwtPayload;
    } catch (error) {
      throw new AppError(httpStatus.UNAUTHORIZED, 'Unauthorized');
    }

    const { role, userId, iat } = decoded;
    req.user = decoded;

    next();
  });
}

export default auth;
