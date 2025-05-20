import { NextFunction, Request, Response } from 'express';
import User from '../modules/User/user.model';
import AppError from '../Errors/AppError';
import httpStatus from '../shared/http-status';

export default function (...requirePermissions: string[]) {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      const authUser = req.user;
      if (!authUser) {
        throw new AppError(httpStatus.UNAUTHORIZED, 'Unauthorized user');
      }

      const user = await User.findById(authUser.userId).select('permissions');

      const permissions = user?.permissions;

      if (!permissions) {
        throw new AppError(httpStatus.FORBIDDEN, 'User permissions not found');
      }

      const hasAllPermissions = requirePermissions.every((permission) => {
        if (permission.includes('.')) {
          const [parent, child] = permission.split('.');
          return (permissions as Record<string, Record<string, boolean>>)?.[parent]?.[child];
        } else {
          return (permissions as Record<string, boolean>)[permission];
        }
      });

      if (!hasAllPermissions) {
        throw new AppError(httpStatus.FORBIDDEN, 'Access denied: Missing required permission(s)');
      }

      next();
    } catch (err) {
      next(err);
    }
  };
}
