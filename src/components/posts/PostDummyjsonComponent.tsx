import type {FC} from "react";
import type {IPostDummy} from "../../model/posts/IPostDummt.ts";

type TypePostsProps={
    post:IPostDummy
}

const PostDummyjsonComponent:FC<TypePostsProps> = ({post}) => {
    return (
        <div>
            <div>
                <p>{post.id}{post.userId}</p>
                <p>{post.body}</p>
                <p>{post.title}</p>
            </div>
        </div>
    );
};

export default PostDummyjsonComponent;
