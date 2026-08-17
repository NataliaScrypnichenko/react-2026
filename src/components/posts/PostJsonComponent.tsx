import type {FC} from "react";
import type {IPostJsont} from "../../model/posts/IPostJson.ts";

type TypePostsProps={
    post: IPostJsont
}

const PostJsonComponent:FC<TypePostsProps> = ({post}) => {

    return (
        <div>
             <div>
                 <p className="">{post.id}{'='} {post.userId}</p>
                 <p>{post.body}</p>
                  <p>{post.title}</p>
             </div>
        </div>
    );
};

export default PostJsonComponent;
