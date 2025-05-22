import httpStatus from '../../shared/http-status';
import catchAsync from '../../utils/catchAsync';
import { sendSuccessResponse } from '../../utils/response';
import userService from './user.service';

class UserController {
  initUser = catchAsync(async (req, res) => {
    const result = await userService.userInit(req);
    res.cookie('token', result.generatedToken, {
      httpOnly: true, // optional but recommended for security
      secure: false, // use true if you're using HTTPS
      sameSite: 'strict', // or 'lax' depending on your use case
      maxAge: 30 * 24 * 60 * 60 * 1000, // 30 days in milliseconds
    });
    sendSuccessResponse(res, {
      message: 'User init successfully!',
      statusCode: httpStatus.OK,
      data: result,
    });
  });
}

export default new UserController();
