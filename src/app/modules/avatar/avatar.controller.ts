import httpStatus from '../../shared/http-status';
import catchAsync from '../../utils/catchAsync';
import { sendSuccessResponse } from '../../utils/response';
import avatarService from './avatar.service';

class AvatarController {
  createAvatar = catchAsync(async (req, res) => {
    const result = await avatarService.createAvatarIntoDB(req.body);
    sendSuccessResponse(res, {
      message: 'Avatar created successfully!',
      statusCode: httpStatus.CREATED,
      data: result,
    });
  });
  createManyAvatar = catchAsync(async (req, res) => {
    const result = await avatarService.createManyAvatarIntoDB(req.body);
    sendSuccessResponse(res, {
      message: 'Avatars  created successfully!',
      statusCode: httpStatus.CREATED,
      data: result,
    });
  });

  getAllAvatar = catchAsync(async (req, res) => {
    const result = await avatarService.getAllAvatarFromDB();
    sendSuccessResponse(res, {
      message: 'All Avatar retrieved   successfully!',
      statusCode: httpStatus.OK,
      data: result,
    });
  });

  getAvatarById = catchAsync(async (req, res) => {
    const result = await avatarService.getAvatarByIdFromDB(req.params.id);
    sendSuccessResponse(res, {
      message: 'Avatar retrieved   successfully!',
      statusCode: httpStatus.OK,
      data: result,
    });
  });
}

export default new AvatarController();
