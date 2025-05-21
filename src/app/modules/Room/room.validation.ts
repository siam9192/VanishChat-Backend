import { z } from "zod";

const createRoom = z.object({
  name: z.string({required_error:"room name is  required"}).nonempty().max(30),
  photoId: z.number().int(),
  user: z.object({
    name: z.string({required_error:"user name is required"}).nonempty().max(30).optional(),
    avatarId: z.number().int(),
    isAnonymous: z.boolean(),
  }),
})


export default {
    createRoom
}

