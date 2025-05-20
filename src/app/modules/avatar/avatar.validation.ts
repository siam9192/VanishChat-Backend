import { z } from "zod";

const createAvatar =  z.object({
    url:z.string({required_error:"url is required"}).url("invalid url")
})


const createManyAvatar =   z.object({
    url:z.array(z.string({required_error:"url is required"}).url("invalid url")).min(1,"Minimum 1 url is required")
})



export default {
    createAvatar,
    createManyAvatar
}


