import {useEffect, useState} from "react";
import type {IPost} from "../../models/IPost.ts";
import PostComponent from "../post-component/PostComponent.tsx";
import {getServer} from "../../services/api.servic.tsx";


const PostsComponent = () => {

    const [posts,setPosts]= useState<IPost[]>([]);

    useEffect(() => {
            getServer()
            .then(value => setPosts(value))

        return () => {}

    },[]);

    return (
        <div>
            {
                posts.map(post => <PostComponent key={post.id} item={post} />)
            }
        </div>
    );
};

export default PostsComponent;
