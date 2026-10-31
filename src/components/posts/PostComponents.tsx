import type {FC} from "react";
import type {IPost} from "../../model/IPost.ts";

type PostsTypeProps={
    post: IPost,
}


const PostComponents:FC<PostsTypeProps> = ({post}) => {
    return (
        <div>
            {
                <div>
                    <p>{post.id}: {post.userId}</p>
                    <h4>{post.body}</h4>
                    <p>{post.title}</p>
                </div>

            }
        </div>
    );
};

export default PostComponents;
