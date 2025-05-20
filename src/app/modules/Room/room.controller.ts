import httpStatus from '../../shared/http-status';
import catchAsync from '../../utils/catchAsync';
import { sendSuccessResponse } from '../../utils/response';
import roomService from './room.service';

class RoomController {
  createRoom = catchAsync(async (req, res) => {
    const result = await roomService.createRoomIntoDB(req.user, req.body);
    sendSuccessResponse(res, {
      message: 'Room  created successfully!',
      statusCode: httpStatus.CREATED,
      data: result,
    });
  });

  getPublicRoomByCode = catchAsync(async (req, res) => {
    const result = await roomService.getPublicRoomByCodeFromDB(req.params.code);
    sendSuccessResponse(res, {
      message: 'Room retrieved   successfully!',
      statusCode: httpStatus.OK,
      data: result,
    });
  });

  getRoomById = catchAsync(async (req, res) => {
    const result = await roomService.getRoomByCodeFromDB(req.user, req.params.id);
    sendSuccessResponse(res, {
      message: 'Room  retrieved   successfully!',
      statusCode: httpStatus.OK,
      data: result,
    });
  });
}

export default new RoomController();
