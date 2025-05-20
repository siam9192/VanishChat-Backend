import { NextFunction } from 'express';
import { AnyZodObject, ZodEffects } from 'zod';

const validateRequest = (zodSchema: AnyZodObject | ZodEffects<AnyZodObject>): any => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      zodSchema.parse(req.body);

      next();
    } catch (err) {
      next(err);
    }
  };
};

export default validateRequest;
