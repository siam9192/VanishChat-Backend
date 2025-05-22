import { Router } from 'express';
import roomJoinRequestController from './room-join-request.controller';

const router = Router();

router.get('/:id/room', roomJoinRequestController.getRoomJoinRequests);

const roomJoinRequestRouter = router;

export default roomJoinRequestRouter;
