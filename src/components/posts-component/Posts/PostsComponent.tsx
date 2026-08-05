import {useEffect, useState} from "react";
import type {PostsModel} from "../../../models/posts-model/PostsModel.ts";
import {getPosts} from "../../../services/api.services.ts";
import PostComponent from "../Post/PostComponent.tsx";


const PostsComponent = () => {

    const [posts, setPosts] = useState<PostsModel[]>([]);

    useEffect(() => {
        getPosts()
            .then(value => setPosts(value));
    })
    return (
        <div>
            {
                posts.map((post)=>(<PostComponent post={post} key={post.id}/>))
            }
        </div>
    );
};

export default PostsComponent;
