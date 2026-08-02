import type {IPost} from "../models/IPost.ts";

const baseUrl =import.meta.env.VITE_API_BASE_URL

export const getServer = async ():Promise<IPost[]> => {
       const posts=await fetch(baseUrl+'/'+'posts')
        .then(res => res.json())

       return posts;
}
