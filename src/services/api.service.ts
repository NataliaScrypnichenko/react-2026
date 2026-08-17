import {urlJson} from "../components/constats/url.ts";
import type {IUserJson} from "../model/users/IUserJson.ts";
import type {IPostJsont} from "../model/posts/IPostJson.ts";
import type {ICommentsJson} from "../model/comments/ICommentsJson.ts";

export const serviceJson = {

    getUsers: async (): Promise<IUserJson[]> => {
        return await fetch(urlJson.users.allUsers)
            .then(res => res.json())
    },
    getPosts:async ():Promise<IPostJsont[]>=>{
        return await fetch(urlJson.posts.allPosts)
            .then(res => res.json())
    },
    getComments:async (): Promise<ICommentsJson[]>=>{
        return await fetch(urlJson.comments.allComments)
        .then(res => res.json())
    }
};
