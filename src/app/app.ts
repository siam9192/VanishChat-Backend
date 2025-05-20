import express, { NextFunction, Request, Response } from 'express'
import cors from 'cors'
import http from 'http'
import { sendErrorResponse } from './utils/response'
import routes from './routes'
import { Server } from 'socket.io'
const app = express()
app.use(express.json())
app.use(cors({origin:'*'}))
export const server = http.createServer(app)



const io  =  new Server (server,{
    cors:{
        origin:'*'
    }
})

app.use(routes);

app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  console.log(err);
  sendErrorResponse(res, {
    statusCode: err.statusCode || 500,
    message: err.message || 'Something went wrong',
  });
});

app.use((req, res) => {
  if (req.url === '/') {
    res.status(200).json({
      message: 'Hey welcome to the vanish chat  server',
    });
  }
  else {
      res.status(404).json({
    success: false,
    statusCode: 404,
    message: 'Not Found',
  });
  }
});

// io.on('connection', (socket) => {
//   console.log('a user connected',socket.id);
//   socket.on('disconnect', () => {
//     console.log('user disconnected');
//   });
// });

export default app