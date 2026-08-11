
import {type FC, useEffect, useState} from "react";
import type {IPost} from "../../models/IPost.ts";
import {postService} from "../../services/api.service.tsx";
import PostComponent from "../posts/PostComponent.tsx";


type PopsTypeProps={
    userId:string
}

const PostsUsersComponent:FC<PopsTypeProps> = ({userId}) => {


    const [posts,setPosts] = useState<IPost[]>([]);

    useEffect(()=>{
        //звернись на сервіс і передай ві айди пости
        if(userId){
            postService.getAllPostsOfUserById(+userId)
                .then(value => setPosts(value))
        }

    },[userId]);//депси ящо воно змінено то useEffect працює наново



    return (
        <div>
            PostsUsersPage content
            {
                posts.map((post) => (<PostComponent item={post} key={post.id}/>))
            }
            </div>
    );
};

export default PostsUsersComponent;
