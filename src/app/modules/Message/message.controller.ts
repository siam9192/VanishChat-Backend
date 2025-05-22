import httpStatus from '../../shared/http-status';
import catchAsync from '../../utils/catchAsync';
import { sendSuccessResponse } from '../../utils/response';
import messageService from './message.service';

class MessageController {
  getRoomMessages = catchAsync(async (req, res) => {
    const result = await messageService.getRoomMessagesFromDB(req.user, req.params.code);
    sendSuccessResponse(res, {
      message: 'Room  messages retrieved   successfully!',
      statusCode: httpStatus.OK,
      data: result,
    });
  });
}

export default new MessageController();
