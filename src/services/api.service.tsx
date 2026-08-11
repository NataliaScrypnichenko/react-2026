import type {IUser} from "../models/IUser.ts";
import type {IPost} from "../models/IPost.ts";
import {urls} from "../constats/urls.ts";

export const userService = {

    getUsers:async ():Promise<IUser[]> => {
      return  await fetch(urls.users.allUsers)
        .then(res => res.json())
    },
    getUser:async (id:number) => {
        return  await fetch(urls.users.byId(id))
            .then(res => res.json())
    }
  };

export const postService = {
    getPosts:async ():Promise<IPost[]> => {
        return await fetch("https://jsonplaceholder.typicode.com/posts")
            .then(res => res.json())
    },
    getAllPostsOfUserById:async (id:number):Promise<IPost[]> => {
        return await fetch(urls.posts.userPostById(id))
            .then(value => value.json())
    }
}
