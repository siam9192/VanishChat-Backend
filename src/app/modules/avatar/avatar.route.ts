import { Router } from 'express';
import avatarController from './avatar.controller';
import validateRequest from '../../middlewares/validateRequest';
import avatarValidation from './avatar.validation';

const router = Router();

router.post('/', validateRequest(avatarValidation.createAvatar), avatarController.createAvatar);

router.post(
  '/many',
  validateRequest(avatarValidation.createManyAvatar),
  avatarController.createManyAvatar
);

router.get('/', avatarController.getAllAvatar);

router.get('/:id', avatarController.getAvatarById);

const avatarRouter = router;

export default avatarRouter;
