import httpStatus from "../../shared/http-status";
import catchAsync from "../../utils/catchAsync";
import { sendSuccessResponse } from "../../utils/response";
import roomPhotoService from "./room-photo-service";

class RoomPhotoController {
    createRoomPhoto = catchAsync(async (req, res) => {
    const result = await roomPhotoService.createRoomPhotoIntoDB(req.body);
    sendSuccessResponse(res, {
      message: 'Room photo created successfully!',
      statusCode: httpStatus.CREATED,
      data: result,
    });
  });
 createManyRoomPhoto = catchAsync(async (req, res) => {
    const result = await roomPhotoService.createManyRoomPhotoIntoDB(req.body);
    sendSuccessResponse(res, {
      message: 'Room photos  created successfully!',
      statusCode: httpStatus.CREATED,
      data: result,
    });
  });

  getAllRoomPhoto = catchAsync(async (req, res) => {
    const result = await roomPhotoService.getAllRoomPhotoFromDB();
    sendSuccessResponse(res, {
      message: 'All room photo retrieved   successfully!',
      statusCode: httpStatus.OK,
      data: result,
    });
  });

    getRoomPhotoById = catchAsync(async (req, res) => {
    const result = await roomPhotoService.getRoomPhotoByIdFromDB(req.params.id);
    sendSuccessResponse(res, {
      message: 'Room photo retrieved   successfully!',
      statusCode: httpStatus.OK,
      data: result,
    });
  });
}


export default new RoomPhotoController()