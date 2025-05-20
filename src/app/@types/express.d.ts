import { IAuthUser } from '../utils/type';

declare global {
  namespace Express {
    interface Request {
      user: IAuthUser; // Add your custom field here
    }
  }
}
