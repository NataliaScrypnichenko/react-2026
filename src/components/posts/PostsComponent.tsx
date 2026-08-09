import {useEffect, useState} from "react";
import type {IPost} from "../../models/IPost.ts";
import PostComponent from "./PostComponent.tsx";
import {postService} from "../../services/api.service.tsx";


const PostsComponent = () => {

    const [posts,setPosts]=useState<IPost[]>([])

    useEffect(()=>{
     postService.getPosts().then((allPosts) => {
             setPosts(allPosts);
         });
    },[]);

    return (
        <div>
            {
                posts.map((post) => (<PostComponent item={post} key={post.id}/>))
            }
        </div>
    );
};

export default PostsComponent;
