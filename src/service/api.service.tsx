import type {IComment} from "../models/IComment.ts";


const baseUrl = import.meta.env.VITE_API_BASE_URL+"/comments";


const getComments = async ():Promise<IComment[]> => {
        return await fetch(baseUrl)
        .then(res => res.json())
};

export {
    getComments
}
