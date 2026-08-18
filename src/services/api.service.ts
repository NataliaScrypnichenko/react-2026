import {urlDummy, urlJson} from "../components/constats/url.ts";
import type {IUserJson} from "../model/users/IUserJson.ts";
import type {IPostJsont} from "../model/posts/IPostJson.ts";
import type {ICommentsJson} from "../model/comments/ICommentsJson.ts";
import type {IUserDummy} from "../model/users/IUserDummy.tsx";
import type {IPostDummy} from "../model/posts/IPostDummt.ts";
import type {ICommentDummy} from "../model/comments/ICommentDummy.tsx";

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

export const serviceDummy={
    getUsersDummy:async (): Promise<IUserDummy[]> => {
        return await fetch(urlDummy.users.allUsers)
        .then(res => res.json())
    },
    getPostsDummy:async():Promise<IPostDummy[]>=>{
        return await fetch(urlDummy.posts.allPosts)
        .then(res => res.json())
    },
    getCommentsDummy:async():Promise<ICommentDummy[]>=>{
        return await fetch(urlDummy.comments.allComments)
        .then(res => res.json())
    }
}
