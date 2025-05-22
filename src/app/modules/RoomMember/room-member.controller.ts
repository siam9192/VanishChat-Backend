import httpStatus from '../../shared/http-status';
import catchAsync from '../../utils/catchAsync';
import { sendSuccessResponse } from '../../utils/response';
import roomMemberService from './room-member.service';

class RoomMemberController {
  getRoomMembers = catchAsync(async (req, res) => {
    const result = await roomMemberService.getRoomMembersFromDB(req.user, req.params.id);
    sendSuccessResponse(res, {
      message: 'Room members retrieved  successfully!',
      statusCode: httpStatus.OK,
      data: result,
    });
  });
}

export default new RoomMemberController();
