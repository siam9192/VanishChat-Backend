import dotenv from 'dotenv';
import path from 'node:path';

dotenv.config({ path: path.join((process.cwd(), '.env')) });

const envConfig = {
  jwt: {
    userIdTokenSecret: process.env.JWT_USER_ID_TOKEN_SECRET,
    userIdTokenExpireTime: process.env.JWT_USER_ID_TOKEN_EXPIRE_TIME,
  },
};

export default envConfig;
