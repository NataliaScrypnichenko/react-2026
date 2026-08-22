import {useEffect, useState} from "react";
import type {IPosts} from "../../model/IPosts.ts";
import {getAll} from "../../servise/getneral.api.servise.ts";
import type {IResponseModel} from "../../model/IResponseModel.ts";
import PostComponent from "./PostComponent.tsx";


const PostsComponent = () => {

    const [posts, setPosts] = useState<IPosts[]>([]);

    useEffect(() => {
        getAll<IResponseModel & {posts:IPosts[]}>('/posts')
            .then(value=>setPosts(value.posts));
    })


    return (
        <div>
            {
                posts.map((post: IPosts) => (<PostComponent post={post} key={post.id}/>))
            }
        </div>
    );
};

export default PostsComponent;
