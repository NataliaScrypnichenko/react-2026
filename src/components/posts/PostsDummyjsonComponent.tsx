import {useEffect, useState} from "react";
import type {IPostDummy} from "../../model/posts/IPostDummt.ts";
import PostJsonComponent from "./PostJsonComponent.tsx";


const PostsDummyjsonComponent = () => {

    const [posts, setPosts] = useState<IPostDummy[]>([]);

    useEffect(() => {
        fetch("https://dummyjson.com/posts")
        .then((res) => res.json())
            .then(data => setPosts(data.posts));

    },[]);

    return (
        <div>
            {posts.map((post) => (<PostJsonComponent post={post} key={post.id} />))}
        </div>
    );
};

export default PostsDummyjsonComponent;
