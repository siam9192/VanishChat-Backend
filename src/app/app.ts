import express from 'express'
import cors from 'cors'
import http from 'http'
import { Server } from 'socket.io'
const app = express()
app.use(cors({origin:'*'}))
export const server = http.createServer(app)
const io  =  new Server (server,{
    cors:{
        origin:'*'
    }
})

app.get('/',(req,res)=>{
    res.send("Hello world")
})
io.on('connection', (socket) => {
  console.log('a user connected',socket.id);
  socket.on('disconnect', () => {
    console.log('user disconnected');
  });
});

export default app