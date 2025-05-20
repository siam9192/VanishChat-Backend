import { z } from "zod";

const createRoomPhoto =  z.object({
    url:z.string({required_error:"url is required"}).url("invalid url")
})


const createManyRoomPhoto =   z.object({
    urls:z.array(z.string({required_error:"url is required"}).url("invalid url")).min(1,"Minimum 1 url is required")
})



export default {
    createRoomPhoto,
    createManyRoomPhoto
}


