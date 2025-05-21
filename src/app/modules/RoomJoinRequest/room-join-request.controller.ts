import httpStatus from "../../shared/http-status";
import catchAsync from "../../utils/catchAsync";
import { sendSuccessResponse } from "../../utils/response";
import roomJoinRequestService from "./room-join-request.service";

class RoomJoinRequestController {
  getRoomJoinRequests = catchAsync(async (req, res) => {
    const result = await roomJoinRequestService.getRoomJoinRequestsFromDB(req.user,req.params.id);
    sendSuccessResponse(res, {
      message: 'Room join request retrieved   successfully!',
      statusCode: httpStatus.OK,
      data: result,
    });
  });
}


export default new RoomJoinRequestController()
