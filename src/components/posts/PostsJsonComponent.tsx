import {useEffect, useState} from "react";
import PostJsonComponent from "./PostJsonComponent.tsx";
import type {IPostJsont} from "../../model/posts/IPostJson.ts";
import {serviceJson} from "../../services/api.service.ts";


const PostsJsonComponent = () => {

    const [posts, setPosts] = useState<IPostJsont[]>([]);

    useEffect(() => {
        // fetch("https://jsonplaceholder.typicode.com/posts")
        // .then(res => res.json())
        serviceJson.getPosts()
        .then(value => setPosts(value));
    },[]);

    return (
        <div>
            {
                posts.map((post) => (<PostJsonComponent post={post} key={post.id} />))
            }
        </div>
    );
};

export default PostsJsonComponent;
